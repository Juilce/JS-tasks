/* 
// task 1
let age = +prompt("Your age?")
let greeting;
if (age <= 12) {
    greeting = "You are a child";
  } else if (age > 12 && age < 19) {
    greeting = "You are a teenager";
  } else if (age >= 19 && age < 60) {
    greeting = "You are an adult";
  } else {
    greeting = "You are a pensioner";
  }
alert(greeting) */
 
/*
// task 2
let num = +prompt("Enter number 0-9?");
let symbol;
switch (num) {
  case 0:
    symbol = ")";
    break;
  case 1:
    symbol = "!";
    break;
  case 2:
    symbol = "@";
    break;
  case 3:
    symbol = "#";
    break;
  case 4:
    symbol = "$";
    break;
  case 5:
    symbol = "%";
    break;
  case 6:
    symbol = "^";
    break;
  case 7:
    symbol = "&";
    break;
  case 8:
    symbol = "*";
    break;
  case 9:
    symbol = "(";
 default:
    alert("You entered wrong number");
}
console.log("The symbol is " + symbol) */

/*
// task 3 
let num = prompt("Enter number");
let a = num[0];
let b = num[1];
let c = num[2];
if(a == b || b == c || a ==c) {
    alert("Number contains the same digits")
} else {
    alert("Number contains the different digits")
} */

/*
//task 4
let year = +prompt("Enter the year");
if(year % 100 != 0 &&  year % 400 == 0 ){
    alert("Leap year")
} else if (year % 100 != 0 && year % 4 == 0 ) {
    alert("Leap year")
} else {
    alert("Not a leap year")
} */

/*
// task 5
let num = prompt("Enter number");
if (num == num.split('').reverse().join('')) {
    alert(num + ' is palindrome.');
}
else {
    alert(num + ' is not palindrome.');
} */

/*
  // task 6
  let usd = +prompt("Enter the amount of USD");
  let money;
  let curr = +prompt("Enter the currency 1 - 'EUR';2 - 'UAN'; 3 - 'AZN';");
  switch (curr){
      case 1:
        money = usd * 0.82;
        break;
    case 2:
        money = usd * 28;
        break;
    case 3:
        money = usd * 1.7;
        break;
    default:
        alert("Entered the wrong data")
  }
console.log("Amount of money is " + money) */

/*
//task 7
let num = +prompt("Enter sum");
let end;
if(num < 300){
    end = num - num * 0.03;
} else if (num <= 300 || num > 500){
    end = num - num * 0.05;
} else {
    end = num - num * 0.07;
}
console.log("You should pay " + end)
*/

/*
//task 8
let num = +prompt("Enter length of circle");
let num2 = +prompt("Enter perimeter of square");
let d = num / 3.14;
let a = num2 / 4;
if (d <= a){
    alert("Коло поміститься в квадрат")
} else {
    alert("Коло не поміститься в квадрат")
} */

/* 
//task 9 доробити
let q1 = prompt("Образ Вічного революціонера оспівано в поезії: 1- Тараса Шевченка, 2 - Лесі Українки, 3 - Івана Франка");
let q2 = prompt("В амфібій, на відміну від рептилій: 1 - тіло вкрите шкірою, 2- розвиток відбувається з перетворенням, 3 - протоки видільної системи відкриваються в клоаку");
let q3 = prompt("У носовій порожнині людини повітря: 1 - насичується вуглекислим газом, 2 - насичується киснем, 3- знезаражується");
let isRight; 
 switch(q1){
   case 1:
   isRight = false;
   break;
   case 2:
   isRight = false;
   break;
   case 3:
   isRight = true;
   break;
 }
 switch(q2){
  case 1:
  isRight = false;
  break;
  case 2:
  isRight = true;
  break;
  case 3:
  isRight = false;
  break;
}
switch(q3){
  case 1:
  isRight = false;
  break;
  case 2:
  isRight = false;
  break;
  case 3:
  isRight = true;
  break;
}
if (q1 == true){
  alert("2 points")
}  */

// task 10
let data = prompt("enter the data")
let part