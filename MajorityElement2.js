let arr = [2,4,1,5,5,5,5,6,6,6,6,];
function majorityElement2(arr){
    let map = new Map();
    let threshold = Math.floor(arr.length / 3);
    let res = [];

    // Step 1: Count occurrences
    for (let num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    // // Step 2: Find numbers that appear more than n/3 times
    for (let [key, value] of map) {
        if (value > threshold) res.push(key);
    }

    return res;

}
let result = majorityElement2(arr);
console.log(result);