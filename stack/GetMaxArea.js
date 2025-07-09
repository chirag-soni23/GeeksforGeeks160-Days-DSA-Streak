let arr = [60, 20, 50, 40, 10, 50, 60];

function getMaxArea(arr) {
  let ans = 0;
  let st = [];
  let n = arr.length;
  let left = new Array(n).fill(0);
  let right = new Array(n).fill(0);

  // right
  for (let i = n - 1; i >= 0; i--) {
    while (st.length && arr[st[st.length - 1]] >= arr[i]) {
      st.pop();
    }
    right[i] = st.length ? st[st.length - 1] : n;
    st.push(i);
  }

  // empty the stack
  st.length = 0;

  // left
  for (let i = 0; i < n; i++) {
    while (st.length && arr[st[st.length - 1]] >= arr[i]) {
      st.pop();
    }
    left[i] = st.length ? st[st.length - 1] : -1;
    st.push(i);
  }

  // calculate area
  for (let i = 0; i < n; i++) {
    let width = right[i] - left[i] - 1;
    let currArea = arr[i] * width;
    ans = Math.max(ans, currArea);
  }
  return ans;
}

console.log(getMaxArea(arr));
