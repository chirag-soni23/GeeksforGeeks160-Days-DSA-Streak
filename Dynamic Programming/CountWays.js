let n = 4;

function countWays(n) {
  let dp = new Array(n + 1).fill(-1);
  return solve(n, dp);
}

function solve(n, dp) {
  // base case
  if (n === 0 || n === 1) return 1;

  if (dp[n] !== -1) return dp[n];
  // recrusive case
  dp[n] = solve(n - 1, dp) + solve(n - 2, dp);
  return dp[n];
}
console.log(countWays(n));
