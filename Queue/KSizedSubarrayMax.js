let arr = [1, 2, 3, 1, 4, 5, 2, 3, 6];
let k = 3;

function maxOfSubarray(arr, k) {
  let ans = [];
  let dq = [];

  for (let i = 0; i < arr.length; i++) {
    while (dq.length && dq[0] <= i - k) dq.shift();
    while (dq.length && arr[dq[dq.length - 1]] <= arr[i]) dq.pop();
    dq.push(i);

    if (i >= k - i) ans.push(arr[dq[0]]);
  }
  return ans;
}

console.log(maxOfSubarray(arr, k));
