var n = 5;
var s = "";
for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= i; j++) {
        s += "*";
    }
    s += "\n";
}
console.log(s);
