let arr = [1,5,4,3];

function containerWithMostWater(arr){
    let n = arr.length;
    let l = 0;
    let r = n - 1;
    let ans = 0;

    while(l<r){
        let width = r - l;
        let height = Math.min(arr[l], arr[r]);
        let area = width * height;
        ans = Math.max(ans,area);
        if(arr[l] < arr[r]) l++;
        else r--;
    }
    return ans;
}
console.log(containerWithMostWater(arr));