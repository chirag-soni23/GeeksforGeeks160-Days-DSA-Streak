let a = [2, 4, 7, 10];
let b = [2, 3];

function swap(arr1,arr2,n,m){
    if(arr1[n] > arr2[m]){
        [arr1[n],arr2[m]] = [arr2[m],arr1[n]];
    }
}

function mergeWithoutExtraSpace(a,b){
    let n = a.length;
    let m = b.length;
    let len = n + m;
    let gap = Math.ceil(len / 2);

    while(gap > 0){
        let left = 0;
        let right = left + gap;
        while(right < len){
            if(left < n && right >= n){
                // arr1 and arr2
                swap(a,b,left,right - n);
            }else if(left >= n){
                // arr2 and arr2
                swap(b,b,left - n,right - n);
            }else{
                // arr1 and arr1
                swap(a,a,left,right);
            }
            left++;
            right++;
        }
        if(gap === 1) break;
        gap = Math.ceil(gap / 2);
    }
    return [a,b];
}

let [mergedOne,mergedTwo] = mergeWithoutExtraSpace(a,b);
console.log(mergedOne,mergedTwo);