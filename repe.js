function repeated(...array)
{
    var rep=false
    var b=array.length-1
    for(a=0;a<array.length;a++){
        if(array[a]==array[b]){

            rep=true;
        }
        b=b-1
    }
    return rep
}

repeated(1,2,3,4,4)