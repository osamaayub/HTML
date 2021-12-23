function Myfunc() {

    var tbl = document.getElementById('MyTable');
    var row = tbl.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    var cell4 = row.insertCell();
    cell1.innerHTML = document.getElementById('pid').value;
    cell2.innerHTML = document.getElementById('pname').value;
    cell3.innerHTML = document.getElementById('PQuantity').value;
    cell4.innerHTML = document.getElementById('Price').value;
}