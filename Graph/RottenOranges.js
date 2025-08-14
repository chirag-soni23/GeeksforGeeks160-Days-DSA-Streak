let mat = [
  [0, 1, 2],
  [0, 1, 2],
  [2, 1, 1],
];

function rottenOranges(mat) {
  let m = mat.length;
  let n = mat[0].length;
  let directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let Q = [];
  let freshCounts = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 2) {
        Q.push([i, j]);
      } else if (mat[i][j] === 1) {
        freshCounts++;
      }
    }
  }

  if (freshCounts === 0) return 0;

  let minutes = 0;

  while (Q.length > 0) {
    let size = Q.length;
    let changed = false;

    for (let s = 0; s < size; s++) {
      let [i, j] = Q.shift();
      for (let dir of directions) {
        let new_i = i + dir[0];
        let new_j = j + dir[1];
        if (isSafe(new_i, new_j, m, n, mat)) {
          mat[new_i][new_j] = 2;
          Q.push([new_i, new_j]);
          freshCounts--;
          changed = true;
        }
      }
    }

    if (changed) minutes++;
  }

  return freshCounts === 0 ? minutes : -1;
}

function isSafe(i, j, m, n, mat) {
  return i >= 0 && i < m && j >= 0 && j < n && mat[i][j] === 1;
}

console.log(rottenOranges(mat));
