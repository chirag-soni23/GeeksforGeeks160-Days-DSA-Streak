let arr = [1,2,3,6,5,4];

function nextPermutation(arr){
    let pivot = -1;
    let n = arr.length;

    for(let i = n-2;i>=0;i--){
        if(arr[i]<arr[i+1]){
            pivot = i;
            break;
        }
    }

    if(pivot == -1){
        arr.reverse();
        return;
    }

    for(let i = n-1;i>=pivot;i--){
        if(arr[i]>arr[pivot]){
            [arr[i],arr[pivot]] = [arr[pivot],arr[i]];
            break;
        }
    }

    let left = pivot + 1;
    let right = n - 1;
    while(left < right){
        [arr[left],arr[right]] = [arr[right],arr[left]];
        left++;
        right--;
    }
    return arr;
}

console.log(nextPermutation(arr));