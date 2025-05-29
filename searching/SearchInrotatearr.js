let arr = [5, 6, 7, 8, 9, 10, 1, 2, 3];
let key = 3;

function search(arr,key){
    let n = arr.length;

    let pivot_index = findPivot(arr,n);
    let idx = binarySearch(0,pivot_index-1,arr,key);

    if(idx != -1) return idx;
    idx = binarySearch(pivot_index,n-1,arr,key);
    return idx;
}

function findPivot(arr,n){
    let l = 0;
    let r = n - 1;
    while(l<r){
        let mid = Math.floor((l+r)/2);
        if(arr[mid] > arr[r]){
            l = mid + 1;
        }else{
            r = mid;
        }
    }
    return r;

}

function binarySearch(l,r,arr,key){
    let idx = -1;
    while(l<=r){
        let mid = Math.floor((l+r)/2);
        if(arr[mid] == key){
            idx = mid;
            break;
        }else if(arr[mid] < key){
            l = mid + 1;
        }else{
            r = mid - 1;
        }
    }
    return idx;
}

console.log(search(arr,key));