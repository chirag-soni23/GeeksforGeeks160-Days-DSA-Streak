let a = [1, 2, 3, 4, 5];
let b = [1, 2, 3];

function union(a,b){
    let set = new Set();
    for(let num of a) set.add(num);
    for(let num of b) set.add(num);
    return set.size
}
let result = union(a,b);
console.log(result);