let V = 5,
  edges = [
    [1, 3, 2],
    [4, 3, -1],
    [2, 4, 1],
    [1, 2, 1],
    [0, 1, 5],
  ],
  src = 0;

function bellmanFord(V, edges, src) {
  let Inf = 1e8;
  let dist = new Array(V).fill(Inf);
  dist[src] = 0;

  for (let count = 1; count <= V - 1; count++) {
    for (let edge of edges) {
      let [u, v, w] = edge;
      if (dist[u] !== Inf && dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
      }
    }
  }

  // deteced negative cycle
  for (let edge of edges) {
    let [u, v, w] = edge;
    if (dist[u] !== Inf && dist[u] + w < dist[v]) {
      return [-1];
    }
  }
  return dist;
}

console.log(bellmanFord(V, edges, src));
