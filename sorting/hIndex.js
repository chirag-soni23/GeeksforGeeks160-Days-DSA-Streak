let arr = [3, 0, 5, 3, 0];

function hIndex(arr){
    let left = 0;
    let n = arr.length;
    let right = n - 1;
    let hIndex = 0;
    while(left<=right){
        let mid = Math.floor((left + right)/2);
        let count = n - mid;

        if(arr[mid] >= count){
            hIndex = count;
            right = mid - 1;
        }else{
            left = mid + 1
        }

    }
    return hIndex;
}
console.log(hIndex(arr));