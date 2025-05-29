let a = [2, 3, 6, 7, 9];
let b = [1, 4, 8, 10];
let k = 5;

function kthElement(a,b,k){
    if(a.length > b.length){
        return kthElement(b,a,k);
    }
    let m = a.length;
    let n = b.length;
    let l = Math.max(0,k-n);
    let r = Math.min(k,m);
    const INT_MAX = Infinity;
    const INT_MIN = -Infinity;

    while(l<=r){
        let Px = Math.floor((l+r)/2);
        let Py = k - Px;

        let x1 = (Px == 0 ? INT_MAX : a[Px - 1]);
        let x2 = (Py == 0 ? INT_MAX : b[Py - 1]);
        let x3 = (Px == m ? INT_MIN : a[Px]);
        let x4 = (Py == n ? INT_MIN : b[Py]);

        if(x1<=x4 && x2<=x3){
                return Math.max(x1,x2);
        }else if(x1 > x4){
            r = Px - 1;
        }else{
            l = Px + 1;
        }
    }
    return -1;
}

console.log(kthElement(a,b,k));