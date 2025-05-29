let arr = [1, 2, 4, 8, 9];
let k = 3;

function aggresiveCows(arr,k){
    arr = arr.sort((a,b) => a - b);
    let n = arr.length;

    let minVal = arr[0];
    let maxVal = arr[n-1];

    let l = 1;
    let r = maxVal - minVal;
    let ans = 0;

    while(l<=r){
        let mid = Math.floor((l+r)/2);
        if(isPossible(arr,k,mid)){
            ans = mid;
            l = mid + 1;
        }else{
            r = mid - 1;
        }
    }   
    return ans;
}

function isPossible(arr,k,mid){
    let cows = 1;
    let lastPos = arr[0];
    for(let i = 1;i<arr.length;i++){
        if(arr[i] - lastPos >= mid){
            cows++;
            
            lastPos = arr[i];
        }if(cows === k) return true;
    }
    return false;
}
console.log(aggresiveCows(arr,k));