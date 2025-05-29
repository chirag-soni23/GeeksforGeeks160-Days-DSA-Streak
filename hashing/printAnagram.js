let arr = ["act", "god", "cat", "dog", "tac"];

function printAnagram(arr){
    let map = new Map();
    let result = [];
    for(let i = 0;i<arr.length;i++){
        let key = getHash(arr[i]);
        if(!map.has(key)){
            map.set(key,result.length);
            result.push([]);
        }
        result[map.get(key)].push(arr[i]);
    }
    return result;

}

function getHash(s){
    let freq = new Array(26).fill(0);
    for(let i = 0;i<s.length;i++){
        let ch = s[i];
        freq[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    let hash = [];
    for(let i = 0;i<26;i++){
        hash.push(freq[i].toString());
    }
    return hash.join('');
}

console.log(printAnagram(arr));