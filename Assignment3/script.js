//Title constructor function that creates a Title object
function Title(t1) {
  this.mytitle = t1;
}

Title.prototype.getName = function () {
  return this.mytitle;
};

var socialMedia = {
  facebook: "http://facebook.com",
  twitter: "http://twitter.com",
  flickr: "http://flickr.com",
  youtube: "http://youtube.com",
};

var t = new Title("CONNECT WITH ME!");
var count = 3;

var hideRow = document.getElementsByClassName('dropDownTextArea');
for (let i = 0; i < hideRow.length; i++) {
  hideRow[i].style.display = 'none';
}

document.getElementById('button').disabled = 'disabled';


function addNewRow() {
  var table = document.getElementById("myTable");
  var tbodyRef = document.getElementsByTagName("tbody")[0];
  console.log(tbodyRef);
  var lastStudent =table.lastElementChild.lastElementChild?.previousElementSibling?.firstElementChild?.nextElementSibling?.innerHTML || "Student 4";
  var latestIndex = lastStudent.split(" ")[1];
  var tdNode = document.createElement("tr");
  var trCheckBoxCell = document.createElement("td");
  trCheckBoxCell.innerHTML ='<input id="checkbox" type = "checkbox" onclick="onCheckBoxClick(this)"/> <br /><br /><img src="down.png" width="25px" onclick="showDropDown(this)"/>';
  var trStudentCell = document.createElement("td");
  trStudentCell.innerHTML = "Student " + (parseInt(latestIndex) + 1);
  var trTeacherCell = document.createElement("td");
  trTeacherCell.innerHTML = "Teacher " + (parseInt(latestIndex) + 1);
  var trAwardStatusCell = document.createElement("td");
  trAwardStatusCell.innerHTML = "Approved";
  var trSemesterCell = document.createElement("td");
  trSemesterCell.innerHTML = "Fall";
  var trTypeCell = document.createElement("td");
  trTypeCell.innerHTML = "TA";
  var trBudgetCell = document.createElement("td");
  trBudgetCell.innerHTML =" " +(parseInt(latestIndex) + 1) +(parseInt(latestIndex) + 2) +(parseInt(latestIndex) + 3) +(parseInt(latestIndex) + 4) +(parseInt(latestIndex) + 5);
  var trPercentageCell = document.createElement("td");
  trPercentageCell.innerHTML = "100%";
  var trRow =  document.createElement("tr");
  trRow.innerHTML = `<td colspan="8">Advisor:<br /><br />Award Details<br />Summer 1-2014(TA)<br />Budget Number: <br />Tuition Number: <br />Comments:<br /><br /><br />Award Status:<br /><br /><br /></td>`


  tdNode.appendChild(trCheckBoxCell);
  tdNode.appendChild(trStudentCell);
  tdNode.appendChild(trTeacherCell);
  tdNode.appendChild(trAwardStatusCell);

  tdNode.appendChild(trSemesterCell);
  tdNode.appendChild(trTypeCell);
  tdNode.appendChild(trBudgetCell);
  tdNode.appendChild(trPercentageCell);

  tbodyRef.appendChild(tdNode);
  tbodyRef.appendChild(trRow)

  var d = document.getElementsByClassName('dropDownTextArea');
  for (var i = 0; i < d.length; i++) {
    d[i].style.display = 'none';
    // d[i].onClick = function () {
    //   var tr = this.parentNode.parentNode;
    //   let ti = tr.rowIndex;
    //   document.getElementById("myTable").deleteRow(ti);
    //   //document.getElementById("mainTable").deleteRow(ti);
    // }
  }

}

function onCheckBoxClick(checkbox) {
  var rowSelect = checkbox.parentElement.parentElement;
  var colorChange = document.getElementById('button');

  if (checkbox.checked == true) {
    rowSelect.style.backgroundColor = "yellow";
    var deleteButton = document.createElement("td");
    deleteButton.setAttribute("id", "deleteTd");
    deleteButton.innerHTML ='<button id="delete" type ="button" onclick="deleteFn(this)">Delete</button>';

    var editButton = document.createElement("td");
    editButton.setAttribute("id", "editTd");
    editButton.innerHTML ='<button id="edit" type = "button" onclick="editRow(this)">Edit</button>';
    rowSelect.appendChild(deleteButton);
    rowSelect.appendChild(editButton);
    colorChange.style.backgroundColor = "orange";
    colorChange.disabled = "";
    
    
  } else {
    rowSelect.style.backgroundColor = "#fff";
    colorChange.style.backgroundColor = "grey";
    colorChange.disabled = "disabled";
    rowSelect.deleteCell(8);
    rowSelect.deleteCell(8);
  }
}




function showDropDown(row) {
  var tr = row.parentNode.parentNode;
  console.log(tr);
  let ti = tr.rowIndex;
  if (document.getElementsByTagName("tr")[ti + 1].style.display == "none") {
    document.getElementsByTagName("tr")[ti + 1].style.display = "";
  } else {
    document.getElementsByTagName("tr")[ti + 1].style.display = "none";
  }
}

function deleteFn(row) {
  var tr = row.parentNode.parentNode;
  let ti = tr.rowIndex;
  document.getElementById("myTable").deleteRow(ti);
  alert('Data deleted successfully')
}
