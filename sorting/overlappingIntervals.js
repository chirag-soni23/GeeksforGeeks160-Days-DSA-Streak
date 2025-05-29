let arr = [[1,3],[2,4],[6,8],[9,10]];

function overLappingInterval(arr){
    let ans = [];
    arr = arr.sort((a,b) => a[0] - b[0]);
    ans.push(arr[0]);

    for(let i = 1;i<arr.length;i++){
        let lastInterval = ans[ans.length - 1];
        if(lastInterval[1] >= arr[i][0]){
            lastInterval[1] = Math.max(lastInterval[1],arr[i][1]);
        }else{
            ans.push(arr[i]);
        }
    }
    return ans;
}

console.log(overLappingInterval(arr));