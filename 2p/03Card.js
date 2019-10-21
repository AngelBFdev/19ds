class Cards {
    constructor(){

    }
    printCard(n) {
        var posicion = [];
        if (n <= 13) {
            posicion.push(0);
        } else if (n <= 26) {
            posicion.push(1);
        } else if (n <= 39) {
            posicion.push(2);
        } else {
            posicion.push(3);
        }

        switch (n % 13) {
            case 0:
                posicion.push(13);
                break;
            case 1:
                posicion.push(1);
                break;
            case 2:
                posicion.push(2);
                break;
            case 3:
                posicion.push(3);
                break;
            case 4:
                posicion.push(4);
                break;
            case 5:
                posicion.push(5);
                break;
            case 6:
                posicion.push(6);
                break;
            case 7:
                posicion.push(7);
                break;
            case 8:
                posicion.push(8);
                break;
            case 9:
                posicion.push(9);
                break;
            case 10:
                posicion.push(10);
                break;
            case 11:
                posicion.push(11);
                break;
            case 12:
                posicion.push(12);
                break;
        }
        return posicion;
    }
    printNumber(k, n) {
        if (n > 0 && n < 14) {
            var card = 0;
            switch (k) {
                case 0:
                    card = n;
                    break;
                case 1:
                    card = n + 13;
                    break;
                case 2:
                    card = n + 26;
                    break;
                case 3:
                    card = n + 39;
                    break;
                default:
                    card = "Error"
                    break;
            }
            return card;
        } else {
            return "Error";
        }

    }
    fourOfaKind(){
        var manos,prob,comb1,comb2,totalm;
        let n=4,r1=4,r2=1
        comb1=fac(n)/(fac(n-r1)*fac(r1))
        comb2=fac(n)/(fac(n-r2)*fac(r2))
        manos=comb1*comb2*13*12
        totalm=fac(52)/(fac(52-5)*fac(5))
        prob=(manos/totalm)*100;
        
        return prob
      
        function fac(inc)
        {
            var fac=1
            for(var j=0;j<=inc;j++)
            {
                fac=j*fac
                if(fac==0)
                    fac=1
            }
            return fac;
        }
   
    }
}

let carta=new Cards
carta.printCard(32)
carta.printNumber(2,6)
carta.fourOfaKind()