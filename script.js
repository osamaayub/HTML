function Myfunc() {
    var regularExpression = /^osama$/;
    if (regularExpression = document.getElementById('stdName').value.search(regularExpression) === -1) {
        alert("Invalid Expression");
    } else {
        alert("Valid Expression");
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