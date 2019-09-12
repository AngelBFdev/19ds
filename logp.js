function Calcu(){
    var b = document.getElementById("base").value
    var resul=0;
    var text="";
    var coor='M100,50 L100,350 L500,350 L100,350 L140,350';
    for(x=1;x<11;x++)
    {
        resul=Math.log(x)/Math.log(b)
        coor+=" L"+((x*40)+100)+","+(350-(resul*100).toFixed(0))
        text+="El logaritmo base "+b+" de "+x+" es: "+resul+"\n"
    }
    document.getElementById("out").innerHTML = text

    
    if(b>1)
    {
    document.getElementById('my-svg').innerHTML=""
    document.getElementById('my-svg').innerHTML,600,400
    var paper= Raphael(document.getElementById('my-svg'),600,400);
    var grafica=paper.path(coor);
    for(x=0;x<3;x++){
        var marca1=paper.path("M95,"+(50+x*100)+" L105,"+(50+x*100))
    }
    for(x=1;x<11;x++){
        var marca1=paper.path("M"+(100+40*x)+",345 L"+(100+40*x)+",355")
    } 
    }
}

