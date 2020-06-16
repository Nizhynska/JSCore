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
    if (str.match(/db+d/gi)) {
        alert(str.match(/db+d/gi));
    } else return("no matches");
}

findLet("cdbBdbsbz" );