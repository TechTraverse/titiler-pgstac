"""titiler-pgstac RDS"""

import logging
import urllib.request
from pathlib import Path
from typing import Tuple, Union

import boto3
from pydantic import PostgresDsn

from titiler.pgstac.settings import PostgresSettings, RDSSettings

logger = logging.getLogger("titiler-pgstac.rds")


_CA_BUNDLE_URL = "https://truststore.pki.rds.amazonaws.com/global/global-bundle.pem"
_CA_BUNDLE_PATH = (
    Path(__file__).absolute().parent.joinpath("certs/rds/global-bundle.pem")
)


def rds_connect_args(
    pg_settings: PostgresSettings, rds_settings: RDSSettings
) -> Tuple[PostgresSettings, dict]:
    """Gather connections parameters and return them as a tuple of PostgresSettings
    and additional kwargs to be passed directly to db.connect_to_db.

    The returned PostgresSettings will be updated with values pulled from SSM
    and SecretsManager based on the RDSSettings.

    The dictionary contains additional kwargs to be passed, e.g. a Callable to
    support IAM-based authentication for RDS.
    """

    host = pg_settings.postgres_host
    port = int(pg_settings.postgres_port or 5432)
    user = pg_settings.postgres_user
    region = "us-east-1"
    dbname = pg_settings.postgres_dbname
    passwd = None if rds_settings.use_iam_auth else (pg_settings.postgres_pass)

    new_pg = PostgresSettings(
        postgres_host=host,
        postgres_dbname=dbname,
        postgres_port=port,
        postgres_user=user,
        postgres_pass=passwd,
    )

    kwargs = {}
    if rds_settings.use_iam_auth:
        logger.info("Setting up password callback to retrieve RDS IAM tokens")
        # provide Callable to retrieve password when connections are created
        kwargs["password"] = get_rds_token(host, port, user, region)
        # IAM auth requires SSL upgrade
        kwargs["ssl"] = "require"
        certpath = rds_cert_path()
        new_pg.database_url = dsn_with_query(new_pg, f"sslrootcert={certpath}")

    return (new_pg, kwargs)


def dsn_with_query(pg_settings: PostgresSettings, query: str) -> PostgresDsn:
    """DSN with query"""
    return PostgresDsn.build(
        scheme="postgresql",
        username=pg_settings.postgres_user,
        password=pg_settings.postgres_pass,
        host=pg_settings.postgres_host,
        port=pg_settings.postgres_port,
        path=pg_settings.postgres_dbname,
        query=query,
    )


def rds_cert_path() -> str:
    """RDS cert path"""
    if not _CA_BUNDLE_PATH.exists():
        _CA_BUNDLE_PATH.parent.mkdir(parents=True, exist_ok=True)
        logger.info(f"Downloading AWS RDS CA bundle from {_CA_BUNDLE_URL}...")
        urllib.request.urlretrieve(_CA_BUNDLE_URL, _CA_BUNDLE_PATH)
    return str(_CA_BUNDLE_PATH.absolute())


def get_rds_token(
    host: Union[str, None],
    port: Union[int, None],
    user: Union[str, None],
    region: Union[str, None],
) -> str:
    """Get RDS token"""
    logger.debug(
        f"Retrieving RDS IAM token with host: {host}, port: {port}, user: {user}, region: {region}"
    )
    rds_client = boto3.client("rds")
    token = rds_client.generate_db_auth_token(
        DBHostname=host,
        Port=port,
        DBUsername=user,
        Region=region or rds_client.meta.region_name,
    )
    return token
