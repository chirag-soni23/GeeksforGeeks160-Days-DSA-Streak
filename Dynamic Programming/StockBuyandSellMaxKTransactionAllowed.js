let prices = [10, 22, 5, 80],
  k = 2;

function maxProfit(prices, k) {
  let n = prices.length;
  if (n === 0 || k === 0) return 0;

  let curr = Array.from({ length: k + 1 }, () => Array(2).fill(0));
  let next = Array.from({ length: k + 1 }, () => Array(2).fill(0));

  for (let i = n - 1; i >= 0; i--) {
    for (let j = 1; j <= k; j++) {
      // buy
      curr[j][1] = Math.max(-prices[i] + next[j][0], next[j][1]);
      // sell
      curr[j][0] = Math.max(prices[i] + next[j - 1][1], next[j][0]);
    }
    [next, curr] = [curr, next];
  }
  return next[k][1];
}
console.log(maxProfit(prices, k));
