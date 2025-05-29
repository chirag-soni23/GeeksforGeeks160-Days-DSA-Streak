let arr = [4, 6, 3, 7];

function countTriangles(arr) {
  let ans = 0;
  arr.sort((a, b) => a - b);

  for (let i = 2; i < arr.length; i++) {
    let left = 0;
    let right = i - 1;
    while (left < right) {
      if (arr[left] + arr[right] > arr[i]) {
        ans += right - left;
        right--;
      }else{
        left++;
      }
    }
  }
  return ans;
}
console.log(countTriangles(arr));