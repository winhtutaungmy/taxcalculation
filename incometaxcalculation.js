
        var rate = [
            [0,0,0],
            [1,2000000,0],
            [2000001,5000000,5],
            [5000001,10000000,10],
            [10000001,20000000,15],
            [20000001,30000000,20],
            [30000001,10000000000000000000000,25],
        ]; //အခွန်အကောက်ဉပဒေပုဒ်မ ၁၉(ဂ)

        var income = 2390000000; // အသားတင်ဝင်ငွေ

        var totaltax = 0;    
        for (let i = 1; i < rate.length; i++) {
        var taxable = rate[i][1]- rate[i][0]+1;
       
        if(income>=rate[i][0] & income<=rate[i][1]){
        var tax = ((income-(rate[i][0]-1))*rate[i][2])/100;
        }
        else if(income>rate[i][1]){
        var tax = (taxable*rate[i][2])/100;
        }
        console.log(tax);

        var totaltax = totaltax + tax;
        }

        console.log(totaltax);
