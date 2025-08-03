let arr = [1, 2, 3, 1];

function sticklerThief2(arr) {
  let n = arr.length;

  let dp1 = new Array(n).fill(-1);
  let dp2 = new Array(n).fill(-1);

  let case1 = solve(arr, 0, n - 1, dp1);
  let case2 = solve(arr, 1, n, dp2);

  return Math.max(case1, case2);
}

function solve(arr, i, n, dp) {
  // base case
  if (i >= n) return 0;

  if (dp[i] !== -1) return dp[i];

  // recrusive case
  let pick = arr[i] + solve(arr, i + 2, n, dp);
  let noPick = solve(arr, i + 1, n, dp);
  return Math.max(pick, noPick);
}

console.log(sticklerThief2(arr));