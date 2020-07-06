function setToStorage() {
    document.getElementById("name").value = localStorage.getItem("name");
    document.getElementById("surname").value = localStorage.getItem("surname");
    document.getElementById("age").value = localStorage.getItem("age");
    document.getElementById("education").value = localStorage.getItem("education");
    document.getElementById("profession").value = localStorage.getItem("profession");
    localStorage.clear();
}

function addToStorage() {
    let name = localStorage.setItem("name", document.getElementById("name").value);
    let surname = localStorage.setItem("surname", document.getElementById("surname").value);
    let age = localStorage.setItem("age", document.getElementById("age").value);
    let education = localStorage.setItem("education", document.getElementById("education").value);
    let profession = localStorage.setItem("profession", document.getElementById("profession").value);
}

window.onload = function () {
    window.addEventListener("online", setToStorage);
    var ifConnected = window.navigator.onLine;
if (ifConnected) {
    if (localStorage.getItem('name') !== null) {
        document.getElementById("name").value = localStorage.getItem("name");
        document.getElementById("surname").value = localStorage.getItem("surname");
        document.getElementById("age").value = localStorage.getItem("age");
        document.getElementById("education").value = localStorage.getItem("education");
        document.getElementById("profession").value = localStorage.getItem("profession");
        localStorage.clear();
        }
}
document.getElementById("form_submit").addEventListener("click", addToStorage);
};


