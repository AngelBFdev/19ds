function fibo(a){
    var nacci=[0,1]
    if(a>2){
        a-=2
        for(x=0;x<a;x++){
            nacci.push(nacci[x]+nacci[x+1])
        }
        a++
    }
    else a--
    return nacci[a]
}
fibo(1)