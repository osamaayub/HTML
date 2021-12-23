function MyFunc() {
    var Fname = /[a-z]||[A-Z]{1-20}/;
    if (Fname = document.getElementById("Fname").value.search(Fname) === -1) {
        alert("Invalid Expression");
    } else {
        alert("Valid Expression");
    }
}

function MyFunc1() {
    var Lname = /[a-z]||[A-Z]{1-20}/;
    if (Lname = document.getElementById('Lname').value.search(Lname) === -1)

    {
        alert("Invalid Expression")
    } else {
        alert("Valid Expression");
    }
}

function Myfunc2() {
    var email = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (email = document.getElementById('email').value.search(email) === -1)

    {
        alert("Invalid Expression");
    } else {
        alert("valid Expression");
    }
}

function Myfunc1() {
    var phone = /[\-+]?|[0-9]+/;
    if (phone = document.getElementById('phone').value.search(phone) === -1) {

        alert("Invalid Expression");
    } else {
        alert("Valid Expression");
    }
}

function MyFunc3() {
    var password = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (password = Document.getElementById('Password').value.search === -1) {
        alert("Invalid Expression");

    } else {
        alert("Valid Expression");
    }
}