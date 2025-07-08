let arr = [100, 80, 60, 70, 60, 75, 85];

function stockSpan(arr) {
  let n = arr.length;
  let stack = [];
  let ans = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] <= arr[i]) {
      stack.pop();
    }
    if (stack.length == 0) ans[i] = i + 1;
    else ans[i] = i - stack[stack.length - 1];
    stack.push(i);
  }
  return ans;
}

console.log(stockSpan(arr));
