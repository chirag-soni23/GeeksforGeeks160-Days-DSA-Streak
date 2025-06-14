let board = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];

function sudkoSolver(board){
    isHelper(board,0,0);
    return board; // return final solved board
}

function isHelper(board,row,col){
    if(row === 9) return true;

    let nextRow = row;
    let nextCol = col + 1;
    if(nextCol === 9){
        nextRow = row + 1;
        nextCol = 0;
    }

    if(board[row][col] !== '.') return isHelper(board,nextRow,nextCol);

    for(let digit = 1; digit <= 9; digit++){
        if(isSafe(board,row,col,digit.toString())){
            board[row][col] = digit.toString();
            if(isHelper(board,nextRow,nextCol)) return true;
            board[row][col] = '.';
        }
    }
    return false;  
}

function isSafe(board,row,col,digit){
    for(let j = 0; j < 9; j++){
        if(board[row][j] === digit) return false;
    }

    for(let i = 0; i < 9; i++){
        if(board[i][col] === digit) return false;
    }

    let srow = Math.floor(row/3) * 3;
    let scol = Math.floor(col/3) * 3;
    for(let i = srow; i < srow + 3; i++){
        for(let j = scol; j < scol + 3; j++){
            if(board[i][j] === digit) return false;
        }
    }

    return true;
}

console.log(sudkoSolver(board));
