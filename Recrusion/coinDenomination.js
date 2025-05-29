function coinDenomination(n, currStair, asf, coins) {
    if (currStair === n) {
        console.log(asf);
        return;
    }

    if (currStair > n) return;

    for (let i = 0; i < coins.length; i++) {
        let coin = coins[i];
        coinDenomination(n, currStair + coin, asf + coin, coins); 
    }
}

coinDenomination(4, 0, "", [5, 10, 4, 6, 7]);
