let n = 5;
let s = "";

for(let i = n;i>=1;i--){
    for(let j = i;j>=1;j--){
        s += "*";
    }
    s += "\n";
}
console.log(s);