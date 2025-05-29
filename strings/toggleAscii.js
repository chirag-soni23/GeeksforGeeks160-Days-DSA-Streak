let s = "abCdEfG";

function toggleCase(s){
    let ans = "";
    for(let i = 0;i<s.length;i++){
        let ascii = s.charCodeAt(i);

        if(ascii < 97){
            ascii += 32;
        }else{
            ascii -= 32;
        }
        ans += String.fromCharCode(ascii);
    }
    return ans;
}
console.log(toggleCase(s));