let arr = [10, 3, 5, 6, 2];

function ProductExceptSelf(arr){
    let n = arr.length;
    let ans = new Array(n).fill(1);
    let preffix = 1, suffix = 1;

    for(let i = 1;i<n;i++){
        ans[i] = ans[i-1] * arr[i-1];
    }

    for(let i = n-2;i>=0;i--){
        suffix *= arr[i+1];
        ans[i] *= suffix;
    }
    return ans;
}

console.log(ProductExceptSelf(arr));