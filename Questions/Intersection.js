let arr1 = [1,2,3,4];
let arr2 = [3,4,5,6];

function intersection(arr1,arr2){
    let set1 = new Set(arr1);
    let intersection = [];

    for(let num of arr2){
        if(set1.has(num)){
            intersection.push(num);
            set1.delete(num);
        }
    }
    return intersection;
}
console.log(intersection(arr1,arr2));