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
console.log(permuta(11,3))