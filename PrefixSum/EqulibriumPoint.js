let arr = [1, 2, 0, 3];

function findEquilibrium(arr){
    let totalSum = 0, leftSum = 0;
       for(let i = 0;i<arr.length;i++){
           totalSum += arr[i];
       }
       for(let i = 0;i<arr.length;i++){
           let rightSum = totalSum - leftSum - arr[i];
           if(leftSum == rightSum) return i;
           leftSum += arr[i];
       }
       return -1;
}

console.log(findEquilibrium(arr));