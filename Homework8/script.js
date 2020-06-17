//task1
function upperCase(str) {
    if(/^[A-Z]/.test(str)){
        return console.log("String's starts with uppercase character");
    } else if(/^[A-Z]/.test(str) == false) {
        return console.log("String's not starts with uppercase character ");
    }
}   
upperCase('regexp');
upperCase('RegExp');

//task2

function checkEmail(mail) {
    var res = /[^a-z,@,\.]/gi;
    return console.log(res.test(mail));
}
checkEmail("Qmail2@gmail.com");

//task3

function findLet(str) {
    let d= /d(b+)(d+)/gi;
    console.log(d.exec(str));

}
findLet("cdbBdbsbz" );

//task4

function revert(str) {
let result = str.replace(/(\w+) (\w+)/, (match, first, second) => `${second}, ${first}`);

alert(result);
}
revert("Java Script");

//task5
function validateCreditCardNumber(num){
    var regexp = /(?:\d{4}[ -]?){3}(?=\d{4}\b)/gm;
    if(regexp.test(num)) {
        console.log("your data is correct");
    } else console.log("your data is not correct");
}
validateCreditCardNumber("9999-9999-9999-9999");

//task6

function mailValedation(mail) {
    let re = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
    if(re.test(String(mail).toLowerCase())) {
        console.log("Email is correct!");
    } else console.log("Email is not correct!");
}
mailValedation("mail@gmail.com");

//task7
function checkLogin(login) {
    let re = /^[a-zA-Z][a-zA-Z0-9-_\.-?\d+(\.\d{0,})?]{2,10}$/;
    if(re.test(login)){
        (console.log("true"));
    } else {
        (console.log("false"));
        
    }
     console.log(login.replace(/[^0-9\.-]+/g,""));
   


}

checkLogin('ee1.1ret3');


checkLogin('ee1*1ret3');



