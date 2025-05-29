let arr = [-3, -1, -1, 0, 1, 2];
let target = -2;

function countTriplets(arr,target){
    let n = arr.length;
    let count = 0;

    for(let i = 0;i<n-2;i++){
        let j = i+1, k = n - 1;
        while(j<k){
            let sum = arr[i] + arr[j] + arr[k];
            if(sum < target) j++;
            else if(sum > target) k--;
            else {
                // sum == target
                let e1 = arr[j], e2 = arr[k];
                let c1 = 0, c2 = 0;
                while(j<=k && arr[j] == e1){
                    j++;c1++;
                }
                while(j<=k && arr[k] == e2){
                    k--;c2++;
                }
                if(e1 == e2){
                    count += (c1 * (c1 - 1))/2;
                }else{
                    count += c1 * c2;
                }
            }            
        }
    }
    return count;
}

console.log(countTriplets(arr,target));