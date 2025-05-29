function mergeTwoSortedArr(arr1, arr2) {
    var i = 0;
    var j = 0;
    var n = arr1.length;
    var m = arr2.length;
    var ans = [];
    while (i < n && j < m) {
        if (arr1[i] < arr2[j]) {
            ans.push(arr1[i]);
            i++;
        }
        else {
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
function mergeSort(arr, l, r) {
    // base case
    if (l === r) {
        var res = [];
        res.push(arr[l]);
        return res;
    }
    var mid = Math.floor((l + r) / 2);
    var leftSortedArr = mergeSort(arr, l, mid);
    var rightSortedArr = mergeSort(arr, mid + 1, r);
    var fullSortedArr = mergeTwoSortedArr(leftSortedArr, rightSortedArr);
    return fullSortedArr;
}
function sort(arr) {
    return mergeSort(arr, 0, arr.length - 1);
}
var arr = [56, 78, 12, 34, 10, 23];
var result = sort(arr);
console.log(result);
