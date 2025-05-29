function majorityElement2(arr){
    let map = new Map();
    let res = [];
    let threshold = Math.floor(arr.length / 3);
    for(let num of arr){
        map.set(num,(map.get(num) || 0) + 1);
    }

    for(let [key,value] of map){
        if(value > threshold) res.push(key);
    }
    return res;

}
let arr = [2,4,1,5,5,5,5,6,6,6,6,];
let result = majorityElement2(arr);
console.log(result);