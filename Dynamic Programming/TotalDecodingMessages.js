let digits = "123";

function countWays(digits) {
  let n = digits.length;
  let dp = new Array(n + 1).fill(-1);
  return solve(digits, 0, n, dp);
}

function solve(s, i, n, dp) {
  // base case
  if (i === n) return 1;
  if (s[i] === "0") return 0;

  if (dp[i] !== -1) return dp[i];

  // recursive case
  let result = solve(s, i + 1, n, dp);
  if (i + 1 < n) {
    if (s[i] === "1" || (s[i] === "2" && s[i + 1] >= "0" && s[i] <= "6")) {
      result += solve(s, i + 2, n, dp);
    }
  }
  return (dp[i] = result);
}

console.log(countWays(digits));
