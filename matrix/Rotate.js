let arr = [[1, 2, 3], [4, 5, 6],[7, 8, 9]];

function rotate(arr){
    let n = arr.length;
    // transpose of matrix
    for(let i = 0;i<n;i++){
        for(let j = i+1;j<n;j++){
            let temp = arr[i][j];
            arr[i][j] = arr[j][i];
            arr[j][i] = temp;
        }
    }

    // reverse of matrix
    for(let j = 0;j<n;j++){
        let top = 0;
        let bottom = n - 1;
        while(top<=bottom){
            let temp = arr[top][j];
            arr[top][j] = arr[bottom][j];
            arr[bottom][j] = temp;
            top++;
            bottom--;
        }
    }
    return arr;
}

console.log(rotate(arr));

