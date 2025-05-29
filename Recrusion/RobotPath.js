function  robotPath(n,m,i,j,psf) {
    if(i == n && j == m){
        console.log(psf);
        return;
    }   
    if(i>n|| j>m){
        return;
    }

    // for verticle
    robotPath(n,m,i+1,j,psf+"v");
    // for horizontal
    robotPath(n,m,i,j+1,psf+"h");
}
robotPath(3,3,1,1,"");