let interval = [[1,3], [4,5], [6,7], [8,10]];
let newInterval = [5,6];

function  insertInterval(interval,newInterval) {
    let i = 0;
    let result = [];
    let n = interval.length;
    interval.sort((a,b) => a[0] - b[0]);
    
    while(i<n){
        if(interval[i][1] < newInterval[0]){
            result.push(interval[i]);
        }else if(interval[i][0] > newInterval[1]){
            break;
        }else{
            // merge 
            newInterval[0] = Math.min(newInterval[0],interval[i][0]);
            newInterval[1] = Math.max(newInterval[1],interval[i][1]);
        }
        i++;
    }
    result.push(newInterval);
    while(i<n){
        result.push(interval[i]);
        i++;
    }
    return result;
}

console.log(insertInterval(interval,newInterval));