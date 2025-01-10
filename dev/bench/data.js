window.BENCHMARK_DATA = {
  "lastUpdate": 1736491929317,
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
      }
    ]
  }
}