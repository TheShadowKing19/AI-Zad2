function addRow(inputTask, inputDate) {
    const table = document.getElementById("taskTable");
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

function dodajzadanie() {

    var inputTask = document.getElementById("taskInput").value;
    var inputDate = document.getElementById("dateInput").value;

    var taskObj = {task: inputTask, date: inputDate};
    tasksArray.push(taskObj);
    console.log(tasksArray);

    addRow(inputTask, inputDate);
}

function deleteRow(object) {
    var p=object.parentNode;
    p.parentNode.removeChild(p);
}

function saveData() {
    localStorage.tasksRecord = JSON.stringify(tasksArray);
}

var tasksArray = [];
function init() {
    if (localStorage.tasksRecord){
        tasksArray = JSON.parse(localStorage.tasksRecord);
        for(var i = 0; i < tasksArray.length; i++) {
            var inputTask = tasksArray[i].task;
            var inputDate = tasksArray[i].date;
            addRow(inputTask, inputDate);
        }
    }
}

function szukaj(){
    var input, filter, table, tr, td, i , txtValue;
    input = document.getElementById("searcher");
    filter = input.value.toUpperCase();
    table = document.getElementById("taskTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++){
        td = tr[i].getElementsByTagName("td")[0];
        if (td){
            txtValue = td.textContent || td.innerText;
            if(txtValue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
// localStorage.clear();
function setMinDate(){
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
}
setMinDate();
window.addEventListener("beforeunload", saveData);







