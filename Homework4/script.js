//task1
function calcRectangleArea(width, height) {
    if(isNaN(width) || isNaN(height)) {
        throw "Not a number";
    }
    return width * height;
}

try {
    alert(calcRectangleArea(5, 5));
}
catch(e) {
    console.log(e);
}

//task2

function checkAge() {
    const age = prompt("enter your age");
    try{
        if(!age) {
            throw new ReferenceError("The field is empty! Please enter your age");
        }
    } catch(err) {
        alert(err.name + ": " + err.message);
    }
    try{
       if(age && age < 14) {
            throw new ReferenceError("You are too young");
       }
    }  catch(err) {
        alert(err.name + ": " + err.message);
    }

    try{
        if(isNaN(age)) {
             throw new ReferenceError("Is not a number");
        }
     }  catch(err) {
         alert(err.name + ": " + err.message);
     }
     
     if(age > 18) {
        alert("enjoy your movie");
     }
}
checkAge();

//task3

class MonthException {
    name = 'MonthException';
    constructor(message) {
        this.message = message;
    }

    set message(value) {
        const error = new Error(value);
        error.name = this.name;
        throw error
    }
}
function showMonthName(month) {
    switch(month) {
        case 1: console.log("January"); break;
        case 2: console.log("February"); break;
        case 3: console.log("March"); break;
        case 4: console.log("April"); break;
        case 5: console.log("May"); break;
        case 6: console.log("June"); break;
        case 7: console.log("July"); break;
        case 8: console.log("August"); break;
        case 9: console.log("September"); break;
        case 10: console.log("October"); break;
        case 11: console.log("November"); break;
        case 12: console.log("December"); break;
        default: new MonthException("Incorrect month number");
    }
}
showMonthName(12);
showMonthName(13);

//task4 
function showUser(id) {
    try{
      if(id > 0) {
        return  {
              ID: id
        };
        }  
        throw new Error("ID must not be negative: " + id);
    } catch (err) {
          console.log(err.name + ": " + err.message);
      }
  }

function showUsers(ids) {
		let arr = [];
    ids.forEach(function(id) {
    const correctObj = showUser(id);
    if (correctObj !== undefined) {
      	arr.push(correctObj);
     }
    });
    console.log(arr);
} 

showUsers([3,-4, 45]);