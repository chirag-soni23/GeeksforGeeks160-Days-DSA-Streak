let arr = ["2", "3", "1", "*", "+", "9", "-"];

function evaluate(arr){
    let st = [];
    for(let i = 0; i<arr.length;i++){
        let token = arr[i];
        if(token == "+" || token == "*" || token == "-" || token == "/"){
            let b = st.pop();
            let a = st.pop();
            let result;
            if(token == "+") result = a+b;
            else if(token == "*") result = a*b;
            else if(token == "-") result = a-b;
            else if(token == "/") result = Math.trunc(a/b);
            st.push(result);
            

        }else{
            st.push(Number(token));
        }
    }
    return st.pop();
}
console.log(evaluate(arr));