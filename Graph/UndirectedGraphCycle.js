let edges = [
    [0, 1],
    [0, 2],
    [1, 2],
    [2, 3],
  ],
  V = 4;

function isCycle(edges, V) {
  let adj = Array.from({ length: V }, () => []);
  for (let [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }

  let visited = new Array(V).fill(false);
  for (let i = 0; i < V; i++) {
    if (!visited[i] && isCycleDFS(adj, i, visited, -1)) {
      return true;
    }
  }
  return false;
}

function isCycleDFS(adj, u, visited, parent) {
  visited[u] = true;
  for (let v of adj[u]) {
    if (v === parent) continue;
    if (visited[v]) return true;
    if (isCycleDFS(adj, v, visited, u)) return true;
  }
  return false;
}

console.log(isCycle(edges, V));
