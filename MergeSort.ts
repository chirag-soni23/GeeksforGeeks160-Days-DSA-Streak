function mergeTwoSortedArr(arr1: number[], arr2: number[]) {
    let i = 0;
    let j = 0;
    let n = arr1.length;
    let m = arr2.length;
    let ans: number[] = [];

    while (i < n && j < m) {
        if (arr1[i] < arr2[j]) {
            ans.push(arr1[i]);
            i++;
        } else {
            ans.push(arr2[j]);
            j++;
        }
    }

    while (j < m) {
        ans.push(arr2[j]);
        j++;
    }
    while (i < n) {
        ans.push(arr1[i]);
        i++;
    }
    return ans;
}

function mergeSort(arr:number[],l:number,r:number):number[]{

    // base case
    if(l === r){
        let res:number[] = [];
        res.push(arr[l]);
        return res;
    }
    let mid = Math.floor((l+r)/2);

    let leftSortedArr = mergeSort(arr,l,mid);
    let rightSortedArr = mergeSort(arr,mid+1,r);
    let fullSortedArr = mergeTwoSortedArr(leftSortedArr,rightSortedArr);
    return fullSortedArr;
}

function sort(arr:number[]){
    return mergeSort(arr,0,arr.length - 1);   
}

let arr = [56,78,12,34,10,23];
let result = sort(arr);
console.log(result);