
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
        let body = document.getElementsByTagName("body")[0];
        let tab = document.createElement("table");
        let tabbody = document.createElement("tbody")
        let head = document.createElement("tr");
        let h1 = document.createElement("th");
        h1.textContent = "Name";
        let h2 = document.createElement("th");
        h2.textContent = "Position";
        let h3 = document.createElement("th");
        h3.textContent = "Experience";
        head.appendChild(h1);
        head.appendChild(h2);
        head.appendChild(h3);
        for(let i = 0; i < this.array.length; i++){
            let row = document.createElement("tr");
            for(let j = 0; j < this.array[i].length; j++){
                let column = document.createElement("td");
                let cellText = document.createTextNode(this.array[i][j]);
                column.appendChild(cellText);
                row.appendChild(column);
            }
            tabbody.append(row);
        }
        tab.append(tabbody);
        body.append(tab);
        tab.setAttribute("border","2");
    }
    
}
let arr = new EmpTable(arrayOfEmployee);
arr.getHtml();