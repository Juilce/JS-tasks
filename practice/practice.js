/*let result = 1;
let i = +prompt("Enter number")
while(i){
result *= i;
i--;
}
alert(result);*/
/*
let num
do{
num = +prompt("Enter result of 2+2*2")
if(num != 6){
alert("Try again")
} else{
    alert("you win")
}
}while(num != 6)*/

/*
function maxNumber(a,b){
    if(a>b){
        return a;
    } else {
        return b;
    }
}

let result = maxNumber(5,9);
alert(result); */

/*
function getPover(a, b){
    return Math.pow(a, b)
}

let num = +prompt('Enter number');
let result = getPover(num, 5);
alert(result); */
/*
function getPover(a, symbol, b){
    if (symbol == '+'){
        return a + b;
    } else if (symbol == '-'){
        return a - b;
    } else if (symbol == '*'){
        return a * b;
    } else if (symbol == '/'){
        return a / b;
    } else {
        alert("You entered the wrong data")
    }
}

let num = +prompt('Enter number');
let sign = prompt('Enter sign');
let num2 = +prompt('Enter number');
let result = getPover(num, sign, num2);
alert(result); */

/* // task 6 -
 function range(a, b){
    let sum = 0;
    /*let min, max;
    if (a > b){
        max = a;
        min = b;
    } else {
        max = b;
        min = a;
    }*/
  /*  for(let i = a; i <= b; i++){
        let elem = i;
    for (let j = 1; j < elem; j++) { 
        if (elem % j == 0) {
            sum += j;
        }
    }
    if(elem == sum){
        console.log("Досконале число - " + elem)
    } 
    }
 }
 let num = +prompt("Enter range of numbers. The first number is");
 let num2 = +prompt("The second number is");
 range(num, num2); */


/*let arr = [rand, 76, 7, 87, 76, 78, 98, 2, 6, 1];
let arr2 = [rand, 76, 36, 45, 45, 44];

function concatArrs (arr, arr2) {

    let resultArr = [];

    let sumArr = arr.concat(arr2);
    
    for (let i = 0; i < sumArr.length; i++) {
        if (resultArr.indexOf(sumArr[i]) == -1) {
            resultArr.push(sumArr[i]);
        }
    }
    console.log(resultArr);
}

concatArrs(arr, arr2);
*/
/*
class PrintNews {
    constructor(title, text, tags, date) {
        this.title = title;
        this.text = text;
        this.tags = tags;
        this.date = date;
    }

    print() {
        let tags = this.tags;
        let newTags = '';

        for (let i = 0; i < tags.length; i++) {
            newTags += <li> ${tags[i]} </li>;
        }

        let now = new Date();
        var date2 = new Date(this.date);
        var daysLag = Math.ceil(Math.abs(date2.getTime() - now.getTime()) / (1000 * 3600 * 24));


        let dateMessage = this.date;
        
        if (daysLag == 1) {
            dateMessage = 'Сегодня';
        } else if (daysLag < 9) {
            dateMessage = ${daysLag - 1} дней назад;
        }

        let text = <h2>${this.title}</h2>;
            text += <p>${this.text}</p>;
            text += <ul>${newTags}</ul>;
            text += <p>${dateMessage}</p>;


        document.write(text);
    }
}*/
// Реализовать класс PrintMaсhine, которой состоит из:
// размера шрифта;
// цвета шрифта;
// семейства шрифта;
// метода print(), который принимает текст и печатает его соответствующим шрифтом
// с помощью document.write().
// Создать объект такого класса и продемонстрировать работу метода.

// class PrintMaсhine {
//     constructor(_size, _color, _family) {
//         this.size = _size;
//         this.color = _color;
//         this.family = _family;
//     }

//     print(str) {
//         let text = `<p style="font-size: 
//         ${this.size}px; 
//         color: ${this.color}; 
//         font-family: ${this.family};"> 
//         ${str} </p>`;
//         document.write(text);
//     }
// }

// let printText = new PrintMaсhine(30, 'red', 'Arial');
// let printText1 = new PrintMaсhine('18px', 'blue', 'Arial');

/*********************----------------------------- */



// Реализовать класс, описывающий новость (заголовок, текст, массив тегов, дата публикации). 
// В классе необходимо реализовать один метод print, который выводит всю информацию через 
// document.write() Если с даты публикации прошло менее дня, то выводится «сегодня», если с 
// даты публикации прошло менее недели, то выводится «N дней назад», в остальных случаях, 
// полная дата в формате «дд.мм.гггг».

/*
class PrintNews {
    constructor(title, text, tags, date) {
        this.title = title;
        this.text = text;
        this.tags = tags;
        this.date = date;
    }

    print() {
        let tags = this.tags;
        let newTags = '';

        for (let i = 0; i < tags.length; i++) {
            newTags += `<li> ${tags[i]} </li>`;
        }

        let now = new Date();
        var date2 = new Date(this.date);
        var daysLag = Math.ceil(Math.abs(date2.getTime() - now.getTime()) / (1000 * 3600 * 24));


        let dateMessage = this.date;
        /*
        if (daysLag == 1) {
            dateMessage = 'Сегодня';
        } else if (daysLag < 9) {
            dateMessage = `${daysLag - 1} дней назад`;
        }*/
        
/*
        let text = `<h2>${this.title}</h2>`;
            text += `<p>${this.text}</p>`;
            text += `<ul>${newTags}</ul>`;
            text += `<p>${dateMessage}</p>`;


        document.write(text);
    }
}

// let news = new PrintNews('заголовок', 'текст', ['спорт', 'победа', 'шаши выиграли'], '2021-01-26');

//     news.print();

// Реализовать класс, описывающий новостную ленту. Класс должен содержать:
// +массив новостей;
// +get-свойство, которое возвращает количество новостей;
// метод для вывода на экран всех новостей;
// метод для добавления новости;
// метод для удаления новости;
// метод для сортировки новостей по дате (от последних новостей до старых);
// метод для поиска новостей по тегу (возвращает массив новостей, в которых указан переданный в метод тег).
// Продемонстрировать работу написанных методов.


class makeNews extends PrintNews {
    constructor (title, text, tags, date) {
        super(title, text, tags, date);
    }
    
    print () {
        super.print();
    }

    make() {
        let news = {
            title: this.title,
            text: this.text,
            tags: this.tags,
            date: this.date,
        };

        return news;
    }

}

let news1 = new makeNews('заголовок', 'текст', ['спорт', 'победа', 'шаши выиграли'], '2021-01-26');
let news2 = new makeNews('заголовок2', 'текст2', ['спорт', 'победа', 'шаши выиграли'], '2021-01-25');
let news3 = new makeNews('заголовок3', 'текст3', ['спорт', 'победа', 'шаши выиграли'], '2021-01-25');


class NewsLetter {
    constructor (news) {
        this.news = news;
    }

    get countNews() {
        return this.news.length;
    }

    getNews() {
        let news = this.news;
        for (let i = 0; i < news.length; i++) {
            news[i].print();
        } 
    }
        pushNews(freshNews){
            let news = this.news;
            news.push(freshNews)
        }

        deleteNews(title) {
             let news = this.news;
             let index = -1;
            
             for(let i = 0; i < news.length; i++){
                 if (news[i].title == title) {
                    index = i;
                 }
             }
             if (index >= 0){
                 news.splice(index, 1);
             }
        }

        sortDate (){
            let news = this.news;
            news.sort();
               function (a, b) {
                   const date1 = new Date(a.date);
                   const date2 = new Date(b.date);
                    return date2 - date1;
                }
            }

            findNews(){
                let news = this.news;
                let findedNews = [];
                for(let i = 0; i < news.length; i++){
                    for(let j = 0; j < news[i].tags.length; j++){
                        if(news[i].tags[j] == tag){
                            findedNews.push(news[i]);
                        }
                    }
                }
                return console.log(findedNews);
            }
        
    
}

let newsLett = new NewsLetter([news1, news2]); 

    console.log(newsLett.countNews);

    newsLett.getNews();

    newsLett.push(news3);

    newsLett.deleteNews(news3.title);
newsLett.sortDate();
newsLett.findNews('победа');*/


// DOM
/*
let p = document.createElement('p');
p.innerHTML = 'Some Text';
document.body.appendChild(p);*/
/*
let as = document.querySelector('div');

as.addEventListener('mouseover', function(e));

let first = e.target.innerText;

if (e.target.nodeName =='A' && !e.target.classList.contains('addedLink')){
    e.target.innerText = e.target.innerText = '(' + e.target.href + ')';
    this.removeEventListener('mouseover')
}*/
var resize = document.getElementById('resize');
var resizable = document.getElementById('resizable');


resizable.addEventListener('mousedown', initResize, false);

function initResize(e) {
   window.addEventListener('mousemove', Resize, false);
   window.addEventListener('mouseup', stopResize, false);
}
function Resize(e) {
   element.style.width = (e.clientX - element.offsetLeft) + 'px';
   element.style.height = (e.clientY - element.offsetTop) + 'px';
}
function stopResize(e) {
    window.removeEventListener('mousemove', Resize, false);
    window.removeEventListener('mouseup', stopResize, false);
}

