let s1 = "geek",
  s2 = "gesek";

function editDistance(s1, s2) {
  let dp = Array.from({ length: s1.length + 1 }, () =>
    new Array(s2.length + 1).fill(-1)
  );
  return solve(s1, s2, 0, 0, dp);
}

function solve(s1, s2, i, j, dp) {
  // base case
  if (i === s1.length) return s2.length - j;
  if (j === s2.length) return s1.length - i;

  if (dp[i][j] !== -1) return dp[i][j];
  // recrusive case
  if (s1[i] === s2[j]) return solve(s1, s2, i + 1, j + 1, dp);
  else {
    let insrt = 1 + solve(s1, s2, i, j + 1, dp);
    let del = 1 + solve(s1, s2, i + 1, j, dp);
    let replace = 1 + solve(s1, s2, i + 1, j + 1, dp);
    return (dp[i][j] = Math.min(insrt, del, replace));
  }
}

console.log(editDistance(s1, s2));
