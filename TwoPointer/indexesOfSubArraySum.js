let arr = [1, 2, 3, 7, 5];
let target = 12;

function indexesSum(arr, target) {
  let start = 0;
  let sum = 0;
  let end = 0;

  while (end <= arr.length) {
    if (sum < target) {
      sum += arr[end];
      end++;

      
    } else if (sum > target) {
      sum -= arr[start];
      start++;
    } else {
      // sum == target
      return [start + 1, end];
    }
}
return [-1];
}
console.log(indexesSum(arr,target));
