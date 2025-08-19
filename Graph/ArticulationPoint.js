let V = 5,
  edges = [
    [0, 1],
    [1, 4],
    [4, 3],
    [4, 2],
    [2, 3],
  ];

function Articulation(V, edges) {
  let adj = Array.from({ length: V }, () => []);
  for (let [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }

  let timer = { val: 0 };
  let dis = new Array(V).fill(-1); // discovery time
  let low = new Array(V).fill(-1); // low time
  let visited = new Array(V).fill(false);
  let isArt = new Array(V).fill(false);

  for (let i = 0; i < V; i++) {
    if (!visited[i]) {
      dfs(i, -1, adj, visited, dis, low, isArt, timer);
    }
  }
  let ans = [];
  for (let i = 0; i < V; i++) {
    if (isArt[i]) ans.push(i);
  }
  return ans.length ? ans : [-1];
}

function dfs(u, parent, adj, visited, dis, low, isArt, timer) {
  visited[u] = true;
  dis[u] = low[u] = timer.val++;
  let children = 0;

  for (let v of adj[u]) {
    if (v == parent) continue;

    if (!visited[v]) {
      this.dfs(v, u, adj, visited, dis, low, isArt, timer);
      low[u] = Math.min(low[u], low[v]);

      if (parent !== -1 && low[v] >= dis[u]) {
        isArt[u] = true;
      }
      children++;
    } else {
      low[u] = Math.min(low[u], dis[v]);
    }
  }

  if (parent == -1 && children > 1) isArt[u] = true;
}
