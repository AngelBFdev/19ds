
class Graph {
    constructor(dir){
        this.matriz = [[0]];
        this.nodos = [];
        if(dir==true){
            this.dir=true
        }
        else{
            this.dir=false
        }
    }
    addVertex(num){
        this.nodos.push(num);
        if(this.nodos.length>1)
            this.matriz.push([0]);
        for(let x = 0; x<this.nodos.length-1; x++){
            this.matriz[x].push(0);
        }
        for(let x = 0; x< (this.nodos.length-1) ; x++){
            this.matriz[(this.nodos.length-1)].push(0);   
        }
    }
    addEdge(v1,v2){
        for(var x=0;x<this.nodos.length;x++){
            if(v1==this.nodos[x]){
                this.v1=x
            }
            if(v2==this.nodos[x]){
                this.v2=x
            }
        }
        this.matriz[this.v1][this.v2]++;
        if(this.dir==false){
            this.matriz[this.v2][this.v1]++;
        }
    }
    printGraph(){
        for(let x = 0; x < this.nodos.length; x++){
            console.log(this.matriz[x])
        }
    }
    isComplete(){
        for(let a = 0; a < this.nodos.length; a++){
            if(this.matriz[a][a]>0) 
                return false; 
            for(let b = 0; b < this.nodos.length; b++){
                if((this.matriz[a][b]!= 1) && a!=b) 
                    return false; 
            }
        }
        return true;
    }
    isMultigraph(){ 
        for(let a = 0; a < this.nodos.length; a++){
            if(this.matriz[a][a]>0) 
                return true; 
            for(let b = 0; b < this.nodos.length; b++){
                if((this.matriz[a][b]> 1) && (a!=b)) 
                    return true; 
            }
        }
        return false;
    }
    isSubgraph(g){
        if(this.matriz.length == g.matriz.length){
            for(let a = 0; a < this.nodos.length; a++){
                for(let b = 0; b < this.nodos.length; b++){
                    if(this.matriz[a][b] != g.matriz[a][b]) 
                        return false; 
                }
            } 
            return true;
        }
        else 
            return false;
    }
    isDirected(){
        var count=0
        for(var a=0;a<this.nodos.length;a++){
            for(var b=0;b<this.nodos.length;b++){
                if(this.matriz[a][b]==this.matriz[b][a]){
                    count++
                }
            }
        }
        if(count==(this.nodos.length*this.nodos.length)){
            return false
        }
        else{
            return true
        }
    }
}

let grafo=new Graph()
grafo.addVertex(1)
grafo.addVertex(2)
grafo.addVertex(3)
grafo.addEdge(1,2)
grafo.addEdge(1,3)
grafo.addEdge(2,3)
grafo.printGraph()
grafo.isComplete()
