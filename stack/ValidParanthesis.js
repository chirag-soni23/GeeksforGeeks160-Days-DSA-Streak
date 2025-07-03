let s = "[{()}]";

function isValid(s){
    let st = [];
    for(let i = 0; i<s.length;i++){
        if(s[i] == "(" || s[i] == "{" || s[i] == "["){
            st.push(s[i]);
        }else{
            if(st.length === 0) return false;
            let last = st[st.length - 1];
            if(last == "(" && s[i] == ")" || last == "{" && s[i] == "}" || last == "[" && s[i] == "]" ){
                st.pop();
            }else{
                return true;
            }
        }
    }
    return st.length === 0;
}
console.log(isValid(s));