//task1

//first way
document.getElementsByTagName("div")[0].innerHTML = "Last";
//second way
document.getElementById("test").innerHTML = "Last";

//task2
let img = document.getElementsByClassName("image")[0]
img.src = "cat.jpg";
alert(img.outerHTML);

//task3
let text = document.querySelectorAll("#text p");
for(let i= 0; i < text.length; i++) {
    let num = i;
    document.querySelectorAll("#text p")[num].innerHTML = "Selector text" + ": " + num + " " + text[i].textContent;
}

//task4

//first way
let first= document.querySelectorAll("#list li")[0].textContent;
let fifth = document.querySelectorAll("#list li")[4].textContent;
let second = document.querySelectorAll("#list li")[1].textContent;
let forth = document.querySelectorAll("#list li")[3].textContent;
let third = document.querySelectorAll("#list li")[2].textContent;

alert(first + "," + fifth + "," + second + "," + forth + "," + third);

//second way
let arrNum = document.getElementById("list").children;
alert(arrNum[0].textContent + "," + arrNum[4].textContent + "," + arrNum[1].textContent + "," + arrNum[3].textContent + "," + arrNum[2].textContent);

//task5
document.getElementsByTagName("h1")[0].style.background = "green";
document.querySelectorAll("#myDiv p")[0].style.fontWeight = "bold";
document.querySelectorAll("#myDiv p")[1].style.color = "red";
document.querySelectorAll("#myDiv p")[2].style.textDecoration = "underline";
document.querySelectorAll("#myDiv p")[3].style.fontStyle = "italic";

document.querySelectorAll("#myList li")[0].style.display = "inline";
document.querySelectorAll("#myList li")[1].style.display = "inline";
document.querySelectorAll("#myList li")[2].style.display = "inline";
document.getElementById("myList").nextElementSibling.style.display = "none";

//task6
document.getElementById("input2").value = prompt("Enter first value", "ok");
document.getElementById("input1").value = prompt("Enter second value", "no");