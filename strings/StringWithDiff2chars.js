let s = "abcCEed";

function stringWithDiff2Chars(s){
    let ans = "";
    for(let i = 0;i<s.length-1;i++){
        ans += s[i];
        let asciiI = s.charCodeAt(i);
        let asciiIp1 = s.charCodeAt(i+1);
        ans += (asciiIp1 - asciiI);
    }
    ans += s[s.length - 1];
    return ans;
}
console.log(stringWithDiff2Chars(s));