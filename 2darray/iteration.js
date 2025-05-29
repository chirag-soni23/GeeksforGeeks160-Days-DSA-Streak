let arr = [
    [1, 2, 3], 
    [4, 5, 6], 
    [8,9,10],
    [11,12,13]
];

// iteration 1
function iteration1(arr) {
    let s = "";
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            s += arr[i][j] + " ";
        }
    }
    console.log(`Iteration 1 => ${s}`)
}
iteration1(arr);

// iteration 2
function iteration2(arr){
    let s = "";
    for(let i =0;i<arr.length;i++){
        for(let j = arr[i].length - 1;j>=0;j--){
            s += arr[i][j]+" ";
        }
    }
    console.log(`Iteration 2 => ${s}`);
}
iteration2(arr);

// iteration 3
function iteration3(arr){
    let s = "";
    for(let j = 0;j<arr[0].length;j++){
        for(let i = arr.length -1;i>=0;i--){
            s += arr[i][j]+" ";
        }
    }
    console.log(`Iteration 3 => ${s}`);

}
iteration3(arr);