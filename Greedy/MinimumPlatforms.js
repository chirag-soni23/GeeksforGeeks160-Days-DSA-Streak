let arr = [900, 940, 950, 1100, 1500, 1800],
  dep = [910, 1200, 1120, 1130, 1900, 2000];

function minimumPlatforms(arr, dep) {
  arr = arr.sort((a, b) => a - b);
  dep = dep.sort((a, b) => a - b);
  let count = 0,
    maxi = -1,
    n = arr.length;
  let i = 0,
    j = 0;

  while (i < n && j < n) {
    if (arr[i] <= dep[j]) {
      count++;
      i++;
    } else {
      count--;
      j++;
    }
    maxi = Math.max(maxi, count);
  }
  return maxi;
}

console.log(minimumPlatforms(arr, dep));
