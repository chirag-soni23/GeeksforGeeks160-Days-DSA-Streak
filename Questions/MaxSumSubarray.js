let arr = [5,-2,-7,3,-4,-2,6,7,-2,8,-1,10,-2,-4,2];

function maxSumSubArray(arr){
    let train = 0;
    let maxi = 0;
    for(let i = 0;i<arr.length;i++){
        let newTrain = arr[i];
        let prevTrain = train + arr[i];
        train = Math.max(newTrain,prevTrain);
        maxi = Math.max(maxi,train);
    }
    return maxi;
}

console.log(maxSumSubArray(arr));