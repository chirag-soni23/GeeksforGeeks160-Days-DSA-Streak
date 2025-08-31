let arr = [1, 3, 2, 3, 4];

function findDuplicate(arr) {
  let n = arr.length;
  let exceptedSum = 0,
    actualSum = 0;
  for (let i = 1; i <= n - 1; i++) {
    exceptedSum += i;
  }
  for (let i = 0; i < n; i++) {
    actualSum += arr[i];
  }
  return actualSum - exceptedSum;
}
console.log(findDuplicate(arr));
