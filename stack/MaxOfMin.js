let arr = [10, 20, 30, 50, 10, 70, 30];

function MaxOfMin(arr) {
  let n = arr.length;
  let left = new Array(n).fill(-1);
  let right = new Array(n).fill(n);
  let st = [];

  // left
  for (let i = 0; i < n; i++) {
    while (st.length && arr[st[st.length - 1]] >= arr[i]) {
      st.pop();
    }
    if (st.length) left[i] = st[st.length - 1];
    st.push(i);
  }

  // empty the stack
  st = [];

  // right
  for (let i = n - 1; i >= 0; i--) {
    while (st.length && arr[st[st.length - 1]] >= arr[i]) {
      st.pop();
    }
    if (st.length) right[i] = st[st.length - 1];
    st.push(i);
  }

  let ans = new Array(n + 1).fill(-Infinity);
  for (let i = 0; i < n; i++) {
    let len = right[i] - left[i] - 1;
    ans[len] = Math.max(ans[len], arr[i]);
  }

  for (let i = n - 1; i >= 1; i--) {
    ans[i] = Math.max(ans[i], ans[i + 1]);
  }
  return ans.slice(1);
}

console.log(MaxOfMin(arr));
