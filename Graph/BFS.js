let adj = [[2, 3, 1], [0], [0, 4], [0], [2]];

function bfs(adj) {
  let V = adj.length;
  let visited = new Array(V).fill(false);
  let result = [];
  return solve(adj, 0, visited, result);
}

function solve(adj, u, visited, result) {
  let queue = [];
  queue.push(u);
  visited[u] = true;

  while (queue.length !== 0) {
    let node = queue.shift();
    result.push(node);
    for (let val of adj[node]) {
      if (!visited[val]) {
        visited[val] = true;
        queue.push(val);
      }
    }
  }
  return result;
}

console.log(bfs(adj));
