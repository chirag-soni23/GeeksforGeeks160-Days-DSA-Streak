let n = 4,
  m = 4,
  edges = [
    [1, 2],
    [2, 3],
    [3, 4],
    [2, 4],
  ];

function hamiltonianPath(m, n, edges) {
  let adj = Array.from({ length: n + 1 }, () => []);
  for (let [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }
  let visited = new Array(n + 1).fill(false);
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (DFS(i, adj, visited, count, n)) return 1;
  }
  return 0;
}

function DFS(node, adj, visited, count, n) {
  visited[node] = true;
  count++;

  if (count === n) return 1;

  for (let v of adj[node]) {
    if (!visited[v] && DFS(v, adj, visited, count, n)) return 1;
  }
  visited[node] = false;
  count--;
  return 0;
}

console.log(hamiltonianPath(m, n, edges));
