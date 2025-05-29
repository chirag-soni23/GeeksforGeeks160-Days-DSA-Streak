let arr = ["flower", "flow", "flight"];

function longestCommonPrefix(arr){
    let ans = "";
    for(let i = 0;i<arr[0].length;i++){
        for(let j = 1;j<arr.length;j++){
            if(i>=arr[j].length || arr[0][i] != arr[j][i]){
                return ans;
            }
        }
        ans += arr[0][i];
    }
    return ans;
}
console.log(longestCommonPrefix(arr));