let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function zigzag(arr){
    let result = [];
    for(let j = arr.length-1; j >= 0; j--){
        // if(j % 2 == 0){
        //     for(let i = arr.length-1; i >= 0; i--){
        //         result.push(arr[i][j]);
        //     }
        // } else {
        //     for(let i = 0; i < arr.length; i++){
        //         result.push(arr[i][j]);
        //     }
        // }
    }
    // console.log(result.join(" "));
}

zigzag(arr);
