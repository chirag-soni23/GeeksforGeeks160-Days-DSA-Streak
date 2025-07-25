let W = 4,
  val = [1, 2, 3],
  wt = [4, 5, 1];

function knapSack(val, wt, W) {
  let dp = Array.from({ length: wt.length + 1 }, () =>
    new Array(W + 1).fill(-1)
  );
  return solve(val, wt, W, 0, dp);
}

function solve(val, wt, W, i, dp) {
  // base case
  if (i === wt.length) return 0;

  if (dp[i][W] !== -1) return dp[i][W];
  // pick
  let pick = 0;
  if (W >= wt[i]) {
    pick = val[i] + solve(val, wt, W - wt[i], i + 1, dp);
  }
  let noPick = solve(val, wt, W, i + 1, dp);
  return (dp[i][W] = Math.max(pick, noPick));
}
console.log(knapSack(val, wt, W, 0));
