//task1
const myWindow = window.open("", "", "width=300, height=300");
function resizeWin() {
  myWindow.resizeTo(500, 500);
  myWindow.focus();
}
function moveWin() {
    myWindow.moveBy(200, 200);

}
function closeWin() {
    myWindow.close();

}
setTimeout(resizeWin, 2000);
setTimeout(moveWin, 4000);
setTimeout(closeWin, 6000);

//task2
function changeCSS() {
    document.getElementById("text").style.color = "orange";
    document.getElementById("text").style.fontSize = "12px";
    document.getElementById("text").style.fontFamily = "Comic Sans MS";
}

document.getElementById("buttonChangeStyle").addEventListener("click", changeCSS);

//task3
document.getElementById("bluColorClick").onclick = function() {
    document.getElementsByTagName("body")[0].style.background = "blue"; 
};
document.getElementById("DoubleClickPink").ondblclick = function() {
    document.getElementsByTagName("body")[0].style.background = "pink"; 
};
document.getElementById("ClickBrown").onmousedown = function() {
    document.getElementsByTagName("body")[0].style.background = "brown"; 
};
document.getElementById("ClickBrown").onmouseup = function() {
    document.getElementsByTagName("body")[0].style.background = "white"; 
};
document.getElementById("linkYellow").onmouseover = function() {
    document.getElementsByTagName("body")[0].style.background = "yellow"; 
};
document.getElementById("linkYellow").onmouseout = function() {
    document.getElementsByTagName("body")[0].style.background = "white"; 
};

//task4
function removeOption(){
   let selectElem = document.getElementById("select");
   let index = selectElem.selectedIndex;
   selectElem.options[index] = null;
}
document.getElementById("removeButton").addEventListener("click", removeOption);

//task5
let liveButton = document.getElementById("liveButton");
liveButton.onclick = function() {
    liveButton.insertAdjacentHTML('afterend', '<p>I was pressed!</p>');
};
liveButton.onmouseover = function() {
    liveButton.insertAdjacentHTML('afterend', '<p>Mouse on me!</p>');
};
liveButton.onmouseout = function() {
    liveButton.insertAdjacentHTML('afterend', '<p>Mouse is not on me!</p>');
};

//task6
let parWidth = document.createElement("p");
let parHeight = document.createElement("p");
window.onresize = function() {
    let width = window.innerWidth;
    parWidth.innerHTML = "<span>width: </span>" + width;
    document.body.append(parWidth);
   
    let height= window.innerHeight;
    parHeight.innerHTML = "<span>height: </span>" + height;
    document.body.append(parHeight);
};

//task7
let country = document.getElementById("country");
let opt1 = document.createElement('option');
            opt1.innerHTML = 'Berlin';
            let cities2 = document.getElementById("cities");
            cities2.append(opt1);

            let opt2 = document.createElement('option');
            opt2.innerHTML = 'Hamburg';
            cities2.append(opt2);

            let opt3 = document.createElement('option');
            opt3.innerHTML = 'Munich';
            cities2.append(opt3);

            let usa1 = document.createElement('option');
            let usa2 = document.createElement('option');
            let usa3 = document.createElement('option');

            let ukr1 = document.createElement('option');
            let ukr2 = document.createElement('option');
            let ukr3 = document.createElement('option');

country.addEventListener("change", function () {
    let cities = document.getElementById("cities");
    if(this.value === "ukr") {
        opt1.remove();
        opt2.remove();
        opt3.remove();

        usa1.remove();
        usa2.remove();
        usa3.remove();
        
        let cities4 = document.getElementById("cities");
        ukr1.innerHTML = 'Kyiv';
        cities4.append(ukr1);


        ukr2.innerHTML = 'Kharkiv';
        cities4.append(ukr2);


        ukr3.innerHTML = 'Odessa';
        cities4.append(ukr3);
        
        

} else if(this.value === "usa") {
        
    opt1.remove();
    opt2.remove();
    opt3.remove();

    ukr1.remove();
    ukr2.remove();
    ukr3.remove();

        usa1.innerHTML = 'California';
        cities.append(usa1);


        usa2.innerHTML = 'Illinois';
        cities.append(usa2);

        
        usa3.innerHTML = 'Texas';
        cities.append(usa3);
    } else if(this.value === "ger") {
        
        ukr1.remove();
        ukr2.remove();
        ukr3.remove();

        usa1.remove();
        usa2.remove();
        usa3.remove();
            opt1.innerHTML = 'Berlin';
            let cities2 = document.getElementById("cities");
            cities2.append(opt1);

            opt2.innerHTML = 'Hamburg';
            cities2.append(opt2);

            opt3.innerHTML = 'Munich';
            cities2.append(opt3);
        
    }
});

