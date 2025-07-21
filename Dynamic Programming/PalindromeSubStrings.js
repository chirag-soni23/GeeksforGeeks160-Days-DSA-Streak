let s = "abbaeae";
let count = 0;

function PS(s) {
  let n = s.length;
  for (let i = 0; i < n; i++) {
    check(i, i, s, n); // odd
    check(i, i + 1, s, n); // even
  }
  return count;
}

function check(i, j, s, n) {
  while (i >= 0 && j < n && s[i] === s[j]) {
    if (j - i + 1 >= 2) {
      count++;
    }
    i--;
    j++;
  }
}

console.log(PS(s));
