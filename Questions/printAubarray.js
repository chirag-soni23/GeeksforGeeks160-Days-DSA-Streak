function printAllSubarrays(arr) {
  let n = arr.length;
  for(let i = 0;i<n;i++){
    for(let j = i;j<n;j++){
        let subarray = [];
        for(let k = i;k<=j;k++){
            subarray.push(arr[k]);
        }
        console.log(subarray);
    }
  }
}

// Example usage
const arr = [1, 2, 3];
printAllSubarrays(arr);