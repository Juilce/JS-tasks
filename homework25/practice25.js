/*
//task 1
let Car = {
    production: "Honda",
    model: "Accord",
    year: "2015",
    avgSpeed: 50,

    show: function() {
        console.log (this.production +", " +
            this.model +", " +
            this.year +", " +
            this.avgSpeed);
    },

    time: function(s) {
        let t = s/this.avgSpeed;
        if (t > 4){
            t += Math.trunc(t/4);
        }
        alert(t);
    },
}
Car.show();

let s = +prompt("enter length");
Car.time(s);
*/

/*
//task 2
function number(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
}

function division(one,two) {
    let sum;
    if(one.denominator != two.denominator){
        sum = ((one.numerator * two.denominator) + (two.numerator * one.denominator)) / (one.denominator * two.denominator);
} else {
    sum = (one.numerator + two.numerator) / one.denominator;
}
    let subtract;
    if(one.denominator != two.denominator) {
        subtract = ((one.numerator * two.denominator) - (two.numerator * one.denominator)) / (one.denominator * two.denominator);
    } else {
        subtract = (one.numerator - two.numerator) / one.numerator;
    }
    let multiply = (one.numerator * two.numerator) / (one.denominator * two.denominator);
    let divise = (one.numerator * two.denominator) / (two.numerator * one.denominator);
    console.log(`Сума - ${sum} \n Різниця - ${subtract} \n Добуток - ${multiply} \n Частка - ${divise}`);
}

let numerator1 = +prompt("Enter numerator 1");
let denominator1 = +prompt("Enter denominator 1");
let numerator2 = +prompt("Enter numerator 2");
let denominator2 = +prompt("Enter denominator 2");
let one = new number(numerator1, denominator1);
let two = new number(numerator2, denominator2);

division(one,two); */

//task 3
function timeObj(hour, min, sec){
    this.hour = hour;
    this.min = min;
    this.sec = sec;
}

function timeShow(t){
    console.log(t.hour + ":" + t.min + ":" + t.sec);
}
let h = +prompt("Enter hours");
let m = +prompt("Enter minutes");
let s = +prompt("Enter seconds");
let t = new timeObj(h, m, s)

timeShow(t);

