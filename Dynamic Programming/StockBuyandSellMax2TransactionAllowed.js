let prices = [10, 22, 5, 75, 65, 80];

function maxProfit(prices) {
  let n = prices.length;
  let dp = Array.from({ length: n }, () => Array(5).fill(-1));
  return solve(0, 0, n, dp);
}

function solve(i, j, n, dp) {
  // base case
  if (i === n || j === 4) return 0;

  if (dp[i][j] !== -1) return dp[i][j];

  let skip = solve(i + 1, j, n, dp);
  let take;
  if (j % 2 === 0) {
    take = -prices[i] + solve(i + 1, j + 1, n, dp);
  } else {
    take = prices[i] + solve(i + 1, j + 1, n, dp);
  }
  return (dp[i][j] = Math.max(take, skip));
}

console.log(maxProfit(prices));
