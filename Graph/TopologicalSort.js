let V = 6,
  E = 6,
  edges = [
    [1, 3],
    [2, 3],
    [4, 1],
    [4, 0],
    [5, 0],
    [5, 2],
  ];

function topoSort(V, edges) {
  let adj = Array.from({ length: V }, () => []);
  for (let [u, v] of edges) {
    adj[u].push(v);
  }
  let visited = new Array(V).fill(false);
  let result = [];
  let st = [];

  for (let i = 0; i < V; i++) {
    if (!visited[i]) {
      DFS(adj, i, visited, st);
    }
  }
  while (st.length) result.push(st.pop());
  return result;
}

function DFS(adj, u, visited, st) {
  visited[u] = true;
  for (let v of adj[u]) {
    if (!visited[v]) {
      DFS(adj, v, visited, st);
    }
  }
  st.push(u);
}

console.log(topoSort(V, edges));
