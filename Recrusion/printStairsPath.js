function  printStairsPath(n,curr,asf){
    if(curr == n){
        console.log(asf);
        return;
    }
    if(curr > n) return;

    // jump of 1
    printStairsPath(n,curr + 1,asf+"1");
    // jump of 2
    printStairsPath(n,curr + 2,asf+"2");
    // jump of 3
    printStairsPath(n,curr + 3,asf+"3");
    
}
printStairsPath(3,0,"");