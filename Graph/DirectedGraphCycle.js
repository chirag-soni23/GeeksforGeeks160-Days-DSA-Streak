let V = 4,
  edges = [
    [0, 1],
    [0, 2],
    [1, 2],
    [2, 0],
    [2, 3],
  ];

function isCycle(V, edges) {
  let visited = new Array(V).fill(false);
  let recrusion = new Array(V).fill(false);
  let adj = Array.from({ length: V }, () => []);
  for (let [u, v] of edges) {
    adj[u].push(v);
  }

  for (let i = 0; i < V; i++) {
    if (!visited[i] && DFS(adj, i, visited, recrusion)) {
      return true;
    }
  }
  return false;
}

function DFS(adj, u, visited, recrusion) {
  visited[u] = true;
  recrusion[u] = true;

  for (let v of adj[u]) {
    if (visited[v] === false && DFS(adj, v, visited, recrusion))
      return true;
    else if (recrusion[v] === true) return true;
  }
  recrusion[u] = false;
  return false;
}

console.log(isCycle(V, edges));
