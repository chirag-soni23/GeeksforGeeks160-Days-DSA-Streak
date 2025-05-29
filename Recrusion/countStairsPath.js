function countStairsPath(n,currStair){
    if(currStair === n) return 1;
    if(currStair > n) return 0;

    let one = countStairsPath(n,currStair+1);
    let two = countStairsPath(n,currStair+2);
    let three = countStairsPath(n,currStair+3);

    return one + two + three;
}
console.log(countStairsPath(3,0));