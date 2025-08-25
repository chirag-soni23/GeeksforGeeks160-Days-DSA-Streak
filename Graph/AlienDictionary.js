let words = ["baa", "abcd", "abca", "cab", "cad"];

function alienDictionary(words) {
  let n = words.length;

  // 1. create adjacency list
  let adj = Array.from({ length: 26 }, () => []);

  // build graph
  for (let i = 0; i < n - 1; i++) {
    let str1 = words[i],
      str2 = words[i + 1];
    let j = 0,
      k = 0;

    if (str1.length > str2.length && str1.startsWith(str2)) return "";

    while (j < str1.length && k < str2.length) {
      if (str1[j] !== str2[k]) {
        adj[str1.charCodeAt(j) - 97].push(str2.charCodeAt(k) - 97);
        break;
      }
      j++;
      k++;
    }
  }

  // 2.  indegree calculate
  let indegree = Array(26).fill(0);
  for (let u = 0; u < 26; u++) {
    for (let v of adj[u]) {
      indegree[v]++;
    }
  }

  // 3. Kahn's Algorithm
  let q = [];
  let used = new Set(words.join(""));
  for (let ch of used) {
    let i = ch.charCodeAt(0) - 97;
    if (indegree[i] === 0) q.push(i);
  }

  let ans = "";
  while (q.length) {
    let u = q.shift();
    ans += String.fromCharCode(u + 97);
    for (let v of adj[u]) {
      indegree[v]--;
      if (indegree[v] === 0) q.push(v);
    }
  }
  if (ans.length < used.size) return "";
  return ans;
}

console.log(alienDictionary(words));
