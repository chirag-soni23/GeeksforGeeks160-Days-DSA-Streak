let arr = [1, 2, 1, 5, 5];

function findUnique(arr) {
  let uniqueNumber = 0;
  for (let i = 0; i < arr.length; i++) {
    uniqueNumber ^= arr[i];
  }
  return uniqueNumber;
}
console.log(findUnique(arr));
