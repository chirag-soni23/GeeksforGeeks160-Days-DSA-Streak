let n = 5;
let s = "";

for(let i = 1;i<=n;i++){
    let stars = i;
    let spaces = n - stars;

    // print spaces
    for(let j = 1;j<=spaces;j++) s+= " ";
    // print stars
    for(let j = 1;j<=stars;j++) s+= "*";
    s += "\n"

}
console.log(s);