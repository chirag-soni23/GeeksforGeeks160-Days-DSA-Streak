let arr = [1, 2, 3, 2, 1, 4];

function singleNum(arr) {
  let freq = new Map();
  let result = [];

  for (let num of arr) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  for (let i = 0; i < arr.length; i++) {
    if (freq.get(arr[i]) === 1) {
      result.push(arr[i]);
    }
  }
  return result.sort((a, b) => a - b);
}

console.log(singleNum(arr));
