const bill = document.getElementById("bill");
const pax = document.getElementById("pax");
const tipPerson = document.getElementById("tipPerson");
const totalPerson = document.getElementById("totalPerson");
const custom = document.getElementById("custom");

var tipPerPax = 0;
var total = 0;

var a = 0;
var b = 0;

// save the info
var save = 0;
var saveBill = 0;
// take info from inputs and buttons and send it to save variables
function inFunction(e) {
    switch (e.value) {
        case "5":
            save = 5;
            break;
        case "10":
            save = 10;
            break;
        case "15":
            save = 15;
            break;
        case "25":
            save = 25;
            break;
        case "50":
            save = 50;
            break;
        default:
            save = parseInt(custom.value);
            console.log(save);
            break;
    }
    saveBill = bill.value;
}

// calculate tip amount and total amount with keyup event applyed on number of people using saved variables 
pax.addEventListener("keyup", myfunction);

function myfunction() {

    b = parseInt(pax.value);

    tipAmount = Math.floor(saveBill * (save / 100));
    tipPerPax = Math.floor(tipAmount / b);

    total = Math.floor((saveBill / b) + tipPerPax);

    tipPerson.innerHTML = tipPerPax;
    totalPerson.innerHTML = total;
}

// reset all info
function reset() {
    bill.value = "";
    pax.value = "";
    custom.value = "";
    tipPerson.innerHTML = "$0";
    totalPerson.innerHTML = "$0";
}
