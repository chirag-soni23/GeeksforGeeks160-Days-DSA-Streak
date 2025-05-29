let str = "37460";

function largestOddnumber(str){
    let i = str.length - 1;

    while(i>=0){
        if(parseInt(str[i])%2==1){
            break;
        }
        i--;
    }
    return str.substring(0,i+1);

}
console.log(largestOddnumber(str));