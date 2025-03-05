window.BENCHMARK_DATA = {
  "lastUpdate": 1741138706894,
  "repoUrl": "https://github.com/TechTraverse/titiler-pgstac",
  "entries": {
    "TiTiler-pgSTAC Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "patricia.fricke@noaa.gov",
            "name": "Patricia Fricke"
          },
          "committer": {
            "email": "patricia.fricke@noaa.gov",
            "name": "Patricia Fricke"
          },
          "distinct": true,
          "id": "1f0e72f246f0a17c17a45abdfcaab3d8b15fa8c9",
          "message": "update ci.yml to package repo dynamically",
          "timestamp": "2025-01-10T06:47:48Z",
          "tree_id": "c9bd885e31a89f18fd2d982b71385414dcac74de",
          "url": "https://github.com/TechTraverse/titiler-pgstac/commit/1f0e72f246f0a17c17a45abdfcaab3d8b15fa8c9"
        },
        "date": 1736491928969,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[0/0/0]",
            "value": 4.108453195613079,
            "unit": "iter/sec",
            "range": "stddev: 0.0068772820416944614",
            "extra": "mean: 243.40060660001654 msec\nrounds: 5"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[1/1/1]",
            "value": 8.967901709550318,
            "unit": "iter/sec",
            "range": "stddev: 0.0033717057994953298",
            "extra": "mean: 111.50880466665411 msec\nrounds: 9"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[2/2/1]",
            "value": 11.168493340763606,
            "unit": "iter/sec",
            "range": "stddev: 0.004326635034833716",
            "extra": "mean: 89.53759199999922 msec\nrounds: 11"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[3/5/0]",
            "value": 15.965325757428893,
            "unit": "iter/sec",
            "range": "stddev: 0.00423804799606798",
            "extra": "mean: 62.635740428577584 msec\nrounds: 14"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[4/5/9]",
            "value": 18.975873338794887,
            "unit": "iter/sec",
            "range": "stddev: 0.00378759138964559",
            "extra": "mean: 52.698496777777684 msec\nrounds: 18"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[5/16/5]",
            "value": 16.99823357331497,
            "unit": "iter/sec",
            "range": "stddev: 0.0025824705765761526",
            "extra": "mean: 58.82964224999654 msec\nrounds: 16"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[6/43/31]",
            "value": 16.847034367292693,
            "unit": "iter/sec",
            "range": "stddev: 0.005678056089373712",
            "extra": "mean: 59.357628066660105 msec\nrounds: 15"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patricia.fricke@techtraverse.io",
            "name": "Patty Fricke",
            "username": "pc-ef"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b4bcce6632839d4f7dd0f17215dc14176671128f",
          "message": "Merge pull request #1 from TechTraverse/add-iam-role\n\nadd rds settings and rds.py for iam auth and boto3 dep",
          "timestamp": "2025-01-10T00:00:09-07:00",
          "tree_id": "d376f4f1c1a653cf134a95f4ee561629b72a7a3d",
          "url": "https://github.com/TechTraverse/titiler-pgstac/commit/b4bcce6632839d4f7dd0f17215dc14176671128f"
        },
        "date": 1736492717183,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[0/0/0]",
            "value": 4.109886873900327,
            "unit": "iter/sec",
            "range": "stddev: 0.005676137724006866",
            "extra": "mean: 243.3156996000207 msec\nrounds: 5"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[1/1/1]",
            "value": 8.910888486424183,
            "unit": "iter/sec",
            "range": "stddev: 0.0035025001123210235",
            "extra": "mean: 112.22225499999341 msec\nrounds: 9"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[2/2/1]",
            "value": 11.282240939413917,
            "unit": "iter/sec",
            "range": "stddev: 0.0035160906694943752",
            "extra": "mean: 88.63487363636709 msec\nrounds: 11"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[3/5/0]",
            "value": 16.669966727370063,
            "unit": "iter/sec",
            "range": "stddev: 0.003523336933969804",
            "extra": "mean: 59.98812213332864 msec\nrounds: 15"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[4/5/9]",
            "value": 19.2203053351375,
            "unit": "iter/sec",
            "range": "stddev: 0.004125288652980447",
            "extra": "mean: 52.02830977777732 msec\nrounds: 18"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[5/16/5]",
            "value": 16.95041836514231,
            "unit": "iter/sec",
            "range": "stddev: 0.0025441811156182987",
            "extra": "mean: 58.99559399999532 msec\nrounds: 16"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[6/43/31]",
            "value": 16.9376118923769,
            "unit": "iter/sec",
            "range": "stddev: 0.004493730920771722",
            "extra": "mean: 59.040200375005014 msec\nrounds: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patricia.fricke@techtraverse.io",
            "name": "Patty Fricke",
            "username": "pc-ef"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "25a969cbb0616e2b74b5f8e42273b59f474d24b3",
          "message": "Merge pull request #2 from TechTraverse/add-iam-role\n\nupdate iam code in main",
          "timestamp": "2025-02-18T08:33:12-07:00",
          "tree_id": "094a4a22092a5aeea290e4fd270a3e3c18925b92",
          "url": "https://github.com/TechTraverse/titiler-pgstac/commit/25a969cbb0616e2b74b5f8e42273b59f474d24b3"
        },
        "date": 1739893107328,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[0/0/0]",
            "value": 4.159155408762777,
            "unit": "iter/sec",
            "range": "stddev: 0.002002351440096951",
            "extra": "mean: 240.4334297999867 msec\nrounds: 5"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[1/1/1]",
            "value": 9.191429929525919,
            "unit": "iter/sec",
            "range": "stddev: 0.0029952883953109893",
            "extra": "mean: 108.79699977776782 msec\nrounds: 9"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[2/2/1]",
            "value": 11.55618501698488,
            "unit": "iter/sec",
            "range": "stddev: 0.004658847384310579",
            "extra": "mean: 86.53374781818002 msec\nrounds: 11"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[3/5/0]",
            "value": 17.42757417951916,
            "unit": "iter/sec",
            "range": "stddev: 0.004786490123375472",
            "extra": "mean: 57.38033243749996 msec\nrounds: 16"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[4/5/9]",
            "value": 20.749777664498616,
            "unit": "iter/sec",
            "range": "stddev: 0.0032940722212010886",
            "extra": "mean: 48.19328747367392 msec\nrounds: 19"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[5/16/5]",
            "value": 18.187173127486577,
            "unit": "iter/sec",
            "range": "stddev: 0.0010343412387836962",
            "extra": "mean: 54.98380605882523 msec\nrounds: 17"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[6/43/31]",
            "value": 17.906995179327676,
            "unit": "iter/sec",
            "range": "stddev: 0.004622567552657937",
            "extra": "mean: 55.84409835294015 msec\nrounds: 17"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patricia.fricke@techtraverse.io",
            "name": "Patty Fricke",
            "username": "pc-ef"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "111b0dd814309d7e8d0fb34ccb6ffbcca5dabfbc",
          "message": "Merge pull request #3 from TechTraverse/add-iam-role\n\nremove ssm parameters",
          "timestamp": "2025-02-25T09:52:28-07:00",
          "tree_id": "625acbc00889fa25b6983580d2ddda8d8872d362",
          "url": "https://github.com/TechTraverse/titiler-pgstac/commit/111b0dd814309d7e8d0fb34ccb6ffbcca5dabfbc"
        },
        "date": 1740502629715,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[0/0/0]",
            "value": 4.2210301012663525,
            "unit": "iter/sec",
            "range": "stddev: 0.004587315830701517",
            "extra": "mean: 236.90899520000812 msec\nrounds: 5"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[1/1/1]",
            "value": 9.396038444567793,
            "unit": "iter/sec",
            "range": "stddev: 0.0030326125849441483",
            "extra": "mean: 106.42783188888909 msec\nrounds: 9"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[2/2/1]",
            "value": 11.916202582296181,
            "unit": "iter/sec",
            "range": "stddev: 0.004416250585904494",
            "extra": "mean: 83.91935208333005 msec\nrounds: 12"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[3/5/0]",
            "value": 17.7012351933366,
            "unit": "iter/sec",
            "range": "stddev: 0.004253680252460605",
            "extra": "mean: 56.49323276470769 msec\nrounds: 17"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[4/5/9]",
            "value": 20.71492186564331,
            "unit": "iter/sec",
            "range": "stddev: 0.0037325988292905695",
            "extra": "mean: 48.27437952631373 msec\nrounds: 19"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[5/16/5]",
            "value": 17.916401430151325,
            "unit": "iter/sec",
            "range": "stddev: 0.003529807179561626",
            "extra": "mean: 55.81477976470824 msec\nrounds: 17"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[6/43/31]",
            "value": 17.96546471000626,
            "unit": "iter/sec",
            "range": "stddev: 0.0031909704664220447",
            "extra": "mean: 55.6623508571436 msec\nrounds: 14"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patricia.fricke@techtraverse.io",
            "name": "Patty Fricke",
            "username": "pc-ef"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8407c40be74ceb0a110b989ce224587af1479ee5",
          "message": "Merge pull request #4 from TechTraverse/add-iam-role\n\nIAM code updates",
          "timestamp": "2025-02-26T07:37:47-07:00",
          "tree_id": "06d76d1a429d4e3902261e2824a2d9420b644ef7",
          "url": "https://github.com/TechTraverse/titiler-pgstac/commit/8407c40be74ceb0a110b989ce224587af1479ee5"
        },
        "date": 1740581066237,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[0/0/0]",
            "value": 4.193036051924428,
            "unit": "iter/sec",
            "range": "stddev: 0.004867041995569749",
            "extra": "mean: 238.4906753999985 msec\nrounds: 5"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[1/1/1]",
            "value": 9.22471473353855,
            "unit": "iter/sec",
            "range": "stddev: 0.003595421259894981",
            "extra": "mean: 108.40443622221427 msec\nrounds: 9"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[2/2/1]",
            "value": 11.877108192102337,
            "unit": "iter/sec",
            "range": "stddev: 0.004468480104115894",
            "extra": "mean: 84.19557890909407 msec\nrounds: 11"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[3/5/0]",
            "value": 17.740555608433397,
            "unit": "iter/sec",
            "range": "stddev: 0.004423995321785757",
            "extra": "mean: 56.36802037500033 msec\nrounds: 16"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[4/5/9]",
            "value": 20.811291505758252,
            "unit": "iter/sec",
            "range": "stddev: 0.0034782186858211875",
            "extra": "mean: 48.0508381578967 msec\nrounds: 19"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[5/16/5]",
            "value": 18.351749157080338,
            "unit": "iter/sec",
            "range": "stddev: 0.001004176184370048",
            "extra": "mean: 54.49071864706625 msec\nrounds: 17"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[6/43/31]",
            "value": 18.388291675392846,
            "unit": "iter/sec",
            "range": "stddev: 0.003896877611132023",
            "extra": "mean: 54.38243082353304 msec\nrounds: 17"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patricia.fricke@techtraverse.io",
            "name": "Patty Fricke",
            "username": "pc-ef"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b6f0ec967ab3938de2703f634d2b9caf2d118824",
          "message": "Merge pull request #5 from TechTraverse/add-iam-role\n\nadd region to postgres settings",
          "timestamp": "2025-02-26T11:25:48-07:00",
          "tree_id": "3e8b3b0e76e2f60f394ac4ebf2c0c05358651a09",
          "url": "https://github.com/TechTraverse/titiler-pgstac/commit/b6f0ec967ab3938de2703f634d2b9caf2d118824"
        },
        "date": 1740594703243,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[0/0/0]",
            "value": 4.2060880658304285,
            "unit": "iter/sec",
            "range": "stddev: 0.005265296713953794",
            "extra": "mean: 237.7506091999919 msec\nrounds: 5"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[1/1/1]",
            "value": 9.388663360908113,
            "unit": "iter/sec",
            "range": "stddev: 0.003825053025926448",
            "extra": "mean: 106.51143422222731 msec\nrounds: 9"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[2/2/1]",
            "value": 11.742602373739862,
            "unit": "iter/sec",
            "range": "stddev: 0.006373235936655773",
            "extra": "mean: 85.15999845454303 msec\nrounds: 11"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[3/5/0]",
            "value": 17.88638429602268,
            "unit": "iter/sec",
            "range": "stddev: 0.004069342521769023",
            "extra": "mean: 55.90844876470455 msec\nrounds: 17"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[4/5/9]",
            "value": 21.058267844752596,
            "unit": "iter/sec",
            "range": "stddev: 0.003947557253604443",
            "extra": "mean: 47.487286578947426 msec\nrounds: 19"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[5/16/5]",
            "value": 18.643917262313302,
            "unit": "iter/sec",
            "range": "stddev: 0.0027487835606406935",
            "extra": "mean: 53.63679670588293 msec\nrounds: 17"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[6/43/31]",
            "value": 18.862923164607604,
            "unit": "iter/sec",
            "range": "stddev: 0.0030648673993035",
            "extra": "mean: 53.01405255556012 msec\nrounds: 18"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patricia.fricke@techtraverse.io",
            "name": "Patty Fricke",
            "username": "pc-ef"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3ff44f9fcf6a6e182adf6344167ee3c208f7e2ca",
          "message": "Merge pull request #6 from TechTraverse/add-iam-role\n\nchange order of settings creation",
          "timestamp": "2025-02-26T16:39:09-07:00",
          "tree_id": "543fbd700d1e766d9aa0a36ba172f320c9d74203",
          "url": "https://github.com/TechTraverse/titiler-pgstac/commit/3ff44f9fcf6a6e182adf6344167ee3c208f7e2ca"
        },
        "date": 1740613522554,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[0/0/0]",
            "value": 4.220251402705288,
            "unit": "iter/sec",
            "range": "stddev: 0.002100972677675928",
            "extra": "mean: 236.95270840001967 msec\nrounds: 5"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[1/1/1]",
            "value": 9.408254160349015,
            "unit": "iter/sec",
            "range": "stddev: 0.002726969381713883",
            "extra": "mean: 106.2896455555473 msec\nrounds: 9"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[2/2/1]",
            "value": 12.044268697552857,
            "unit": "iter/sec",
            "range": "stddev: 0.004244294622870439",
            "extra": "mean: 83.02704175000504 msec\nrounds: 12"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[3/5/0]",
            "value": 17.48230273596119,
            "unit": "iter/sec",
            "range": "stddev: 0.00618888177893866",
            "extra": "mean: 57.20070262500343 msec\nrounds: 16"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[4/5/9]",
            "value": 21.188324845266727,
            "unit": "iter/sec",
            "range": "stddev: 0.0031704551498577867",
            "extra": "mean: 47.19580274999373 msec\nrounds: 20"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[5/16/5]",
            "value": 18.402515077362935,
            "unit": "iter/sec",
            "range": "stddev: 0.0027926074450720867",
            "extra": "mean: 54.340398352946174 msec\nrounds: 17"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[6/43/31]",
            "value": 18.48075800307759,
            "unit": "iter/sec",
            "range": "stddev: 0.0029384954461589437",
            "extra": "mean: 54.11033464284693 msec\nrounds: 14"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patricia.fricke@techtraverse.io",
            "name": "Patty Fricke",
            "username": "pc-ef"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8673ca99919a895d3909395221f312ff3da10d97",
          "message": "Merge pull request #7 from TechTraverse/add-iam-role\n\nconsolidate RDSSettings with PostgresSettings class",
          "timestamp": "2025-02-27T10:35:05-07:00",
          "tree_id": "e934a0ab435d22c754d0307af32393e026523dfd",
          "url": "https://github.com/TechTraverse/titiler-pgstac/commit/8673ca99919a895d3909395221f312ff3da10d97"
        },
        "date": 1740678012865,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[0/0/0]",
            "value": 4.00201536050818,
            "unit": "iter/sec",
            "range": "stddev: 0.006379544424145571",
            "extra": "mean: 249.8741033999977 msec\nrounds: 5"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[1/1/1]",
            "value": 8.767263948212653,
            "unit": "iter/sec",
            "range": "stddev: 0.005058169082982017",
            "extra": "mean: 114.06067000000222 msec\nrounds: 9"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[2/2/1]",
            "value": 11.1237040767191,
            "unit": "iter/sec",
            "range": "stddev: 0.006411307505190669",
            "extra": "mean: 89.8981124545473 msec\nrounds: 11"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[3/5/0]",
            "value": 16.42386805728926,
            "unit": "iter/sec",
            "range": "stddev: 0.0049134521390655096",
            "extra": "mean: 60.88699668749342 msec\nrounds: 16"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[4/5/9]",
            "value": 19.18146205298076,
            "unit": "iter/sec",
            "range": "stddev: 0.0036005928642513026",
            "extra": "mean: 52.133669333334375 msec\nrounds: 18"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[5/16/5]",
            "value": 17.038275937408383,
            "unit": "iter/sec",
            "range": "stddev: 0.0011425362678793725",
            "extra": "mean: 58.69138425000209 msec\nrounds: 16"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[6/43/31]",
            "value": 17.353258407246294,
            "unit": "iter/sec",
            "range": "stddev: 0.004250280744669162",
            "extra": "mean: 57.62606517646418 msec\nrounds: 17"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patricia.fricke@techtraverse.io",
            "name": "Patty Fricke",
            "username": "pc-ef"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3cc0d6abbb01d6b58cdf1f612919d9ae5885de0b",
          "message": "Merge pull request #8 from TechTraverse/add-iam-role\n\nwrap password/token in quote function",
          "timestamp": "2025-02-28T10:17:36-07:00",
          "tree_id": "ad7e878756e852320b1e967fe1d4d1d11d202427",
          "url": "https://github.com/TechTraverse/titiler-pgstac/commit/3cc0d6abbb01d6b58cdf1f612919d9ae5885de0b"
        },
        "date": 1740763375616,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[0/0/0]",
            "value": 4.227219429106619,
            "unit": "iter/sec",
            "range": "stddev: 0.0034022017501709545",
            "extra": "mean: 236.56212240000514 msec\nrounds: 5"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[1/1/1]",
            "value": 9.492263577898017,
            "unit": "iter/sec",
            "range": "stddev: 0.0036741211278006475",
            "extra": "mean: 105.348949888878 msec\nrounds: 9"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[2/2/1]",
            "value": 11.67262523588505,
            "unit": "iter/sec",
            "range": "stddev: 0.004004719170001096",
            "extra": "mean: 85.67053081818378 msec\nrounds: 11"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[3/5/0]",
            "value": 17.612556434906168,
            "unit": "iter/sec",
            "range": "stddev: 0.0037046014068255707",
            "extra": "mean: 56.77767470587683 msec\nrounds: 17"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[4/5/9]",
            "value": 20.548091508781322,
            "unit": "iter/sec",
            "range": "stddev: 0.0037351518826622804",
            "extra": "mean: 48.66632015789133 msec\nrounds: 19"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[5/16/5]",
            "value": 17.629258177241773,
            "unit": "iter/sec",
            "range": "stddev: 0.0029020749050084585",
            "extra": "mean: 56.723884235295564 msec\nrounds: 17"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[6/43/31]",
            "value": 17.907094660078386,
            "unit": "iter/sec",
            "range": "stddev: 0.003212459987166913",
            "extra": "mean: 55.84378811764335 msec\nrounds: 17"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patricia.fricke@techtraverse.io",
            "name": "Patty Fricke",
            "username": "pc-ef"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "507fbd05bddd4b2e4562e2ca06f71b563622b8f9",
          "message": "Merge pull request #9 from TechTraverse/add-iam-role\n\nprint token to logs",
          "timestamp": "2025-02-28T11:33:16-07:00",
          "tree_id": "8f654005d4b08dcae47633ee1c5048b3c53f2a0a",
          "url": "https://github.com/TechTraverse/titiler-pgstac/commit/507fbd05bddd4b2e4562e2ca06f71b563622b8f9"
        },
        "date": 1740767942951,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[0/0/0]",
            "value": 4.212474589721542,
            "unit": "iter/sec",
            "range": "stddev: 0.004687889670120038",
            "extra": "mean: 237.3901559999922 msec\nrounds: 5"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[1/1/1]",
            "value": 9.46526901845312,
            "unit": "iter/sec",
            "range": "stddev: 0.004633525653155264",
            "extra": "mean: 105.64940077777389 msec\nrounds: 9"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[2/2/1]",
            "value": 11.854741592400849,
            "unit": "iter/sec",
            "range": "stddev: 0.003838513662680982",
            "extra": "mean: 84.35443254545692 msec\nrounds: 11"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[3/5/0]",
            "value": 17.76397344741688,
            "unit": "iter/sec",
            "range": "stddev: 0.003832176461590301",
            "extra": "mean: 56.293711705891646 msec\nrounds: 17"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[4/5/9]",
            "value": 20.901307939053584,
            "unit": "iter/sec",
            "range": "stddev: 0.004004548187135112",
            "extra": "mean: 47.84389584211256 msec\nrounds: 19"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[5/16/5]",
            "value": 18.570790945660566,
            "unit": "iter/sec",
            "range": "stddev: 0.0025560919809355545",
            "extra": "mean: 53.84800264706387 msec\nrounds: 17"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[6/43/31]",
            "value": 18.493880787875952,
            "unit": "iter/sec",
            "range": "stddev: 0.004352633538246907",
            "extra": "mean: 54.07193933333727 msec\nrounds: 18"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patricia.fricke@techtraverse.io",
            "name": "Patty Fricke",
            "username": "pc-ef"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "773b5d5fe0e19f7d1bea864e5be1e767a92e7ae4",
          "message": "Merge pull request #10 from TechTraverse/add-iam-role\n\nadd region to generate_db_auth_token function",
          "timestamp": "2025-02-28T12:02:10-07:00",
          "tree_id": "5f670e66bdf7e245ccd70c390d161de76304cff5",
          "url": "https://github.com/TechTraverse/titiler-pgstac/commit/773b5d5fe0e19f7d1bea864e5be1e767a92e7ae4"
        },
        "date": 1740769638327,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[0/0/0]",
            "value": 4.27772841331464,
            "unit": "iter/sec",
            "range": "stddev: 0.0055630762524673",
            "extra": "mean: 233.76893140000448 msec\nrounds: 5"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[1/1/1]",
            "value": 9.480850226339642,
            "unit": "iter/sec",
            "range": "stddev: 0.0040712254925376464",
            "extra": "mean: 105.47577233335106 msec\nrounds: 9"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[2/2/1]",
            "value": 11.907566961547042,
            "unit": "iter/sec",
            "range": "stddev: 0.004836647780729736",
            "extra": "mean: 83.98021218182419 msec\nrounds: 11"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[3/5/0]",
            "value": 18.018491502342037,
            "unit": "iter/sec",
            "range": "stddev: 0.00470251738464752",
            "extra": "mean: 55.49854158823564 msec\nrounds: 17"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[4/5/9]",
            "value": 21.168641858231354,
            "unit": "iter/sec",
            "range": "stddev: 0.004098383651543674",
            "extra": "mean: 47.23968626315785 msec\nrounds: 19"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[5/16/5]",
            "value": 18.499190048870197,
            "unit": "iter/sec",
            "range": "stddev: 0.002184753706535793",
            "extra": "mean: 54.05642070589318 msec\nrounds: 17"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[6/43/31]",
            "value": 17.864136773024782,
            "unit": "iter/sec",
            "range": "stddev: 0.005072193848985282",
            "extra": "mean: 55.978075666663095 msec\nrounds: 15"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patricia.fricke@techtraverse.io",
            "name": "Patty Fricke",
            "username": "pc-ef"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "95cf0d5fb289c135ee007fe94f19d61a8f43bc18",
          "message": "Merge pull request #11 from TechTraverse/add-iam-role\n\nfix logger statements",
          "timestamp": "2025-02-28T12:16:36-07:00",
          "tree_id": "8031508c27dd1604b037ca55241d09597dd7e169",
          "url": "https://github.com/TechTraverse/titiler-pgstac/commit/95cf0d5fb289c135ee007fe94f19d61a8f43bc18"
        },
        "date": 1740770508779,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[0/0/0]",
            "value": 4.332106015641516,
            "unit": "iter/sec",
            "range": "stddev: 0.002263488291500354",
            "extra": "mean: 230.8346094000001 msec\nrounds: 5"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[1/1/1]",
            "value": 9.773200598457029,
            "unit": "iter/sec",
            "range": "stddev: 0.0031376535140400707",
            "extra": "mean: 102.32062566667031 msec\nrounds: 9"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[2/2/1]",
            "value": 12.564206249262341,
            "unit": "iter/sec",
            "range": "stddev: 0.005043758946527344",
            "extra": "mean: 79.59117990909382 msec\nrounds: 11"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[3/5/0]",
            "value": 18.51512697156262,
            "unit": "iter/sec",
            "range": "stddev: 0.00339963699206516",
            "extra": "mean: 54.009891562499135 msec\nrounds: 16"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[4/5/9]",
            "value": 22.048937175081715,
            "unit": "iter/sec",
            "range": "stddev: 0.0024177518855392818",
            "extra": "mean: 45.35365999999925 msec\nrounds: 20"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[5/16/5]",
            "value": 19.014475145019286,
            "unit": "iter/sec",
            "range": "stddev: 0.0012517533513873621",
            "extra": "mean: 52.59151211764808 msec\nrounds: 17"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[6/43/31]",
            "value": 18.783118178750914,
            "unit": "iter/sec",
            "range": "stddev: 0.003470051495203623",
            "extra": "mean: 53.23929661110722 msec\nrounds: 18"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patricia.fricke@techtraverse.io",
            "name": "Patty Fricke",
            "username": "pc-ef"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6af6d5ebeb89a7fb9be2425f8829028695a97cc0",
          "message": "Merge pull request #12 from TechTraverse/add-iam-role\n\nadd try/except for token",
          "timestamp": "2025-02-28T12:31:58-07:00",
          "tree_id": "56d26ace88a409d1b9d5a46527dcda4a24c744ba",
          "url": "https://github.com/TechTraverse/titiler-pgstac/commit/6af6d5ebeb89a7fb9be2425f8829028695a97cc0"
        },
        "date": 1740771419901,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[0/0/0]",
            "value": 4.257972101102456,
            "unit": "iter/sec",
            "range": "stddev: 0.005454756058191319",
            "extra": "mean: 234.8535820000052 msec\nrounds: 5"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[1/1/1]",
            "value": 9.474114494889056,
            "unit": "iter/sec",
            "range": "stddev: 0.0029864298315542995",
            "extra": "mean: 105.55076155554843 msec\nrounds: 9"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[2/2/1]",
            "value": 12.187062965342252,
            "unit": "iter/sec",
            "range": "stddev: 0.005318468137660681",
            "extra": "mean: 82.05422445455599 msec\nrounds: 11"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[3/5/0]",
            "value": 18.199348124831122,
            "unit": "iter/sec",
            "range": "stddev: 0.004160390409563854",
            "extra": "mean: 54.94702299999437 msec\nrounds: 17"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[4/5/9]",
            "value": 21.397305950571464,
            "unit": "iter/sec",
            "range": "stddev: 0.0034894252201091275",
            "extra": "mean: 46.73485542105326 msec\nrounds: 19"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[5/16/5]",
            "value": 18.305461491507298,
            "unit": "iter/sec",
            "range": "stddev: 0.0029017126886113453",
            "extra": "mean: 54.62850529411365 msec\nrounds: 17"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[6/43/31]",
            "value": 18.57324983933374,
            "unit": "iter/sec",
            "range": "stddev: 0.003127643520126072",
            "extra": "mean: 53.84087376471063 msec\nrounds: 17"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patricia.fricke@techtraverse.io",
            "name": "Patty Fricke",
            "username": "pc-ef"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "91bc3fb1fb64ebaf4276dbc00d94c042b1fde299",
          "message": "Merge pull request #14 from TechTraverse/add-iam-role\n\ntroubleshoot database_url",
          "timestamp": "2025-02-28T14:07:33-07:00",
          "tree_id": "265e38e6ae67f91452cf766b71bcd4b9692ba694",
          "url": "https://github.com/TechTraverse/titiler-pgstac/commit/91bc3fb1fb64ebaf4276dbc00d94c042b1fde299"
        },
        "date": 1740777138444,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[0/0/0]",
            "value": 4.177552040912508,
            "unit": "iter/sec",
            "range": "stddev: 0.005175045342105356",
            "extra": "mean: 239.37463620000017 msec\nrounds: 5"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[1/1/1]",
            "value": 9.333103397467237,
            "unit": "iter/sec",
            "range": "stddev: 0.002469668460527557",
            "extra": "mean: 107.14549677777858 msec\nrounds: 9"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[2/2/1]",
            "value": 11.969610234702143,
            "unit": "iter/sec",
            "range": "stddev: 0.005163895391535649",
            "extra": "mean: 83.54490918182219 msec\nrounds: 11"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[3/5/0]",
            "value": 17.836374270532723,
            "unit": "iter/sec",
            "range": "stddev: 0.0042561533408604175",
            "extra": "mean: 56.065206124996436 msec\nrounds: 16"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[4/5/9]",
            "value": 21.017894995313178,
            "unit": "iter/sec",
            "range": "stddev: 0.0036372792691484815",
            "extra": "mean: 47.57850394737399 msec\nrounds: 19"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[5/16/5]",
            "value": 18.21442312909563,
            "unit": "iter/sec",
            "range": "stddev: 0.0006367583967532837",
            "extra": "mean: 54.901546588242205 msec\nrounds: 17"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[6/43/31]",
            "value": 17.954302015571223,
            "unit": "iter/sec",
            "range": "stddev: 0.0042923190080715835",
            "extra": "mean: 55.696957705887435 msec\nrounds: 17"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patricia.fricke@techtraverse.io",
            "name": "Patty Fricke",
            "username": "pc-ef"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "37cf304e3a1d5f15e494b567779bd0b60d7efdd6",
          "message": "Merge pull request #16 from TechTraverse/add-iam-role\n\nuncomment benchmark workflow; remove ssl mode when IAM auth is off",
          "timestamp": "2025-03-03T12:21:39-07:00",
          "tree_id": "3e92b745bd689a220e37e7166e950c9172d435e7",
          "url": "https://github.com/TechTraverse/titiler-pgstac/commit/37cf304e3a1d5f15e494b567779bd0b60d7efdd6"
        },
        "date": 1741029998161,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[0/0/0]",
            "value": 4.109670708697467,
            "unit": "iter/sec",
            "range": "stddev: 0.005672473924972492",
            "extra": "mean: 243.32849779999606 msec\nrounds: 5"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[1/1/1]",
            "value": 9.055382338053821,
            "unit": "iter/sec",
            "range": "stddev: 0.004012793103579479",
            "extra": "mean: 110.43156022221802 msec\nrounds: 9"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[2/2/1]",
            "value": 11.333775179528237,
            "unit": "iter/sec",
            "range": "stddev: 0.0050312759031153585",
            "extra": "mean: 88.23185427272827 msec\nrounds: 11"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[3/5/0]",
            "value": 17.15284466233136,
            "unit": "iter/sec",
            "range": "stddev: 0.0046444270926944715",
            "extra": "mean: 58.29936781250389 msec\nrounds: 16"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[4/5/9]",
            "value": 20.162607554225115,
            "unit": "iter/sec",
            "range": "stddev: 0.004692957754082273",
            "extra": "mean: 49.59675961110735 msec\nrounds: 18"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[5/16/5]",
            "value": 17.72525128019706,
            "unit": "iter/sec",
            "range": "stddev: 0.003034038089221342",
            "extra": "mean: 56.41668962499935 msec\nrounds: 16"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[6/43/31]",
            "value": 18.041485066206445,
            "unit": "iter/sec",
            "range": "stddev: 0.0034822926765886043",
            "extra": "mean: 55.42780964706186 msec\nrounds: 17"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patricia.fricke@techtraverse.io",
            "name": "Patty Fricke",
            "username": "pc-ef"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "37178fe763ba24e67b55aad9ba6bb3afaf9ab880",
          "message": "Merge pull request #17 from TechTraverse/add-iam-role\n\nmove CA cert function",
          "timestamp": "2025-03-03T13:45:53-07:00",
          "tree_id": "30eb27c50a35bc138cd90d3075bdbceadab753ad",
          "url": "https://github.com/TechTraverse/titiler-pgstac/commit/37178fe763ba24e67b55aad9ba6bb3afaf9ab880"
        },
        "date": 1741035073609,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[0/0/0]",
            "value": 4.190244667087108,
            "unit": "iter/sec",
            "range": "stddev: 0.0036334690302604073",
            "extra": "mean: 238.64954900000157 msec\nrounds: 5"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[1/1/1]",
            "value": 9.337101076325004,
            "unit": "iter/sec",
            "range": "stddev: 0.0027817827780769835",
            "extra": "mean: 107.09962244444189 msec\nrounds: 9"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[2/2/1]",
            "value": 11.947904365055102,
            "unit": "iter/sec",
            "range": "stddev: 0.003879746748462911",
            "extra": "mean: 83.69668599999613 msec\nrounds: 11"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[3/5/0]",
            "value": 17.747316941831656,
            "unit": "iter/sec",
            "range": "stddev: 0.004444965300386414",
            "extra": "mean: 56.34654541177042 msec\nrounds: 17"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[4/5/9]",
            "value": 20.27971646412134,
            "unit": "iter/sec",
            "range": "stddev: 0.006093198310843195",
            "extra": "mean: 49.31035410525534 msec\nrounds: 19"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[5/16/5]",
            "value": 17.904562866205254,
            "unit": "iter/sec",
            "range": "stddev: 0.0034227680967459646",
            "extra": "mean: 55.85168470588542 msec\nrounds: 17"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[6/43/31]",
            "value": 18.22956507816659,
            "unit": "iter/sec",
            "range": "stddev: 0.003433396499287852",
            "extra": "mean: 54.85594394118005 msec\nrounds: 17"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patricia.fricke@techtraverse.io",
            "name": "Patty Fricke",
            "username": "pc-ef"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d66930ce746e88de008cd52b6066592390fdcade",
          "message": "Merge pull request #18 from TechTraverse/add-iam-role\n\nAdd iam role",
          "timestamp": "2025-03-03T15:51:36-07:00",
          "tree_id": "9dfe7cab4e85ce0120489625be31e0c381c23e68",
          "url": "https://github.com/TechTraverse/titiler-pgstac/commit/d66930ce746e88de008cd52b6066592390fdcade"
        },
        "date": 1741042601247,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[0/0/0]",
            "value": 4.180975438410694,
            "unit": "iter/sec",
            "range": "stddev: 0.00719428553002624",
            "extra": "mean: 239.17863540000326 msec\nrounds: 5"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[1/1/1]",
            "value": 9.249290332269286,
            "unit": "iter/sec",
            "range": "stddev: 0.00316419389344575",
            "extra": "mean: 108.11640288889635 msec\nrounds: 9"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[2/2/1]",
            "value": 11.800238900556687,
            "unit": "iter/sec",
            "range": "stddev: 0.004133858732331629",
            "extra": "mean: 84.74404699999964 msec\nrounds: 11"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[3/5/0]",
            "value": 17.550925264030127,
            "unit": "iter/sec",
            "range": "stddev: 0.004366196280609687",
            "extra": "mean: 56.97705305881835 msec\nrounds: 17"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[4/5/9]",
            "value": 20.9852540250428,
            "unit": "iter/sec",
            "range": "stddev: 0.003667182788968086",
            "extra": "mean: 47.65250869999704 msec\nrounds: 20"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[5/16/5]",
            "value": 17.860926859599317,
            "unit": "iter/sec",
            "range": "stddev: 0.0031255317227342977",
            "extra": "mean: 55.98813588235216 msec\nrounds: 17"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[6/43/31]",
            "value": 17.923599999509978,
            "unit": "iter/sec",
            "range": "stddev: 0.003712071112009123",
            "extra": "mean: 55.79236314285855 msec\nrounds: 14"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patricia.fricke@techtraverse.io",
            "name": "Patty Fricke",
            "username": "pc-ef"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6f3aa8ed02aca3559ac2383a8d7ed4124a321fa2",
          "message": "Merge pull request #19 from TechTraverse/add-iam-role\n\nadd troubleshoooting statements",
          "timestamp": "2025-03-04T09:03:32-07:00",
          "tree_id": "748ac6ff9ff2272e328bea1e9d08606767ca77e4",
          "url": "https://github.com/TechTraverse/titiler-pgstac/commit/6f3aa8ed02aca3559ac2383a8d7ed4124a321fa2"
        },
        "date": 1741104548791,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[0/0/0]",
            "value": 4.28411588207862,
            "unit": "iter/sec",
            "range": "stddev: 0.0033131598746394043",
            "extra": "mean: 233.4203900000034 msec\nrounds: 5"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[1/1/1]",
            "value": 9.365867099088582,
            "unit": "iter/sec",
            "range": "stddev: 0.003980200645300884",
            "extra": "mean: 106.77068011111463 msec\nrounds: 9"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[2/2/1]",
            "value": 11.621771289619286,
            "unit": "iter/sec",
            "range": "stddev: 0.008600891540635449",
            "extra": "mean: 86.04540349999941 msec\nrounds: 12"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[3/5/0]",
            "value": 17.80746681476097,
            "unit": "iter/sec",
            "range": "stddev: 0.004384904808488849",
            "extra": "mean: 56.156218647060996 msec\nrounds: 17"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[4/5/9]",
            "value": 20.387796085859947,
            "unit": "iter/sec",
            "range": "stddev: 0.004054518051489981",
            "extra": "mean: 49.04895044999762 msec\nrounds: 20"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[5/16/5]",
            "value": 17.843898785576496,
            "unit": "iter/sec",
            "range": "stddev: 0.0031107009936291855",
            "extra": "mean: 56.041564235295695 msec\nrounds: 17"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[6/43/31]",
            "value": 18.347296689181057,
            "unit": "iter/sec",
            "range": "stddev: 0.0027557074616174787",
            "extra": "mean: 54.50394229410784 msec\nrounds: 17"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patricia.fricke@techtraverse.io",
            "name": "Patty Fricke",
            "username": "pc-ef"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "98a990a0ad457bb8ea87af37085f98971cb67e44",
          "message": "Merge pull request #20 from TechTraverse/add-iam-role\n\nAdd iam role",
          "timestamp": "2025-03-04T13:11:39-07:00",
          "tree_id": "b9827e03754d9a5f9d3ad127eb81c0070066be25",
          "url": "https://github.com/TechTraverse/titiler-pgstac/commit/98a990a0ad457bb8ea87af37085f98971cb67e44"
        },
        "date": 1741119389478,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[0/0/0]",
            "value": 4.166056363711577,
            "unit": "iter/sec",
            "range": "stddev: 0.0029084883766624377",
            "extra": "mean: 240.03515859998856 msec\nrounds: 5"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[1/1/1]",
            "value": 9.119600209859424,
            "unit": "iter/sec",
            "range": "stddev: 0.001184375789185314",
            "extra": "mean: 109.65392966666185 msec\nrounds: 9"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[2/2/1]",
            "value": 11.58123085799559,
            "unit": "iter/sec",
            "range": "stddev: 0.00433390168222058",
            "extra": "mean: 86.34660790909007 msec\nrounds: 11"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[3/5/0]",
            "value": 17.32481168292544,
            "unit": "iter/sec",
            "range": "stddev: 0.0038063423455529898",
            "extra": "mean: 57.72068512499651 msec\nrounds: 16"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[4/5/9]",
            "value": 19.62039026996573,
            "unit": "iter/sec",
            "range": "stddev: 0.0031243501872594078",
            "extra": "mean: 50.967385777782845 msec\nrounds: 18"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[5/16/5]",
            "value": 17.396480689565152,
            "unit": "iter/sec",
            "range": "stddev: 0.0003480828821949676",
            "extra": "mean: 57.4828908124978 msec\nrounds: 16"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[6/43/31]",
            "value": 17.26515003589105,
            "unit": "iter/sec",
            "range": "stddev: 0.0035797037577377355",
            "extra": "mean: 57.92014537500023 msec\nrounds: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patricia.fricke@techtraverse.io",
            "name": "Patty Fricke",
            "username": "pc-ef"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "860843be8c0a7d8d153bb1c3e98dfc7cf56e93e0",
          "message": "Merge pull request #21 from TechTraverse/add-iam-role\n\nAdd iam role",
          "timestamp": "2025-03-04T17:06:57-07:00",
          "tree_id": "c1a33378c329d6ef513db8c5e96251e60356d579",
          "url": "https://github.com/TechTraverse/titiler-pgstac/commit/860843be8c0a7d8d153bb1c3e98dfc7cf56e93e0"
        },
        "date": 1741133517745,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[0/0/0]",
            "value": 4.297446737685762,
            "unit": "iter/sec",
            "range": "stddev: 0.004691148466743417",
            "extra": "mean: 232.6963104000015 msec\nrounds: 5"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[1/1/1]",
            "value": 9.340146513586195,
            "unit": "iter/sec",
            "range": "stddev: 0.002460391723117681",
            "extra": "mean: 107.06470166665996 msec\nrounds: 9"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[2/2/1]",
            "value": 11.6386963558424,
            "unit": "iter/sec",
            "range": "stddev: 0.00468237859997335",
            "extra": "mean: 85.92027572727416 msec\nrounds: 11"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[3/5/0]",
            "value": 17.892412391724278,
            "unit": "iter/sec",
            "range": "stddev: 0.004162083375974265",
            "extra": "mean: 55.88961276471176 msec\nrounds: 17"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[4/5/9]",
            "value": 20.770556425230073,
            "unit": "iter/sec",
            "range": "stddev: 0.0033592682717509805",
            "extra": "mean: 48.14507514999917 msec\nrounds: 20"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[5/16/5]",
            "value": 18.3324916365184,
            "unit": "iter/sec",
            "range": "stddev: 0.003085073131386418",
            "extra": "mean: 54.54795888235922 msec\nrounds: 17"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[6/43/31]",
            "value": 18.258807105936008,
            "unit": "iter/sec",
            "range": "stddev: 0.002977741740182449",
            "extra": "mean: 54.76809050000294 msec\nrounds: 14"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patricia.fricke@techtraverse.io",
            "name": "Patty Fricke",
            "username": "pc-ef"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0d113c06bc451d2032d5cbfc780a61515af411f1",
          "message": "Merge pull request #22 from TechTraverse/add-iam-role\n\nrevert code",
          "timestamp": "2025-03-04T18:32:40-07:00",
          "tree_id": "28c68e04184cba497f57341faccef19498a2235f",
          "url": "https://github.com/TechTraverse/titiler-pgstac/commit/0d113c06bc451d2032d5cbfc780a61515af411f1"
        },
        "date": 1741138705828,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[0/0/0]",
            "value": 4.2667391907648,
            "unit": "iter/sec",
            "range": "stddev: 0.00316140317016233",
            "extra": "mean: 234.37101620002068 msec\nrounds: 5"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[1/1/1]",
            "value": 9.358541668933622,
            "unit": "iter/sec",
            "range": "stddev: 0.003763463333009343",
            "extra": "mean: 106.8542552222185 msec\nrounds: 9"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[2/2/1]",
            "value": 11.769788240560239,
            "unit": "iter/sec",
            "range": "stddev: 0.0035990790740954995",
            "extra": "mean: 84.96329581817524 msec\nrounds: 11"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[3/5/0]",
            "value": 17.708635911204723,
            "unit": "iter/sec",
            "range": "stddev: 0.0046573696863743495",
            "extra": "mean: 56.46962335293558 msec\nrounds: 17"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[4/5/9]",
            "value": 20.708400574464005,
            "unit": "iter/sec",
            "range": "stddev: 0.0036463225735582205",
            "extra": "mean: 48.28958163157818 msec\nrounds: 19"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[5/16/5]",
            "value": 17.92364628741001,
            "unit": "iter/sec",
            "range": "stddev: 0.002797241196387476",
            "extra": "mean: 55.792219058820834 msec\nrounds: 17"
          },
          {
            "name": ".github/workflows/tests/benchmarks.py::test_benchmark_tile[6/43/31]",
            "value": 18.12919492640757,
            "unit": "iter/sec",
            "range": "stddev: 0.0033368846104790072",
            "extra": "mean: 55.159647411776 msec\nrounds: 17"
          }
        ]
      }
    ]
  }
}