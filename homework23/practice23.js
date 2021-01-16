/*
//task 1
let num = +prompt("Enter range of numbers. The first number is");
let num2 = +prompt("The second number is");
let count = 0;
for(let i = num; i <= num2; i++){
    count += i;
}
console.log(count); */

/*
//task 2
let num = +prompt("The first number is");
let num2 = +prompt("The second number is");
while(num != 0 && num2 != 0){
    if (num > num2) {
        num = num % num2; 
    } else {
        num2 = num2 % num;
    }
}
console.log(num + num2); */

/*
//task 3
let num = +prompt("The number is");
for (let i = 1; i <= num; i++) {
              
    if (num % i == 0) 
    {
        console.log(i);
    }
}*/

/*
//task 4
let num = prompt("The number is");

let count = 0;
for(let i = 0; i < num.length; i++){
    count++;
}
console.log(count); */

/*
// task 5
let arr = [];
let num, neg = 0, 
         dod = 0,
         zero = 0,
         parni = 0,
         neparni = 0;
for(let i = 1; i <= 10; i++){
    num = +prompt(`The ${i} number is`);
    arr.push(num);
    if (num > 0) {
        dod++;
    }
    if (num < 0) {
        neg++;
    }
    if (num == 0) {
        zero++;
    }
    if (num % 2 == 0) {
        parni++;
    }
    if (num % 2 !== 0) {
        neparni++;
    }
}
console.log(arr);
console.log("Додатні числа " + dod);
console.log("Відємні числа " + neg);
console.log("Нулів є " + zero);
console.log("Парні числа " + parni);
console.log("Непарні числа " + neparni); */

/*
// task 6
let contin = new Boolean();
let num, symbol, num2, result;
let answer = 'yes';
do {
    num = +prompt("The first number is");
    symbol = prompt("Enter sign")
    num2 = +prompt("The second number is");
    if (symbol == '+'){
        result = num + num2;
    } else if (symbol == '-'){
        result = num - num2;
    } else if (symbol == '*'){
        result = num * num2;
    } else if (symbol == '/'){
        result = num / num2;
    } else {
        alert("You entered the wrong data")
    }
    console.log(result);
    
}while(confirm("Do you wanna continue?")); 
*/

//task 7

/*
// task 8
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let Day = 0;

while (confirm(`${days[Day]}. Do you want to see the next day?`)) {
  Day = (Day + 1) % 7;
} */

/*
//task 9 
for(let j = 2; j <= 9; j++){
    for (let i = 1; i <= 10; i++) {
        console.log(j + " * " + i + " = " + j*i);
    }
}*/

/*
//task 10
let num = Math.floor(Math.random() * 101);
let quess = Boolean(true);
let option;

do {
    while (quess) {
    option = +prompt("Enter your number 0-100");
    if (num == option){
        alert("you win");
        quess = Boolean(false);
    } else if (num > option){
        alert("Number is bigger");
    } else if (num < option){
        alert("Number is smaller");
    }    
}
} while(confirm(`Do you want to continue?`))
*/
