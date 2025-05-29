let s = "geeksforgeeks";

function longestSubString(s){
    let n = s.length;
    let l = 0;
    let ans = 0;
    let arr = new Array(26).fill(-1);

    for(let r = 0;r<n;r++){
        l = Math.max(l, arr[s.charCodeAt(r) - 'a'.charCodeAt(0)] + 1);
        ans = Math.max(ans, r - l + 1);
        arr[s.charCodeAt(r) - 'a'.charCodeAt(0)] = r;
    }
    return ans;
}
console.log(longestSubString(s));