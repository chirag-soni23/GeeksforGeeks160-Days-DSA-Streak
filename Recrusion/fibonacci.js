let n = 4;
function fibonacci(n){
    // base case
    if(n == 1) return 0;
    if(n == 2) return 1;

    let nm1 = fibonacci(n-1);
    let nm2 = fibonacci(n-2);
    return nm1 + nm2;
}
console.log(fibonacci(n))