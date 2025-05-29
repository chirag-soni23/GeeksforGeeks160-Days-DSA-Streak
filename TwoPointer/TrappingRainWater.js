let arr = [4,2,0,3,2,5];

function trappingRainWater(arr){
    let n = arr.length;
    let ans = 0;
    let l = 0, r = n - 1, lmax = 0, rmax = 0;

    while(l<r){
        lmax = Math.max(lmax,arr[l]);
        rmax = Math.max(lmax,arr[r]);

        if(lmax < rmax){
            ans += lmax - arr[l];
            l++;
        }else{
            ans += rmax - arr[r];
            r--;
        }
    }
    return ans;
}
console.log(trappingRainWater(arr));