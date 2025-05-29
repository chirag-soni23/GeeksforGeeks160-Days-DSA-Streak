let arr =  [10, 30, 20, 5];
let target = 25;

function sumClosest(arr,target){
    arr.sort((a,b) => a-b);
    let n = arr.length;
    let l = 0, r = n -1;
    let minDiff = Infinity;
    let res = [];
    while(l<r){
        let sum = arr[l] + arr[r];
        if(Math.abs(target - sum) < minDiff){
            minDiff =   Math.abs(target - sum);
            res = [arr[l],arr[r]];
        }if(sum < target){
            l++;
        }else if(sum > target){
            r--;
        }else{
            return res;
        }
    }
    return res;
}

console.log(sumClosest(arr,target));