let s = "Geeks";

function LPS(s) {
  let n = s.length;
  let maxLen = 0;
  let sp = 0;
  let dp = Array.from({ length: n }, () => new Array(n).fill(-1));

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (solve(s, i, j, dp)) {
        if (j - i + 1 > maxLen) {
          maxLen = j - i + 1;
          sp = i;
        }
      }
    }
  }
  return s.substring(sp, sp + maxLen);
}

function solve(s, i, j, dp) {
  if (i >= j) return true;
  if (dp[i][j] !== -1) return dp[i][j];
  if (s[i] == s[j]) {
    return (dp[i][j] = solve(s, i + 1, j - 1));
  } else {
    return (dp[i][j] = false);
  }
}

console.log(LPS(s));
