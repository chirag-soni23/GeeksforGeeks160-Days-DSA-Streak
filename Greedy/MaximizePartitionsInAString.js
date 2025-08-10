let s = "acbbcc";

function maxPartition(s) {
  let n = s.length;
  let lastOccur = new Map();
  for (let i = 0; i < n; i++) {
    lastOccur.set(s[i], i);
  }
  let count = 0,
    end = 0;
  for (let i = 0; i < n; i++) {
    end = Math.max(end, lastOccur.get(s[i]));
    if (i == end) count++;
  }
  return count;
}

console.log(maxPartition(s));
