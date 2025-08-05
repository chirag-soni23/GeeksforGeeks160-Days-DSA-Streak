let arr = [2, 1, 3, 4];

function MCM(arr) {
  let n = arr.length;
  let dp = Array.from({ length: n }, () => Array(n).fill(-1));
  return solve(arr, 1, n - 1, dp);
}

function solve(arr, i, j, dp) {
  // base case
  if (i === j) return 0;

  if (dp[i][j] !== -1) return dp[i][j];

  // recrusive case
  let res = Infinity;
  for (let k = i; k < j; k++) {
    let cost =
      solve(arr, i, k, dp) +
      solve(arr, k + 1, j, dp) +
      arr[i - 1] * arr[k] * arr[j];
    res = Math.min(res, cost);
  }
  return res;
}
console.log(MCM(arr));
