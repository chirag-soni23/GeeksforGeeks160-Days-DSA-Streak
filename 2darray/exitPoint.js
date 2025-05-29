let arr = [
    [0,0,0,0,1,0,0],
    [0,1,0,0,0,1,0],
    [0,0,0,0,0,0,0],
    [0,1,0,0,1,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
]

function exitPoint(arr){
    let i = 0;
    let j = 0;
    let dir = "R";

    while(i >= 0 && j >= 0 && i < arr.length && j < arr[0].length){
        if(arr[i][j] == 1){
            arr[i][j] = 0;
            // chnage the direction
            if(dir == "R") dir = "D";
            else if(dir == "D") dir = "L";
            else if(dir == "L") dir = "U";
            else if(dir == "U") dir = "R";
        }

        if(dir == "R") j++;
        else if(dir == "D") i++;
        else if(dir == "U") i--;
        else if(dir == "L") j--;
    }
    // array index out of bounce
    if(dir == "R") j--;
    else if(dir == "D") i--;
    else if(dir == "U") i++;
    else if(dir == "L") j++;

    console.log(i,j);
}
exitPoint(arr);