let arr = [7, 2, 5, 3];
let target = 8;

function countPairs(arr,target){
    arr.sort((a,b) => a-b);
    let n = arr.length;
    let l = 0;
    let r = n - 1;
    let count = 0; 

    while(l<r){
        let sum = arr[l] + arr[r];
        if(sum < target){
            count += r - l;
            l++;
        }else{
            r--;
        }
    }
    return count;
}
console.log(countPairs(arr,target));