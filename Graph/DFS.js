let adj = [[2, 3, 1], [0], [0, 4], [0], [2]];

function dfs(adj) {
  let V = adj.length;
  let visited = new Array(V).fill(false);
  let result = [];
  solve(adj, 0, result, visited);
  return result;
}

function solve(adj, U, result, visited) {
  if (visited[U] === true) return;
  visited[U] = true;
  result.push(U);

  for (let v of adj[U]) {
    if (!visited[v]) {
      solve(adj, v, result, visited);
    }
  }
}

console.log(dfs(adj));
