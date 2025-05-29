let arr1 = [1, 2, 1, 3, 1];
let arr2 = [3, 1, 3, 4, 1];

function intersection(arr1,arr2){
    let set = new Set(arr1);
    let result = [];

    for(let i = 0;i<arr2.length;i++){
        let value = arr2[i];
        if(set.has(value)){
            result.push(arr2[i]);
            set.delete(arr2[i]);
        }
    }
    return result;
}

console.log(intersection(arr1,arr2));