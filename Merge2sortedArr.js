var arr1 = [5, 11, 14, 26, 32, 49, 56, 62];
var arr2 = [1, 6, 9, 12, 99, 100];
function mergeTwoSortedArr(arr1, arr2) {
    var ans = [];
    var i = 0;
    var j = 0;
    var n = arr1.length;
    var m = arr2.length;
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
console.log(mergeTwoSortedArr(arr1, arr2));
