let arr = [0, 1, 0, 3, 12];

function moveZerotoEnd(arr){
    let lastnonZeroIndex = 0;

    for(let i = 0;i<arr.length;i++){
        if(arr[i]!=0){
            arr[lastnonZeroIndex] = arr[i];
            if(i != lastnonZeroIndex){
                arr[i] = 0;
            }
            lastnonZeroIndex++;

        }
    }
    return arr;
}

console.log(moveZerotoEnd(arr));