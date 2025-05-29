let s = "NAMAN";

function isPalindrome(s){
    let l = 0;
    let r = s.length - 1;
    while(l<r){
        if(s[l]!=s[r]){
            return false;
        }
        l++;
        r--;
    }
    return true;
}

function subStringPalindromic(s){
    for(let i = 0;i<s.length;i++){
        for(let j = i;j<s.length;j++){
            let substr = s.substring(i,j);
            if(isPalindrome(substr) == true) console.log(substr);
        }
    }
}
subStringPalindromic(s);