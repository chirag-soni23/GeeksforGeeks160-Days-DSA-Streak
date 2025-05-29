let arr = [12, 34, 67, 90];
let k = 2;

function searchPage(arr,k){
  let n = arr.length;
  if(k > n) return -1;

  let sum = 0;
  for(let i = 0;i<n;i++){
    sum += arr[i];
  }

  let l = 0;
  let r = sum;
  let ans = 0;

  while(l<=r){
    let mid = Math.floor((l+r)/2);
    if(isPossible(arr,n,k,mid)){
      ans = mid;
      r = mid - 1;
    }else{
      l = mid + 1;
    }
  }
  return ans;
}

function isPossible(arr,n,k,mid){
  let st = 1;
  let pages = 0;
  for(let i =0;i<n;i++){
    if(arr[i] > mid) return false;
    if(pages + arr[i] <= mid){
      pages += arr[i];
    }else{
      st++;
      pages = arr[i];
    }
  }
  return st <= k;
}
console.log(searchPage(arr,k));
