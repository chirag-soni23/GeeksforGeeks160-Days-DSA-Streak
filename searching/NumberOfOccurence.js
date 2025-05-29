let arr = [1,2,2,2,3,3,3,4,4,4,4];
let target = 2;

function numberOfOccurences(arr, target) {
    let first = firstOccurence(arr, target);
    if(first == -1) return 0;
    let last = lastOccurence(arr, target);
    return last - first + 1;
}

function firstOccurence(arr, target) {
    let l = 0, r = arr.length - 1, pot = -1;
    while(l <= r){
        let mid = Math.floor((l + r) / 2);
        if(arr[mid] == target){
            pot = mid;
            r = mid - 1;
        }else if(arr[mid] < target){
            l = mid + 1;
        }else{
            r = mid - 1;
        }
    }
    return pot;
}

function lastOccurence(arr, target) {
    let l = 0, r = arr.length - 1, pot = -1;
    while(l <= r){
        let mid = Math.floor((l + r) / 2);
        if(arr[mid] == target){
            pot = mid;
            l = mid + 1;
        }else if(arr[mid] < target){
            l = mid + 1;
        }else{
            r = mid - 1;
        }
    }
    return pot;
}

console.log(numberOfOccurences(arr, target)); // Output: 3
