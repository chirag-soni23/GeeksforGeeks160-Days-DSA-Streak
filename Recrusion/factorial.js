let n = 5;
function factorial(n){
    // base case
    if(n==1) return 1;
    let nmf1 = factorial(n-1);
    return n * nmf1;
}
console.log(factorial(n));