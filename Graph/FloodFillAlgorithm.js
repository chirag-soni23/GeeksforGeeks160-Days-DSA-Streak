let image = [
    [1, 1, 1, 0],
    [0, 1, 1, 1],
    [1, 0, 1, 1],
  ],
  sr = 1,
  sc = 2,
  newColor = 2;

function floodfill(image, sr, sc, newColor) {
  let m = image.length;
  let n = image[0].length;
  let oldColor = image[sr][sc];
  if (oldColor !== newColor) {
    solve(image, sr, sc, newColor, oldColor, m, n);
  }
  return image;
}

function solve(image, i, j, newColor, oldColor, m, n) {
  // base case
  if (i < 0 || j < 0 || i >= m || j >= n || image[i][j] !== oldColor) return;

  image[i][j] = newColor;
  // recrusive case
  solve(image, i - 1, j, newColor, oldColor, m, n); // up
  solve(image, i + 1, j, newColor, oldColor, m, n); // down
  solve(image, i, j - 1, newColor, oldColor, m, n); // left
  solve(image, i - 1, j + 1, newColor, oldColor, m, n); // right
}

console.log(floodfill(image, sr, sc, newColor));
