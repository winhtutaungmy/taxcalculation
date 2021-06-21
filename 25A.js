var rate = [
    [1,100000000,3],
    [100000001,300000000,5],
    [300000001,1000000000,10],
    [1000000001,3000000000,15],
    [3000000000,Infinity,30],
]; //အခွန်အကောက်ဉပဒေပုဒ်မ ၂၅(က)


var income = 4000000000; //taxable income
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
