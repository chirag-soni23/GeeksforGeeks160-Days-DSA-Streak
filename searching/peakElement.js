let arr = [0,2,1,0];

function peakElement(arr){
    let n = arr.length;
    let l = 0;
    let r = n - 1;

    while(l<r){
        let mid = Math.floor((l+r)/2);
        if(arr[mid] < arr[mid+1]){
            l = mid + 1;
        }else{
            r = mid;
        }
    }
    return arr[l];
}
console.log(peakElement(arr));