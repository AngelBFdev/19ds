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
function cata(n){
    var result=fact(2*n)/(fact(n+1)*fact(n))
    return result
}
console.log(cata(7))