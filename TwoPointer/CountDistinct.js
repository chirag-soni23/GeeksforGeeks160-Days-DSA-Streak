let arr = [1, 2, 1, 3, 4, 2, 3];
let k = 4;

function countDistinct(arr, k) {
  let freq = new Map();
  let ans = [];
  let n = arr.length;

  for (let i = 0; i < k; i++) {
    freq.set(arr[i], (freq.get(arr[i]) || 0) + 1);
  }
  ans.push(freq.size);

  for (let i = k; i < n; i++) {
    freq.set(arr[i], (freq.get(arr[i]) || 0) + 1);
    freq.set(arr[i - k], freq.get(arr[i - k]) - 1);

    if (freq.get(arr[i - k]) == 0) {
      freq.delete(arr[i - k]);
    }
    ans.push(freq.size);
  }
  return ans;
}
console.log(countDistinct(arr, k));
