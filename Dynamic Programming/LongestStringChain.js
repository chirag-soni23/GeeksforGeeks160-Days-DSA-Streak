let words = ["ba", "b", "a", "bca", "bda", "bdca"];

function longestStringChain(words){
    words.sort((a,b) => a.length - b.length);
    let dp = new Map();
    let maxLen = 1;

    for(let word of words){
        dp.set(word,1);
        for(let i = 0; i < word.length; i++){
            let pred = word.slice(0,i) + word.slice(i+1);
            if(dp.has(pred)){
                dp.set(word,Math.max(dp.get(word),dp.get(pred) + 1));
            }
        }
        maxLen = Math.max(maxLen,dp.get(word));
    }
    return maxLen;
}

console.log(longestStringChain(words));