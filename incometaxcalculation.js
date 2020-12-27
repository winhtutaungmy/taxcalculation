var rate = [
    [1,2000000,0],
    [2000001,5000000,5],
    [5000001,10000000,10],
    [10000001,20000000,15],
    [20000001,30000000,20],
    [30000001,Infinity,25],
]; //အခွန်အကောက်ဉပဒေပုဒ်မ ၁၉(ဂ)

var income = 20000000; //taxable income
var totaltax = 0;


for (let i = 0; i < rate.length; i++) {


var taxable = rate[i][1]-rate[i][0]+1;
if(income<=rate[i][1]){
if(layerincome>0){
var tax = ((income-(rate[i][0]-1))*rate[i][2])/100;
}
else{
   var  tax=0;
}
}

else if(income>rate[i][1]){

var tax = (taxable*rate[i][2])/100;

}
// console.log(layerincome);
console.log("Layer "+i+" - "+tax);
var totaltax = totaltax + tax;

var layerincome = income - rate[i][1];
}
console.log("Total Income Tax - "+totaltax);
