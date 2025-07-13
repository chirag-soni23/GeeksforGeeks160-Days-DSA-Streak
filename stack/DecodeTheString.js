let  s = "3[b2[ca]]";

function decodeTheString(s){
    let ans = "";
    for(let i = 0; i<s.length;i++){
        if(s[i] !== "]") ans += s[i];
        else{
            let temp = ""
            while(ans.length > 0 && ans[ans.length - 1] !== "["){
                temp = ans[ans.length - 1] + temp;
                ans = ans.slice(0,-1);
            }

            // removing opening braces
            ans = ans.slice(0,-1);
            
            let num = "";
            while(ans.length > 0 && !isNaN(ans[ans.length - 1])){
                num = ans[ans.length - 1] + temp;
                ans = ans.slice(0,-1);
            }

            let repeated = parseInt(num);
            ans += temp.repeat(repeated);
        }
    }
    return ans;
}
console.log(decodeTheString(s));