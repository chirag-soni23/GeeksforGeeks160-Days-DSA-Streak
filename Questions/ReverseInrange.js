let arr = [1,2,3,4,5,6,7,8,9,10];
let start = 4;
let end = arr.length - 1;

function reverse(arr){
    let l = 0;
    let r = arr.length - 1;
    while(l<r){
        // swap the value
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--; 
    }
    return -1;
}

function reverseInRange(arr,l,r){
    while(l<r){
        // swap the value
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--; 
    }
    return -1;
}
reverseInRange(arr,start,end);
console.log(arr);