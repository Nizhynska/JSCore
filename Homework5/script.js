//task1
function propsCount(currentObject) {
    let res = 0;
    for(let key in currentObject) {
        res = res + 1;
    }
    alert(res);
}
let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development" 
};
propsCount(mentor);

//task2
let rundomObj = {
    name: "noName",
    fruit: "apple",
    num: 10,
    vegetable: "cucumber",
    color: "red"
}

function showProps(obj) {
    let arr1 = [];
    let arr2 = [];
    for(let key in obj) {
        arr1.push(key);
        arr2.push(obj[key]);
    }
    alert(arr1);
    alert(arr2);
}

showProps(rundomObj);

//task3
class Person {
    constructor(name, surname) {
    this.name = name;
    this.surname = surname;
    }
    showFullName() {
        return this.name + " " +  this.surname;
    }
}
let user = new Person("Иван", "vv");
user.showFullName();

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }
    showFullName(midleName) {
        this.midleName = midleName;
        return this.name + " " +  this.surname + " " + this.midleName;
    }
    showCourse() {
        let date = new Date();
        let res = date.getFullYear() - this.year;
        if(res > 6 || res < 1) {
            return "enter correct year";
        } else return res;
    }
}

let stud1 = new Student("Petro", "Petrenko", 2018);
console.log(stud1.showFullName("Petrovych")); 
console.log("Current course: " + stud1.showCourse());

//task4 
class Worker {
    experience = 1.2;
    
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }
    showSalary() {
        let res = this.dayRate * this.workingDays;
        console.log (this.fullName  + " salary: " + res);
    }
    salaryWithExp() {
        return this.dayRate * this.workingDays * this.experience;
    }

    showSalaryWithExperience() {
        console.log(this.fullName  + " salary: " + this.salaryWithExp());
    }
    
    set setExp(experience) {
        this.experience = experience;
    }
    get showExp() {
        return this.experience;
    }

}
let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);                 
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
console.log("----------");

let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);                 
worker2.showSalary();
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
worker2.setExp = 6;
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
console.log("----------");

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);                 
worker3.showSalary();
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();
worker3.setExp = 2;
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();
console.log("----------");

const workers = [worker1, worker2, worker3];
workers.sort(function(a,b) {
    return a.showExp - b.showExp;
});

workers.forEach(worker => {
    console.log(worker.fullName + ":" + worker.salaryWithExp());
});

//task4
class GeometricFigure {
    getArea() {
        return 0;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }  
}

class Triangle extends GeometricFigure {
    constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
    }
    getArea() {
        let res = 0.5 * this.a * this.b;
        return res;
    }
}

class Square extends GeometricFigure {
    constructor(a) {
        super();
        this.a = a;
    }
    getArea() {
        let res = Math.pow(this.a, 2);
        return res;
    }
}

class Circle extends GeometricFigure {
    constructor(r) {
        super();
        this.r = r;
    }
    getArea() {
        let res = Math.PI * Math.pow(this.r, 2);
        return res;
    }
}

function handleFigures(figures) {
    return figures.reduce((sum, figure) => {
        if(figure instanceof GeometricFigure) {
            const area = figure.getArea();
            console.log("Geometric figure:" + figure.toString() + " - area: " + area);
            return sum + area;
        }
    }, 0);
}

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
console.log(handleFigures(figures));

