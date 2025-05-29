let s = "Hello World"
function countVowels(s){
    let count = 0;
    let vowels = "aeiouAEIOU";
    for(let i = 0;i<s.length;i++){
        for(let j = 0;j<vowels.length;j++){
            if(s[i] == vowels[j]){
                count++;
                break;
            }
        }
    }
    return count;
}
console.log(countVowels(s));