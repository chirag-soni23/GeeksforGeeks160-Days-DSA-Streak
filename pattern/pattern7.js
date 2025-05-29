let n = 5;
let stars = 1;
let spaces = Math.floor(n / 2);
let s = "";

for (let i = 1; i <= n; i++) {
    // Print spaces
    for (let j = 1; j <= spaces; j++) {
        s += " ";
    }
    
    // Print stars and hollow spaces
    for (let j = 1; j <= stars; j++) {
        if (j === 1 || j === stars || i === 1 || i === n) {
            s += "*";
        } else {
            s += " ";
        }
    }
    
    s += "\n";
    
    if (i <= Math.floor(n / 2)) {
        spaces -= 1;
        stars += 2;
    } else {
        spaces += 1;
        stars -= 2;
    }
}

console.log(s);
