let s = "T|T&F^T";

function countWays(s) {
  let n = s.length;
  let dp = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => Array(2).fill(-1))
  );
  return solve(s, 0, n - 1, 1, dp);
}

function solve(s, i, j, isTrue, dp) {
  // base case
  if (i > j) return 0;
  if (i === j) {
    if (isTrue === 1) return s[i] == "T" ? 1 : 0;
    else return s[i] === "F" ? 1 : 0;
  }

  if (dp[i][j][isTrue] !== -1) return dp[i][j][isTrue];

  let ans = 0;
  for (let k = i + 1; k <= j - 1; k += 2) {
    let op = s[k];
    let LT = solve(s, i, k - 1, 1, dp);
    let LF = solve(s, i, k - 1, 0, dp);
    let RT = solve(s, k + 1, j, 1, dp);
    let RF = solve(s, k + 1, j, 0, dp);

    if (op === "&") {
      if (isTrue === 1) ans += LT * RT;
      else ans += LT * RF + LF * RT + LF * RF;
    } else if (op == "|") {
      if (isTrue === 1) ans += LT * RT + LT * RF + LF * RT;
      else ans += LF * RF;
    } else if (op === "^") {
      if (isTrue === 1) ans += LT * RF + LF * RT;
      else ans += LT * RT + LF * RF;
    }
  }
  return (dp[i][j][isTrue] = ans);
}

console.log(countWays(s));