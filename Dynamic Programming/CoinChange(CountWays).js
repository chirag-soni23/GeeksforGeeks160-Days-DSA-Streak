let coins = [1, 2, 3], sum = 4;

function coinChange(coins,sum){
    let n = coins.length;
    let dp = Array.from({length:n},() => new Array(sum+1).fill(-1));
    return solve(coins,sum,0,dp);
}

function solve(coins,sum,i,dp){
    // base case
    if(sum < 0) return 0;
    if(sum === 0) return 1;
    if(i === coins.length) return 0;

    if(dp[i][sum] !== -1) return dp[i][sum];

    // recrusive case
    let pick = solve(coins,sum - coins[i],i,dp);
    let noPick = solve(coins,sum,i+1,dp);
    return pick + noPick;
}

console.log(coinChange(coins,sum))