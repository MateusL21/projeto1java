$("#inputPhone").mask("(99)9 9999-9999");

//data
var products = [];
var categories = [];

loadCategories();
loadStudents();
    
function loadCategories(){
  $.ajax({
    url:"http://localhost:8080/courses",
    type:"GET",
    async: false,
    success: (response) =>{
    categories = response
    for(var cat of categories){
      document.getElementById("selectCourse").innerHTML += `<option value=${cat.id}>${cat.name}</option>`;
    }
  }});

}

      function loadStudents() {

        $.getJSON("http://localhost:8080/students", (response) => {
          students =response

          for (let stud of students) {
              addNewRow(stud);
          }
        });
          
      }

function save() {
    var stud = {
        id: students.length + 1,
        name: document.getElementById("inputName").value,
        email: document.getElementById("inputEmail").value,
        phone: document.getElementById("inputPhone").value,
        idCurso: document.getElementById("selectCourse").value,
        period: getSelectedShift()
    };

    $.ajax({
      url:"http://localhost:8080/students",
      type:"POST",
      contentType: "application/json",
      data: JSON.stringify(stud),
      success: (savedStudent) =>{
        addNewRow(savedStudent);
        student.push(savedStudent);
        document.getElementById("formStudent").reset();
    }});
}

function getSelectedShift() {
    var radios = document.getElementsByName("shiftRadios");

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }

    return "";
}

function addNewRow(stud) {
    var table = document.getElementById("studentsTable");

    var newRow = table.insertRow();

    // Insert ID
    var idCell = newRow.insertCell();
    var idText = document.createTextNode(stud.id);
    idCell.appendChild(idText);

    // Insert Name
    var nameCell = newRow.insertCell();
    var nameText = document.createTextNode(stud.name);
    nameCell.appendChild(nameText);

    // Insert Email
    var emailCell = newRow.insertCell();
    var emailText = document.createTextNode(stud.email);
    emailCell.appendChild(emailText);
    emailCell.classList.add("d-none", "d-md-table-cell");

    // Insert Phone
    var phoneCell = newRow.insertCell();
    var phoneText = document.createTextNode(stud.phone);
    phoneCell.appendChild(phoneText);
    phoneCell.classList.add("d-none", "d-md-table-cell");

    // Insert Course
    var courseCell = newRow.insertCell();
    var courseText = document.createTextNode(categories[stud.idCurso - 1].name);
    courseCell.appendChild(courseText);
    courseCell.classList.add("d-none", "d-md-table-cell")

    // Insert Shift
    var shiftCell = newRow.insertCell();
    var shiftText = document.createTextNode(stud.period);
    shiftCell.appendChild(shiftText);
    shiftCell.classList.add("d-none", "d-md-table-cell");
}