let main = document.createElement("main");
document.body.append(main);
main.classList.add("mainClass", "check","item");
let myDiv = document.createElement("div");
main.append(myDiv);
myDiv.id = "myDiv";
let par = document.createElement("p");
myDiv.append(par);
par.innerHTML = "First paragraph";
