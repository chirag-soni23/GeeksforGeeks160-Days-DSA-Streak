let arr =  [0, -1, 2, -3, 1];

function findTriplets(arr){
    let ans = [];
    let map = new Map();
    for(let j = 0;j<arr.length;j++){
        for(let k = j+1;k<arr.length;k++){
            let val = -(arr[j] + arr[k]);
            if(map.has(val)){
                for(let i of map.get(val)){
                    ans.push([i,j,k]);
                }
            }
        }
        if(!map.has(arr[j])){
            map.set(arr[j],[j]);
        }
        // map.get(arr[j]).push(j)
    }
    return ans;
}
console.log(findTriplets(arr))