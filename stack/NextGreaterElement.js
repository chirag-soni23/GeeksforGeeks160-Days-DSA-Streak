let arr = [1, 3, 2, 4];

function nextGreaterElement(arr){
    let n = arr.length;
    let st = [];
    let ans = new Array(n).fill(-1);

    for(let i = n - 1; i >= 0; i--){
        while(st.length > 0 && st[st.length - 1] <= arr[i]){
            st.pop();
        }
        if(st.length > 0) ans[i] = st[st.length - 1];
        st.push(arr[i]);
    }
    return ans;
}
console.log(nextGreaterElement(arr));