function dodajzadanie() {
    const table = document.getElementById("taskTable");
    var inputTask = document.getElementById("taskInput").value;
    var inputDate = document.getElementById("dateInput").value;
    const row = document.createElement("tr");
    const cell1 = document.createElement("td");
    const cell1value = document.createTextNode(inputTask);
    const cell2 = document.createElement("td");
    const cell2value = document.createTextNode(inputDate);
    const button = document.createElement("button");
    button.setAttribute("onclick", "deleteRow(this)");
    const txt = document.createTextNode("\u00D7");
    button.className = "closeButton";
    button.appendChild(txt);
    cell1.appendChild(cell1value);
    cell2.appendChild(cell2value);
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(button);
    table.appendChild(row);
}

function deleteRow(object) {
    var p=object.parentNode;
    p.parentNode.removeChild(p);
}

function getData() {
    var str = localStorage.getItem("localData");
    if (str != null)
    {
        arr = JSON.parse(str);
    }
}



var dateToday = new Date();
var month = dateToday.getMonth() + 1;
var day = dateToday.getDate()
var year = dateToday.getFullYear();
if(month < 10)
    month = '0' + month.toString();
if(day < 10)
    day = '0' + day.toString();
var minDate = year + '-' + month + '-' + day;
document.getElementById("dateInput").setAttribute("min", minDate);
var table = document.getElementsByTagName("td");
// var i;
// for (i = 0; i < table.length; i++) {
//     var row = document.getElementsByTagName("tr");
//     var button = document.createElement("button");
//     var txt = document.createTextNode("\u00D7");
//     button.setAttribute("onclick", "deleteRow(this)");
//     button.className = "closeButton";
//     button.appendChild(txt);
//     table[i].appendChild(button);
// }

var taskTable = document.getElementById("taskTable");
var j;
for (j = 0; j < taskTable.length; j++) {
    console.log(document.getElementsByTagName("td"));
}


