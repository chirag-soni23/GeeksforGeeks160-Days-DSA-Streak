let arr = [10, 2, -2, -20, 10];
let k = -10;

function subArrayWithSumk(arr,k){
    let map = new Map();
    let res = 0;
    let sum = 0;

    for(let val of arr){
        sum += val;
        if(sum == k) res++;
        if(map.has(sum - k)){
            res += map.get(sum-k);
        }
        map.set(sum,(map.get(sum)||0) + 1);
    }
    return res;
}
console.log(subArrayWithSumk(arr,k))