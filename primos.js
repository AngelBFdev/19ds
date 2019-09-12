function primo(a){
    var prim=[2]
    var num=3;
  
    while(a>prim.length){
        var cont=0
        for(x=2;x<num;x++){
            if(num%x==0){
                cont++
            }
            if(cont>=1)
                break;
            if((num/2==x)&&(cont==0))
                break;
        }
        if(cont==0){
            prim.push(num)
        }
        num++
    }
    a--
    return prim[a]
}
primo(5)