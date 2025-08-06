let s = "ilike",
  dictionary = ["i", "like", "gfg"];

function wordBreak(s, dictionary) {
  let n = s.length;
  let dp = new Array(n + 1).fill(-1);

  for (let i = 1; i <= n; i++) {
    for (let word of dictionary) {
      let len = word.length;
      let start = i - len;
      if (start >= 0 && dp[start] && s.substring(start, i) === word) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[n] ? true : false;
}

console.log(wordBreak(s, dictionary));
