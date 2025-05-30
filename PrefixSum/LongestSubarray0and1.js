let arr = [1, 0, 1, 1, 1, 0, 0];

function maxLen(arr){
    let map = new Map();
    let prefixSum = 0;
    let res = 0;

    for(let i = 0;i<arr.length;i++){
        prefixSum += arr[i] == 0 ? -1 : 1;
        if(prefixSum == 0) res = i + 1;
        if(map.has(prefixSum)){
            res = Math.max(res,i-map.get(prefixSum));
        }else{
            map.set(prefixSum,i);
        }
    }
    return res;
}
console.log(maxLen(arr));