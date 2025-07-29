let arr = [3, 34, 4, 12, 5, 2],
  sum = 9;

function isSubsetSum(arr, sum) {
  let n = arr.length;
  let dp = Array.from({ length: n + 1 }, () =>
    new Array(sum + 1).fill(undefined)
  );
  return solve(arr, sum, n, dp);
}

function solve(arr, sum, n, dp) {
  // base case
  if (sum === 0) return true;
  if (n === 0) return false;

  if (dp[n][sum] !== undefined) return dp[n][sum];

  // recrusive case
  if (arr[n - 1] <= sum) {
    dp[n][sum] =
      solve(arr, sum - arr[n - 1], n - 1, dp) || solve(arr, sum, n - 1, dp);
  } else {
    dp[n][sum] = solve(arr, sum, n - 1, dp);
  }
  return dp[n][sum];
}

console.log(isSubsetSum(arr, sum));
