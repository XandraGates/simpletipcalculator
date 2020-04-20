let txbPeople = document.querySelector("#people"),
txbBillCost = document.querySelector("#billCost"),
drpService = document.querySelector("#service"),
txbTotal = document.querySelector("#total");


//Event Listener for when button is clicked and extracting the values from textboxes BillCost, People and dropdown Service
document.getElementById("btn").addEventListener("click", function()
{
let billCost = txbBillCost.value;
let people = txbPeople.value;
let service = rateService(getDrpValue(drpService).value);
let calculateTip = getTip(billCost, service, people);
if (calculateTip == "NaN"){
    txbTotal.innerHTML = " Please try again";
} else {
txbTotal.innerHTML =  `\u00A3${calculateTip}`;
}
});




//function for calculating tip
function getTip(billCost, service, people){
let tip = ((billCost * service) / people).toFixed(2);
return tip;
};


// function for getting the value of dropdown
function getDrpValue(drp) {
    return drp.options[drp.selectedIndex];
}
//console.log(getDrpValue(drpService));

//function for calculating tip percentage based on service
function rateService(service){
    let tipPercentage;
    if(service == 4){
        tipPercentage = 0.13;
    } else if (service == 3){
        tipPercentage = 0.10;
    } else if (service == 2){
        tipPercentage = 0.05;
    } else if (service == 1){
        tipPercentage = 0;
    } else {
        tipPercentage = 0.15;
    }
return tipPercentage;
};



/* Test code

function makeTestFunction(f){
    return function(arguments,expectedResult){
        var result = f(...arguments); /// pass the contents of the arguments array into the function we are testing
        var pass = result === expectedResult /// check the result is the same as we where expecting
        console.log(`${pass} | f(${arguments}) => ${result}, expected:${expectedResult}`); // true | f(1,2) => 3, expected:3
    }
}
var test = makeTestFunction(getTip);
test([125,0.13,2],"8.13");
test([1,0.13,1],"0.13");
test([1,0.1,1],"0.10");
test([1,0.5,1],"0.05");
test([1,0,1],"0.00");
test([1,10000,1],"0.15");

var test = makeTestFunction(rateService);
test([1],0);
test([2],0.05);
test([3],0.1);
test([4],0.13);
test([5],0.15);
test([1000],0.15);

*/