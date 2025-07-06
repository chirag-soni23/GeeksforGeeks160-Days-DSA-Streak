let s = ")()())";
function maxLength(s){
    let st = [-1];
    let maxi = 0;
    for(let i = 0; i<s.length;i++){
        if(s[i] == "(") st.push(i);
        else{
            st.pop();
            if(st.length) maxi = Math.max(maxi,i-st[st.length - 1]);
            else st.push(i);
        }
    }
    return maxi;
}
console.log(maxLength(s));