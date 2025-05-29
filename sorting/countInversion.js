const arr = [2, 4, 1, 3, 5];
function inversionCount(arr) {
    let invCount = 0;

    function mergeSort(arr, l, r) {
        if (l === r) return [arr[l]];

        let mid = Math.floor((l + r) / 2);
        let leftSortedArr = mergeSort(arr, l, mid);
        let rightSortedArr = mergeSort(arr, mid + 1, r);

        return mergeTwoSortedArr(leftSortedArr, rightSortedArr);
    }

    function mergeTwoSortedArr(arr1, arr2) {
        let i = 0, j = 0;
        let n = arr1.length, m = arr2.length;
        let ans = [];

        while (i < n && j < m) {
            if (arr1[i] <= arr2[j]) {
                ans.push(arr1[i]);
                i++;
            } else {
                ans.push(arr2[j]);
                j++;
                invCount += (n - i); 
            }
        }

        while (i < n) {
            ans.push(arr1[i]);
            i++;
        }

        while (j < m) {
            ans.push(arr2[j]);
            j++;
        }

        return ans;
    }

    mergeSort(arr, 0, arr.length - 1);
    return invCount;
}

console.log(inversionCount(arr))