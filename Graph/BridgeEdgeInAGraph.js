let V = 4,
  edges = [
    [0, 1],
    [1, 2],
    [2, 3],
  ],
  c = 1,
  d = 2;

function isBridge(V, edges, c, d) {
  let visited = new Array(V).fill(false);
  let adj = Array.from({ length: V }, () => []);
  for (let [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }
  dfs(c, adj, visited, c, d);
  return !visited[d];
}

function dfs(u, adj, visited, c, d) {
  visited[u] = true;
  for (let v of adj[u]) {
    if (!visited[v] && !((u == c && v == d) || (u === d && v == c))) {
      dfs(v, adj, visited, c, d);
    }
  }
}

console.log(isBridge(V, edges, c, d));
