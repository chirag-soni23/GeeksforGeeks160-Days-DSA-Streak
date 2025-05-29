let mat = [[3, 30, 38],[20, 52, 54],[35, 60, 69]]
let x = 52;

function matSearch(mat,x){
    let m = mat.length;
    let n = mat[0].length;
    let i = 0;
    let j = n - 1;

    while(i<m && j >= 0){
        if(mat[i][j] > x){
            j--;
        }else if(mat[i][j] < x){
            i++;
        }else{
            return true;
        }
    }
    return false;
}
console.log(matSearch(mat,x));