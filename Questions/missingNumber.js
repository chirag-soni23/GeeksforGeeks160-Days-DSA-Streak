let arr = [1,2,4,5,6];

function findMissingNumber(arr){
    let n = arr.length + 1;
    let exceptSum = (n * (n+1))/2;
    let actualSum = 0;

    for(let num of arr){
        actualSum += num;
    }
    return exceptSum - actualSum;
}

console.log(findMissingNumber(arr));