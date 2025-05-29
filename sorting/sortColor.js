let arr = [0, 1, 2, 0, 1, 2];

function sortColor(arr){
    let l = 0;
    let r = arr.length - 1;
    let i = 0;
    while(i<=r){
        if(arr[i] == 0){
            swap(arr,i++,l++);
        }else if(arr[i] == 2){
            swap(arr,i,r--);
        }else{
            i++;
        }
    }
    return arr;

}

function swap(arr,p1,p2){
    let temp = arr[p1];
    arr[p1] = arr[p2];
    arr[p2] = temp;
}

let result = sortColor(arr);
console.log(result);