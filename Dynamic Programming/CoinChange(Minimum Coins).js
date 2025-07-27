let coins = [25, 10, 5],
  sum = 30;

function minCoins(coins, sum) {
  let dp = new Array(sum + 1).fill(Infinity);
  dp[0] = 0;

  for (let coin of coins) {
    for (let i = coin; i <= sum; i++) {
      if (dp[i - coin] !== Infinity) {
        dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
      }
    }
  }
  return dp[sum] === Infinity ? -1 : dp[sum];
}

console.log(minCoins(coins, sum));
