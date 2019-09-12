var array=[4,5,4,8,9]
var ordenado=false
for(var a=0;a<array.length-1;a++){
    if(array[a]<=array[a+1]){
        ordenado=true
    }
    else{
        ordenado=false
        break;
    }
}
console.log(ordenado)