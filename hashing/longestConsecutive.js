let arr = [2, 6, 1, 9, 4, 5, 3];

function longestConsecutive(arr){
    let set = new Set();
    let res = 0;

    for(let val of arr){
        set.add(val);
    }
    for(let val of arr){
        if(set.has(val) && !set.has(val-1)){
            let count = 0;
            let curr = val;
            while(set.has(curr)){
                set.delete(curr);
                count++;
                curr++;
            }
            res=Math.max(res,count);
        }
    }
    return res;
    
}
console.log(longestConsecutive(arr));