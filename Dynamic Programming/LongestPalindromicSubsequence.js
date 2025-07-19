let s = "bbabcbcab";

function LPS(s) {
  let n = s.length;
  let dp = Array.from({ length: n }, () => Array(n).fill(-1));
  return solve(s, 0, n - 1, dp);
}

function solve(s, i, j, dp) {
  // base case
  if (i > j) return 0;
  if (i == j) return 1;

  if (dp[i][j] !== -1) return dp[i][j];
  if (s[i] === s[j]) dp[i][j] = 2 + solve(s, i + 1, j - 1, dp);
  else {
    return (dp[i][j] = Math.max(
      solve(s, i, j - 1, dp),
      solve(s, i + 1, j, dp)
    ));
  }
  return dp[i][j];
}

console.log(LPS(s));
