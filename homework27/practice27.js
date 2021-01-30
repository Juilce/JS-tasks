/*
//task 1
class Circle {
    constructor (radius){
        this.radius = radius;
    }
    get radius(){
        return this._radius;
    }
    set radius(value){
        this._radius = value;
    }
    get diametr(){
        return this._radius * 2;
    }
    square () {
        alert(`Square = ${3.14 * (this._radius**2)}`)
    }
    length () {
        alert(`Length = ${2 * 3.14 * this._radius}`)
    }
}
let circle = new Circle(10);
alert(circle.radius);
alert(circle.diametr);
circle.square();
circle.length();
*/

let body = document.getElementsByTagName("body")[0];
let tab = document.createElement("table");
let tabbody = document.createElement("tbody");
tab.append(tabbody);
body.append(tab);
tab.className = "content";

class Employee {
 constructor(name, position, experience){
    this.name = name;
    this.position = position;
    this.experience = experience;
 }
}

let arrayOfEmployee = [
    new Employee('Christian Bale', 'Analyst', 'expert'),
    new Employee('Sean Bean', 'Sales manager', 'intermediate'),
    new Employee('Kate Beckinsale', 'Financial adviser', 'intermediate'),
    new Employee('Michael Caine', 'Financial adviser', 'expert'),
    new Employee('Robert Carlyle','Account manager', 'junior'),
]
class EmpTable {
    constructor(array){
        this.array = array;
    }

    getHtml(){
        let arr = this.array;
        let tableContent = document.getElementById('content')
        let head = document.createElement("tr");
        let h1 = document.createElement("th");
        h1.textContent = "Name";
        let h2 = document.createElement("th");
        h2.textContent = "Position";
        let h3 = document.createElement("th");
        h3.textContent = "Experience";
        head.append(h1);
        head.append(h2);
        head.append(h3);
        tableContent.append(head);
        for(let i = 0; i < arr.length; i++){
            let row = document.createElement("tr");
            tableContent.append(row);
            for(let j = 0; j < arr[i].length; j++){
                let column = document.createElement("td");
                column.textContent(arr[i][j]);
                
                row.append(column);

            }
            
        }
        
        tableContent.setAttribute("border","2px");
        
    }
    
}
let arr = new EmpTable(arrayOfEmployee);
arr.getHtml();