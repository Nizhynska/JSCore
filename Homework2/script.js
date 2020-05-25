/* task1 */
let x = 1;
let y = 2;

let res1 = String(x) + y;
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = Boolean(x) + String(y);
console.log(res2); // "true2"
console.log(typeof res2); // "string

let res3 = Boolean(x) || Boolean(y);
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = parseInt(Boolean(x) + String(y));
console.log(res4); // NaN
console.log(typeof res4); // "number"

/* task2 */
let num = prompt("Enter your number", "");

if(num%2 == 0 && num > 0){
    console.log("твоє число є парним і додатним");
} else if(num%7 == 0) {
    console.log("твоє число є кратним 7");
} else{
    ("твоє число не парне і не кратне 7");
}

/* task3 */
let arr = [3, "orange", true, null];
console.log(arr.length);
let arrItem = prompt("How are you?", "ok");
arr.push(arrItem);
document.write(arr[4]);
arr.shift();
document.write("<div>" + arr + "<\/div>");

/* task4 */
let cities = ["Rome", "Lviv", "Warsaw"];
console.log(cities.join(["*"]));

/* task5 */
isAdult = prompt("Скільки вам років", "18");
if(isAdult >= 18) {
    alert("Ви досягли повнолітнього віку");
} else if(isAdult < 18) {
    alert("Ви ще надто молоді");
}

/* task6 */
let a = Number(prompt("Довжина першої сторони трикутника", ""));
let b = Number(prompt("Довжина другої сторони трикутника", ""));
let c = Number(prompt("Довжина третьої сторони трикутника", ""));

if(a > 0 && b > 0 && c > 0){ 
    let p = 1/2*(a + b + c);
    let area = Math.sqrt(p*(p-a)*(p-b)*(p-c));
    alert(area.toFixed(3));
} else{
    alert("Incorrect data");
}

let sides = [a, b, c];
let maxNum = Math.max(a, b, c);
let res = 0;

for(let i = 0; i < sides.length; i++) {
    if(sides[i] !== maxNum ) {
       res = res + Math.pow(sides[i]);
    }
}
if (Math.pow(maxNum) === res) {
    alert("Трикутник прямокутний");
}

/* task7 */
let hours = (new Date()).getHours();

if(hours > 23 && hours < 5) {
    alert("Доброї ночі");
} else if(hours > 5 && hours < 11) {
    alert("Доброго ранку");
} else if (hours > 17 && hours < 23) {
    alert("Доброї вечора");
}

switch(true) {
    case (hours > 23 && hours <= 5):
        alert("Доброї ночі"); 
        break;
    case (hours > 5 && hours <= 11): 
        alert("Доброго ранку");
        break;
    case (hours > 17 && hours <= 23): 
        alert("Доброї вечора");
        break;
}