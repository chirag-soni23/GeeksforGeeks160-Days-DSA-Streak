let arr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9];

function minimumJumps(arr) {
  let n = arr.length;
  let max = 0,
    choice = 0,
    jumps = 0;
  for (let i = 0; i < n - 1; i++) {
    max = Math.max(max, arr[i] + 1);
    if (i === choice) {
      choice = max;
      jumps++;
    }
  }
  return jumps;
}

console.log(minimumJumps(arr));
