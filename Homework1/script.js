console.log("nizhynska");

let random;
let number;
random = "jj";
number = 10;

document.write(random);
document.write(number);
random = number;
document.write(random);
document.write(number);

let types = {
    String: "word",
    Number: 5,
    Boolean: false,
    Undefined: undefined,
    Null: null
};

let isAdult = confirm("Are you 18?");
console.log(isAdult);

let name;
let surname;
let group;
let birth;

name = "Polina";
surname = "Nizhynska";
group = "510CareJS";
birth = 1995;

let isSingle = true;

console.log(typeof birth, typeof isSingle, typeof name, typeof surname);

let empty = null;
let unknown = undefined;
console.log(typeof empty, typeof unknown);

let login = prompt("Enter your login", "");
let email = prompt("Enter your email","");
let pass = prompt("Enter your password","");


alert(`Dear ${login}, your email is ${email}, your password is ${pass}`);

let secInMin = 60*60;
document.write("<div>" + secInMin + "<\/div>");

let secInDay = 60*60*24;
document.write("<div>" + secInDay + "<\/div>");

let secInMonth = 60*60*24*30;
document.write("<div>" + secInMonth + "<\/div>");
