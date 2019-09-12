function fact(n)
{
    var fac=1
    for(j=0;j<=n;j++)
    {
        fac=j*fac
        if(fac==0)
            fac=1
    }
    return fac;
}
function permuta(n,r){
    return fact(n)/fact(n-r)
}
function combi(n,r){
    return permuta(n,r)/fact(r)
}
console.log(combi(10,3))