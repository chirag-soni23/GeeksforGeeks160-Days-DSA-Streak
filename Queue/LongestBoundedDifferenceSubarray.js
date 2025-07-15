let arr = [8, 4, 2, 6, 7],
  x = 4;

function longestSubarray(arr, x) {
  let s = 0;
  let e = 0;
  let n = arr.length;
  let minDq = [];
  let maxDq = [];
  let ans = [];
  let ansStart = 0,
    ansEnd = 0;

  while (e < n) {
    while (minDq.length && arr[minDq[minDq.length - 1]] > arr[e]) minDq.pop();
    while (maxDq.length && arr[maxDq[maxDq.length - 1]] < arr[e]) maxDq.pop();
    minDq.push(e);
    maxDq.push(e);

    while (arr[maxDq[0]] - arr[minDq[0]] > x) {
      if (s === maxDq[0]) maxDq.shift();
      if (s === minDq[0]) minDq.shift();
      s++;
    }
    if (e - s > ansEnd - ansStart) {
      ansEnd = e;
      ansStart = s;
    }
    e++;
  }
  for (let i = ansStart; i <= ansEnd; i++) {
    ans.push(arr[i]);
  }
  return ans;
}
console.log(longestSubarray(arr, x));
