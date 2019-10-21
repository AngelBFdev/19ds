class Vector{
    constructor(a){
        this.array = a;
    }
    sum(b){
        let sum=[]
        if(b.length != this.array.length)
        {
            return "No tienen la misma longitud"
        }
        else
        {
            for(let i = 0; i < b.length; i++)
            {
                sum[i] = this.array[i] + b[i];
            }
            return sum;
        }
    }
    subt(b){
        let res = []
        if(b.length != this.array.length)
        {
            return "No tienen la misma longitud"
        }
        else
        {
            for(let i = 0; i < b.length; i++)
            {
                res[i] = this.array[i] - b[i];
            }
            return res;
        }
    }
    mul(b){
        let mult = []
        if(b.length != this.array.length)
        {
            return "No tienen la misma longitud"
        }
        else
       { 
            for(let i = 0; i < b.length; i++)
            {
                mult[i] = this.array[i] * b[i];
            }
            return mult;
        }
    }
    getArray(){
        return this.array;
    }
} 

let vec=new Vector([2,3,4,5,6])
vec.getArray()
vec.sum([6,5,4,3,2])
vec.subt([1,2,3,4,5])
vec.mul([2,3,4,5,6])