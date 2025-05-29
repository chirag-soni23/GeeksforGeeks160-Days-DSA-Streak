let arr = [5, 6, 1, 2, 3, 4];

function findMin(arr){
    let n = arr.length;
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
    return arr[r];
}
console.log(findMin(arr))