let dist = [
  [0, -1, 2],
  [1, 0, 10 ** 8],
  [3, 1, 0],
];

function floydWarshall(dist) {
  let n = dist.length;
  let Inf = 10 ** 8;
  for (let via = 0; via < n; via++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (dist[i][via] !== Inf && dist[via][j] !== Inf) {
          dist[i][j] = Math.min(dist[i][j], dist[i][via] + dist[via][j]);
        }
      }
    }
  }
  return dist;
}

console.log(floydWarshall(dist));
