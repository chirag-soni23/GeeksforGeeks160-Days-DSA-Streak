let arr = [1, 3, -5, 2, 8];

function maxProduct(arr) {
    let max1 = -Infinity;
    let max2 = -Infinity;
    let min1 = Infinity;
    let min2 = Infinity;

    for (let num of arr) {
        if (num > max1) {
            max2 = max1;
            max1 = num;
        } else if (num > max2) {
            max2 = num;
        }

        if (num < min1) {
            min2 = min1;
            min1 = num;
        } else if (num < min2) {
            min2 = num;
        }
    }
    return Math.max(max1 * max2, min1 * min2);
}
console.log(maxProduct(arr));