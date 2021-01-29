/*//task 1
let list = [{name: "apples", amount: 1, buy: true}, 
            {name: "bananas", amount: 3, buy: false},
            {name: "cheese", amount: 0.5, buy: true},
            {name: "potatoes", amount: 0.8, buy: false},
            {name: "milk", amount: 1, buy: true}];


function sortList(arr){
    arr.sort( function (a, b){
        return a.buy - b.buy;
    })
    console.log(arr)
}
sortList(list);

function pushProd(arr, item){
    let index = arr.findIndex(function (x) {
        x.name === item.name
    });
    
    if(index == -1){
        arr.push({
            name:item.name,
            amount:item.amount,
            buy: false
        });
    } else {
        arr[index].amount = arr[index].amount + item.amount;
    }

    console.log(arr);
}
pushProd(list, {name:'bananas', amount:2})

function buyProd(arr, item){
    let index = arr.findIndex(x => x.name === item);
    if(index >= 0 && arr[index].buy != true){
        arr[index].buy = true;
    }

    
    console.log(arr[index]);
}
buyProd(list, 'bananas')*/


//task4
let auditorium = [
                {name: "Штучного інтелекту", amount: 15, faculty: "IT"},
                {name: "Вищої математики", amount: 25, faculty: "ФСБ"},
                {name: "Психології", amount: 30, faculty: "Гуманітарний"},
                {name: "Обліку", amount: 17, faculty: "ОП"},
                {name: "Гімнастики", amount: 20, faculty: "Фіз.вих"}
                ]

function nameAud(arr) {
    for(let i=0; i < arr.length; i++){
        console.log(arr[i].name);
    }
}

nameAud(auditorium);

   function certainAud(arr, a){
    let index = arr.findIndex(x => x.faculty === a);
    if(index >= 0){
    console.log( `Аудиторія "${arr[index].name}" належить ${arr[index].faculty}`);
    }
   }
certainAud(auditorium, "ФСБ");

function selectAud(arr) {
    let studentGroup = {
        title: "KB-19-1",
        number: 29,
        facult: "Гуманітарний",
    }
    let index = arr.findIndex(x => x.faculty === studentGroup.facult);
    if(index >= 0 && studentGroup.number <= arr[index].amount){
    console.log( `Аудиторія "${arr[index].name}" факультету ${arr[index].faculty} підходить для групи ${studentGroup.title}`);
    } else {
        console.log(`Для групи ${studentGroup.title} немає аудиторії на факультеті ${arr[index].faculty}`)
    }
}
selectAud(auditorium);

function sortAmount(a, b){
    return a.amount - b.amount;
}
console.log("Відсортований список по кількості місць", auditorium.sort(sortAmount));

console.log("Відсортований список по алфавіту аудиторій", auditorium.sort(function(a, b){
    if(a.name < b.name) {
         return -1;
        }
    if(a.name > b.name) { 
        return 1; 
    }
    return 0;
}))

/*
//task3
let arr = [{
        styleName: 'color',
        styleWalue: 'red'
    },
    {
        styleName: 'font-size',
        styleWalue: '15px'
    },
    {
        styleName: 'background',
        styleWalue: '#f5f5f5'
    }
];


function buildNode (styles, text = 'default') {

    let stylesList = '';

    for (let i = 0; i < styles.length; i++) {
        stylesList = stylesList + styles[i].styleName + ':' + styles[i].styleWalue + ';'
    }

    document.write(<p style="${stylesList}"> ${text} </p> );
    
}

buildNode(arr, 'siudvojijjids sfidrh');*/

/*
//task2
let list = [{
            name: "apples", 
            amount: 1, 
            price: 25
            }, 
            {
            name: "bananas", 
            amount: 3, 
            price: 50
            },
            {
            name: "cheese", 
            amount: 0.5, 
            price: 119
            },
            {
            name: "potatoes", 
            amount: 0.8, 
            price: 17
            },
            {
            name: "milk", 
            amount: 1, 
            price: 30
            }];
function printCheck (arr) {
    console.log('Name', 'Quantity', 'Price')
            
    for (let i = 0; i < arr.length; i++) {
        console.log(i+1, arr[i].name, '|', arr[i].amount, '|', arr[i].price + 'uah')
    }
                     
}
    
function sumCheck (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
    sum += arr[i].price * arr[i].amount;
    }         
    console.log("Сума: " + sum)           
}

function prinMax (arr) {
    let max = 0;
    let title = '';
    for (let i = 0; i < arr.length; i++) {
    if (max < (arr[i].price * arr[i].amount)){
        max = arr[i].price * arr[i].amount;
        title = arr[i].name;
    };
    }         
    console.log(`Найдорожча покупка: ${title + " = " + max}`)           
}

function printAvg (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
    sum += arr[i].price * arr[i].amount;
    }         
    let avg = sum / arr.length;
    console.log("Average price: " + avg)           
}

printCheck(list);
sumCheck(list);
prinMax(list);
printAvg(list); */


