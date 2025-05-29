let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function reverse(row) {
    let l = 0;
    let r = row.length - 1;
    while (l < r) {
        let temp = row[l];
        row[l] = row[r];
        row[r] = temp;

        l++;
        r--;
    }
}

function rotate(arr) {
    let n = arr.length;

    // Transpose the matrix
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let temp = arr[i][j];
            arr[i][j] = arr[j][i];
            arr[j][i] = temp;
        }
    }

    for (let i = 0; i < n; i++) {
        reverse(arr[i]); 
    }
}

rotate(arr);
console.log(arr);
