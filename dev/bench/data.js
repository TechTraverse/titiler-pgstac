window.BENCHMARK_DATA = {
  "lastUpdate": 1740581067422,
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
      }
    ]
  }
}