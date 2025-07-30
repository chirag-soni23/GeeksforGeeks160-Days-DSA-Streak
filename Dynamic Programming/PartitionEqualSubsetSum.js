let arr = [1, 5, 11, 5];

function equalPartition(arr) {
  let n = arr.length;
  let sum = arr.reduce((a, b) => a + b, 0);
  if (sum % 2 !== 0) return false;
  let x = Math.floor(sum / 2);
  let dp = Array.from({ length: n }, () => Array(x + 1).fill(-1));
  return solve(arr, x, 0, n, dp);
}

function solve(arr, x, i, n, dp) {
  if (x === 0) return true;
  if (i >= n) return false;

  if (dp[i][x] !== -1) return dp[i][x];

  let take = false;
  if (x >= arr[i]) {
    take = solve(arr, x - arr[i], i + 1, n, dp);
  }
  let not_take = solve(arr, x, i + 1, n, dp);
  dp[i][x] = take || not_take;
  return dp[i][x];
}

console.log(equalPartition(arr));
