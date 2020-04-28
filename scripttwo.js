let print = null;
let totalhours;
let overtimehours;
let timeandhalf;
let overtimewage;


function myFunction() {
    let wage = document.getElementById("wage").value;
    let hours = document.getElementById("hours").value;

    if (hours > 40) {
        for (let i = 40; i <= hours; i++) {
            totalhours = i;
        }
        overtimehours = totalhours - 40;
        timeandhalf = wage * 1.5;
        overtimewage = overtimehours * timeandhalf;
        print = (wage * 40) + overtimewage;
        document.getElementById("printout").innerHTML = print;
    }
    else {
        print = wage * hours;
        document.getElementById("printout").innerHTML = print;
    }

}
