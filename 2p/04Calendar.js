class Calendar{
    constructor(){
    
    }
    printCalendar(m,y){
        var primer,count,calen,inicio=false,bis
        primer=this.firstDayYear(y)
        bis=this.isLeapYear(y)
        switch(m){
            case 1:
                break;
            case 2:
                primer+=31
                break;
            case 3:
                primer+=59
                break;
            case 4:
                primer+=90
                break;
            case 5:
                primer+=120
                break;
            case 6:
                primer+=151
                break;
            case 7:
                primer+=181
                break;
            case 8:
                primer+=212
                break;
            case 9:
                primer+=243
                break;
            case 10:
                primer+=273
                break;
            case 11:
                primer+=304
                break;
            case 12:
                primer+=334
                break; 
        }
        if(m>2&&bis==true){
            primer++
        }
        primer=primer%7

        calen= new Array(5)
        count=1
        for(var a=0;a<5;a++){
            calen[a]=new Array(7)
            for(var b=0;b<7;b++){
                if(b==primer&&inicio==false&&count==1){
                    calen[a][b]=count
                    inicio=true
                }
                else if(inicio==true){
                    count++
                    calen[a][b]=count
                }

                if(count==32&&(m==1||m==3||m==5||m==7||m==8||m==10||m==12)){
                    inicio=false
                }
                else if(count==31&&(m==4||m==6||m==9||m==11)){
                    inicio=false
                }  
                else if(count==29&&bis==false&&m==2){
                    inicio=false
                }
                else if(count==30&&m==2){
                    inicio=false
                }

                if(inicio==false){
                    calen[a][b]=0
                }
            }
        }
        return calen

    }
    isLeapYear(y){
        if(y%4==0&&y%100!=0||y%400==0){
            return true  
        }
        else{
            return false
        }
    }
    todayPlus(d,n){
        switch (d) {
            case 1:
                n += 1;
                break;
            case 2:
                n += 2;
                break;
            case 3:
                n += 3;
                break;
            case 4:
                n += 4;
                break;
            case 5:
                n += 5;
                break;
            case 6:
                n += 6;
                break;
            case 0:
                n = n;
                break;
            default:
                "Error";
                break;
        }
        
        return n%7;
    }
    firstDayYear(y){
        var x=0;
        x=(y+Math.floor((y-1)/4)-Math.floor((y-1)/100)+Math.floor((y-1)/400)) % 7;
        return x;
    }
}

let cal=new Calendar
cal.firstDayYear(2000)
cal.isLeapYear(2000)
cal.printCalendar(3,2001)
cal.todayPlus(0,8)