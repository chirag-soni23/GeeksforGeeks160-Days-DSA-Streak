let arr = [1, 4, 45, 6, 10, 8];
let target = 16;

function twoSum(arr,target){
    let set = new Set();

    for(let num of arr){
        let value = target - num;
        if(set.has(value)){
            return true;
        }
        set.add(num); 
    }
    return false;
}

console.log(twoSum(arr,target))