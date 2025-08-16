let grid = [
  ["L", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "L"],
  ["L", "W", "W", "L", "L"],
  ["W", "W", "W", "W", "W"],
  ["L", "W", "L", "L", "W"],
];

function numbersOfIslands(grid) {
  if (!grid || grid.length === 0) return 0;
  let m = grid.length;
  let n = grid[0].length;
  let islands = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "L") {
        dfs(grid, i, j, m, n);
        islands++;
      }
    }
  }

  return islands;
}

function dfs(grid, i, j, m, n) {
  // base case
  if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] !== "L") return;

  // mark visited
  grid[i][j] = "$";

  // 8 directions
  dfs(grid, i - 1, j, m, n); // up
  dfs(grid, i + 1, j, m, n); // down
  dfs(grid, i, j - 1, m, n); // left
  dfs(grid, i, j + 1, m, n); // right
  dfs(grid, i - 1, j - 1, m, n); // up-left
  dfs(grid, i - 1, j + 1, m, n); // up-right
  dfs(grid, i + 1, j - 1, m, n); // down-left
  dfs(grid, i + 1, j + 1, m, n); // down-right
}

console.log(numbersOfIslands(grid));
