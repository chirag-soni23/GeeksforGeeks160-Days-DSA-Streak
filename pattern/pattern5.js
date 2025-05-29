let n = 7;
let stars = 1;
let spaces = Math.floor(n/2);
let s = "";

for(let i = 1;i<=n;i++){
    // print spaces
    for(let j = 1;j<=spaces;j++){
        s += " "
    }
    for(let j = 1;j<=stars;j++){
        s += "*"
    }
    s+="\n";
    if(i<=Math.floor(n/2)){
        spaces -= 1;
        stars += 2;
    }else{
        spaces += 1;
        stars -= 2;
    }
}
console.log(s)