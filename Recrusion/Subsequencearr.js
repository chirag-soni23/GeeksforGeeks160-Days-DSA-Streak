let arr = [10,20,30];

function printAllSubsequence(arr,idx,asf){
    if(idx == arr.length){
        console.log(asf);
        return;
    }

    // pick
    printAllSubsequence(arr,idx+1,asf+" "+arr[idx]);

    // not pick
    printAllSubsequence(arr,idx+1, asf);
}
printAllSubsequence(arr,0,"");