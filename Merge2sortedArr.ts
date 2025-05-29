let arr1:number[] = [5,11,14,26,32,49,56,62];
let arr2:number[] = [1,6,9,12,99,100];

function mergeTwoSortedArr(arr1:number[],arr2:number[]):number[]{
    let ans:number[] = [];
    let i = 0;
    let j = 0;
    let n = arr1.length;
    let m = arr2.length;

    while(i<n&&j<m){
        if(arr1[i]<arr2[j]){
            ans.push(arr1[i]);
            i++;            
        }else{
            ans.push(arr2[j]);
            j++;
        }
    }

    while(j<m){
        ans.push(arr2[j]);
            j++;

    }
    while(i<n){
        ans.push(arr1[i]);
        i++; 
    }

    return ans;
}
console.log(mergeTwoSortedArr(arr1,arr2));
