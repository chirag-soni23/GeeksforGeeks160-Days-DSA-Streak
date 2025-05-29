let arr = [1, 2, 3, 4, 5];

function reverseInRange(arr, l, r) {
    while (l < r) {
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
}

function rotateArr(arr, k) {
    let n = arr.length;
    k = k % n;

    reverseInRange(arr, 0, n - k - 1);
    reverseInRange(arr, n - k, n - 1);
    reverseInRange(arr, 0, n - 1);
}

rotateArr(arr, 3);
console.log(arr);
