"""Test db connection with callable password endpoint."""

from typing import Any, Dict

from titiler.pgstac.db import DynamicPasswordConnectionPool


class TestConnection:
    """Test connection class used to simulate a real connection without performing actual database operations."""

    def __init__(self, kwargs: Dict[str, Any]) -> None:
        """Initialize the test connection with the given connection parameters."""
        self.kwargs = kwargs
        self._pool = None

    @classmethod
    def connect(cls, conninfo: str, **kwargs: Any) -> "TestConnection":
        """
        Simulate establishing a connection.

        Instead of opening a real connection, this method returns an instance
        of TestConnection storing the provided connection parameters.
        """
        return cls(kwargs)


def test_dynamic_password_callable_invocation():
    """
    Test that DynamicPasswordConnectionPool correctly invokes the dynamic password callable.

    This test verifies that when a callable password is provided in the nested pool
    kwargs, the _connect() method calls it and updates the connection parameters with the
    resulting password.
    """
    expected_password = "test_password_123"

    def test_password_callable() -> str:
        """Return a fixed test password."""
        return expected_password

    pool_kwargs: Dict[str, Any] = {
        "sslmode": "require",
        "options": "-c search_path=pgstac,public",
        "password": test_password_callable,
    }

    pool = DynamicPasswordConnectionPool(
        conninfo="test_connection_string",
        kwargs=pool_kwargs.copy(),
        min_size=1,
        max_size=2,
        open=False,
        connection_class=TestConnection,
    )

    connection = pool._connect(timeout=10)
    assert connection.kwargs["password"] == expected_password
