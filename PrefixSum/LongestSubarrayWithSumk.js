let arr = [10,5,2,7,1,-10];
let k = 15;

function longestSubarrayWithSumK(arr,k){
    let prefixSum = 0;
    let res = 0;
    let map = new Map();
    let n = arr.length;

    for(let i = 0;i<n;i++){
        prefixSum += arr[i];

        // find length
        if(prefixSum == k) res = i + 1;
        else if(map.has(prefixSum - k)){
            res = Math.max(res,i-map.get(prefixSum-k));
        }
        if(!map.has(prefixSum)) map.set(prefixSum,i);

    }
    return res;
}
console.log(longestSubarrayWithSumK(arr,k));