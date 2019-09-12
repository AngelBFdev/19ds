function howMany(...array)
{
    var cont=0;
    var diferente
    var identicos=false;
    for(a=0;a<array.length;a++)
    {
        for(b=array.length-1;b>a;b--)
        {
            if(array[a]>array[b])
            {
                orden=array[a]
                array[a]=array[b]
                array[b]=orden
            }
            if(diferente==array[a]&&identicos==false){
                cont++
                identicos=true
            }else if(diferente!=array[a])
                identicos=false
        }
        diferente=array[a]
    }
    return cont
}

 
howMany(1,1,2,2,3,3,3,4,4,4,3)