let arr = [10, 15, 20];

function minCostClimbingStairs(arr) {
  let n = arr.length;
  let dp = new Array(n).fill(-1);
  return Math.min(solve(arr, 0, dp), solve(arr, 1, dp));
}

function solve(arr, i, dp) {
  // base case
  if (i >= arr.length) return 0;

  if (dp[i] !== -1) return dp[i];
  // recrusive case
  return (dp[i] =
    arr[i] + Math.min(solve(arr, i + 1, dp), solve(arr, i + 2, dp)));
}

console.log(minCostClimbingStairs(arr));
