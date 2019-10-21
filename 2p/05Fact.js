class Factorial{
    constructor(k){
        this.k = k
        this.c=1
        this.cos=0
        this.suc=new Array()
        this.cosT=new Array()
        this.calFac(this.k)
    }

    value(){
        this.cos=0
        return this.calFac(this.k)
    }

    calFac(x){
        if(x> 1){
            this.cos++
            this.cosT.push(this.cos)
            if(this.c==1){
                this.suc.push(this.c)
            }
            else{
                this.suc.push(this.suc[this.c-2]*this.c)
            }
            this.c++
            
            return (this.calFac(x-1) * x);
            }
        else {
            this.cos++
            this.cosT.push(this.cos)
            this.suc.push(this.suc[this.c-2]*this.c)
            this.c++
            return 1;
        }

    }

    cost(){
        return this.cos;
    }

    succession(){
        return this.suc
    }

    costT(){
        let tabla = new Array(this.suc, this.cosT)

        return tabla;
    }

}

let facto =new Factorial(6)
facto.value()
facto.cost()
facto.succession()
facto.cosT()