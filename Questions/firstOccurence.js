let arr = [2,2,2,2,3,3,4,4,4,4,4,5,5,6,7,7,7,7,7];
let target = 4;

function firstOccurence(arr,target){
    let l = 0;
    let r = arr.length - 1;
    let pot = -1;
    while(l<=r){
        let mid = Math.floor((l+r)/2);
        if(arr[mid] == target){
            pot = mid;
            r = mid - 1;
        }else if(arr[mid]<target){
            l = mid + 1;
        }else{
            r = mid - 1;
        }
    }
    return pot;
}
console.log(firstOccurence(arr,target));