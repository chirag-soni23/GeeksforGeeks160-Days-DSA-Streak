let start = [1, 3, 0, 5, 8, 5],
  finish = [2, 4, 6, 7, 9, 9];

function activitySelection(start, finish) {
  let n = start.length;
  let res = [];

  for (let i = 0; i < n; i++) {
    res.push({ start: start[i], finish: finish[i] });
  }
  res.sort((a, b) => a.finish - b.finish);

  let count = 1;
  let currFinish = res[0].finish;
  for (let i = 1; i < n; i++) {
    if (res[i].start > currFinish) {
      count++;
      currFinish = res[i].finish;
    }
  }
  return count;
}

console.log(activitySelection(start, finish));
