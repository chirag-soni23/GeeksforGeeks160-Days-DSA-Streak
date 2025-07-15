let arr = [5, 8, 3, 7, 9, 1];

function lis(arr){
    let n = arr.length;
    let dp = Array.from({length : n},() => Array(n+1).fill(-1));
    return solve(arr,0,-1,n,dp);
}

function solve(arr,i,p,n,dp){
    // base case
    if(i >= n) return 0;

    if(dp[i][p+1] !== -1) return dp[i][p+1] 
    // take
    let take = 0;
    if(p == -1 || arr[p] < arr[i]){
        take = 1 + solve(arr,i+1,i,n,dp);
    }
    // skip
    let skip = solve(arr,i+1,p,n,dp);

    // memoziation
    dp[i][p+1] = Math.max(take,skip);
    return dp[i][p+1];
}
console.log(lis(arr));