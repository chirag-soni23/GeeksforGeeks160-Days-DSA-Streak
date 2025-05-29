let mat = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];


function setMatrix(mat){
    let m = mat.length;
    let n = mat[0].length;
    
    let col = new Array(m).fill(0);
    let row = new Array(n).fill(0);

    for(let i = 0;i<m;i++){
        for(let j = 0;j<n;j++){
            if(mat[i][j] == 0){
                row[i] = 1;
                col[j] = 1;
            }
        }
    }

    for(let i = 0;i<m;i++){
        for(let j = 0;j<n;j++){
            if(row[i] || col[j]){
                mat[i][j] = 0;
            }
        }
    }

    return mat;

}
console.log(setMatrix(mat))
