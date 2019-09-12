var n=10;
var a=2;
var sum=0;
for(x=0;x<10;x++)
{
    sum+=Math.pow(a,x);
}
form=((Math.pow(a,(n+1))-1)/(a-1))
console.log("Resultado 1:"+sum)
console.log("Resultado 2:"+form)