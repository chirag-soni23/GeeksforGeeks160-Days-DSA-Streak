let arr = [2,3,4,7,11];
let k = 5;

function kthMissingPositive(arr,k){
    let l = 0;
    let r = arr.length - 1;
    while(l<=r){
        let mid = Math.floor((l+r)/2);
        let missingNumber = arr[mid] - (mid + 1);

        if(missingNumber < k){
            l = mid + 1;
        }else{
            r = mid - 1;
        }
    }
    return l + k;
}
console.log(kthMissingPositive(arr,k));