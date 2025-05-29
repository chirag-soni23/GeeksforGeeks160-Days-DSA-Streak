let arr = [-1, 1, 5, 5, 7];
let target = 6;

function countPairs(arr, target) {
  let ans = 0;
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    if (arr[l] + arr[r] < target) {
      l++;
    } else if (arr[l] + arr[r] > target) {
      r--;
    } else {
      // arr[l] + arr[r] === target
      const el1 = arr[l],
        el2 = arr[r];
      let c1 = 0,
        c2 = 0;
      while (l <= r && arr[l] == el1) {
        l++;
        c1++;
      }
      while (l <= r && arr[r] == el2) {
        r--;
        c2++;
      }
      if (el1 == el2) {
        ans += (c1 * (c1 - 1)) / 2;
      } else {
        ans += c1 * c2;
      }
    }
  }
  return ans;
}

console.log(countPairs(arr, target));
