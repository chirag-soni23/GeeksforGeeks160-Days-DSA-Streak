let arr = [1, 2, 3, 5];

function missingNum(arr) {
  arr = arr.sort((a, b) => a - b);
  let num = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num && num >= 1) num++;
  }
  return num;
}
console.log(missingNum(arr));
