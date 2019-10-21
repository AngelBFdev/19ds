class Fibonacci {
    constructor(n) {
        this.cos=0
        this.n = n
        this.calFibo(n)
    }
    value() {
        this.cos=0
        return this.calFibo(this.n);
    }
    calFibo(x){
        if(x < 2){
            this.cos++
            return x;
        } else {
            this.cos++
            return (this.calFibo(x-1) + this.calFibo(x-2));
        }
    }
    
    cost() {
        return this.cos
    }

    succession() {
        let sucesion = [];
        for (let i = 1; i <= this.n; i++) {
            sucesion.push(this.calFibo(i));
        }
        return sucesion;
    }

    table() {
        console.log("valor - costo");
        for(let i = 0; i <= this.n; i++){
            this.cos=0
            console.log(this.calFibo(i) + " ---- " + this.cost());
        }
    }
}

let fibo=new Fibonacci(5)
fibo.value()
fibo.cost()
fibo.succession()
fibo.table()