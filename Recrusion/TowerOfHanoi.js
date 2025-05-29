function toh(n,s,d,h){
    // base case
    if(n==0)return;
    toh(n-1,s,d,h);
    console.log(`Move disc ${n} from ${s} to ${d}`);
    toh(n-1,h,d,s);
}
toh(3,"a","b","c");