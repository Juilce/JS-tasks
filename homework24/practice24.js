/*
//task 1
function getNum(a, b){
    if (a < b){
        console.log("-1");
    } else if (a > b){
        console.log("1");
    } else if (a == b){
        console.log("0");
    } else {
        alert("You entered uncorrect data");
    }
}

let num1 = +prompt("The first number: ");
let num2 = +prompt("The second number: ");
getNum(num1, num2); */

/*
//task 2
function factorial(a){
    let elem = 1;
    for(let i = 1; i <= a; i++){
        elem *= i;
    }
    return elem;
}
let num1 = +prompt("The number: ");
let result = factorial(num1);
alert(result); */

/*
//task 3
function getNumber(a, b, c){
    let whole = [a, b, c];
    console.log(whole.join(""));
}
let num1 = +prompt("The first number: ");
let num2 = +prompt("The second number: ");
let num3 = +prompt("The third number: ");
getNumber(num1, num2, num3);
*/

/*
//task 4
function perimeter(a, b){
    if(a != 0 && b != 0){
        let s = a * b;
        alert("Square = " + s);
    } else if(a != 0 && b == 0){
        let s = a * a;
        alert("Square = " + s);
    } else if(a == 0 && b != 0){
        let s = b * b;
        alert("Square = " + s);
    } else {
        alert("Wrong data were entered");
    }
}
let num1 = +prompt("The first number: ");
let num2 = +prompt("The second number: ");
perimeter(num1, num2); */

/*
//task 5 - враховуються всі дільники від 1, окрім самого себе
function divisor(a){
    let sum = 0;
    for (let i = 1; i < a; i++) { 
        if (a % i == 0) {
            sum += i;
        }
    }
    if(a == sum){
        alert("Досконале число")
    } else {
        alert("Недосконале число")
    }
    console.log("Моє число " + a);
    console.log("Сума всіх дільників " + sum);
}
let num1 = +prompt("The number: ");
divisor(num1); */

/*
 // task 7 
function time(a, b, c){
    if (c == '' && b == '') {
        return a + ':' + '00' + ':00'; 
    } else if (c == '') {
        return a + ':' + b + ':' + '00'; 
    } else if (b == '') {
        return a + ':' + '00' + ':' + c; 
    } else {
       return a + ':' + b + ':' + c;  
    }
}

let hour = +prompt("Enter hours");
let min = +prompt("Enter minutes");
let sec = +prompt("Enter seconds");
let res = time(hour, min, sec);
alert(res);
*/

/*
//task 8
function changeTime(a, b , c){
    a *= (60*60); 
    b *= 60; 
    c += (a + b);
    alert(`Your time is ${c} seconds`);
}
let hour = +prompt("Enter hours");
let min = +prompt("Enter minutes");
let sec = +prompt("Enter seconds");
changeTime(hour, min, sec); */


