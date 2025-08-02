let arr = [6, 5, 5, 7, 4];

function sticklerThief(arr) {
  let n = arr.length;
  let dp = new Array(n).fill(-1);
  return solve(arr, 0, dp);
}

function solve(arr, i, dp) {
  // base case
  if (i >= arr.length) return 0;

  if (dp[i] !== -1) return dp[i];

  // recrusive case
  let steal = arr[i] + solve(arr, i + 2, dp);
  let skip = solve(arr, i + 1, dp);
  return (dp[i] = Math.max(steal, skip));
}

console.log(sticklerThief(arr));
