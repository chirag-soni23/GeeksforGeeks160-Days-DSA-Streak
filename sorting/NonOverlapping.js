let intervals = [[1, 2], [2, 3], [3, 4], [1, 3]];

function nonOverLappingInterval(intervals){
    intervals = intervals.sort((a,b) => a[0] - b[0]);
    let n = intervals.length;
    let count = 0;
    let i = 1;
    let L = intervals[0];

    while(i<n){
        let curr_start = intervals[i][0];
        let curr_end = intervals[i][1];
        let last_interval_end = L[1];

        if(curr_start >= last_interval_end){
            // no overlapping (✅ We are safe)
            L = intervals[i];
        }else if(curr_end >= last_interval_end){
            // overlapping 🗗
            count++;
        }else if(curr_end > last_interval_end){
            // overlapping 🗗 (⏩ intervals is increase) the element is too long interval size so there is overlapping  
            L = intervals[i];
            count++;
        }
        i++;

    }
    return count;
}

let result = nonOverLappingInterval(intervals);
console.log(`The Count of non overlapping intervals is ${result}`);