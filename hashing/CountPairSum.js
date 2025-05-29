let arr = [1, 5, 7, -1, 5];
let sum = 6;

function countPairSum(arr, sum) {
   let map = new Map();
   let count = 0;
   for (let i = 0; i < arr.length; i++) {
      let value = sum - arr[i];
      if (map.has(value)) {
         count += map.get(value);
      }
      map.set(arr[i], (map.get(arr[i]) || 0) + 1);
   }
   return count;
}

console.log(countPairSum(arr, sum)); 
