var array=[5,5,7,6,1]
var orden
console.log(array)
for(var a=0;a<array.length;a++){
    for(var b=array.length-1;b>a;b--){
        if(array[a]>array[b])
        {
            orden=array[a]
            array[a]=array[b]
            array[b]=orden
        }
    }
}
console.log(array)
 