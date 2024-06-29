var products = [
    {
        id: 1,
        name: "Pedro Antonio",
        email: "pedro@abutua.com",
        phone: "(15) 9999-9999",
        category: 3,
        shift: "Tarde"
    },
    {
        id: 2,
        name: "Laura Antunes",
        email: "laura@abutua.com",
        phone: "(15) 8888-8888",
        category: 1,
        shift: "Noite"
    },
];

var categories = [
    { id: 1, name: "Java" },
    { id: 2, name: "Java Script" },
    { id: 3, name: "Angular" }
];

//Onload
loadProducts();

//Load all products
function loadProducts() {
    for (let prod of products) {
        addNewRow(prod);
    }
}

// save a student
function save() {
    var prod = {
        id: products.length + 1,
        name: document.getElementById("inputName").value,
        email: document.getElementById("inputEmail").value,
        phone: document.getElementById("inputPhone").value,
        category: document.getElementById("selectCourse").value,
        shift: getSelectedShift()
    };

    addNewRow(prod);
    products.push(prod);

    document.getElementById("formStudent").reset();
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


// Add new row
function addNewRow(prod) {
    var table = document.getElementById("studentsTable");

    var newRow = table.insertRow();

    // Insert ID
    var idCell = newRow.insertCell();
    var idText = document.createTextNode(prod.id);
    idCell.appendChild(idText);

    // Insert Name
    var nameCell = newRow.insertCell();
    var nameText = document.createTextNode(prod.name);
    nameCell.appendChild(nameText);

    // Insert Email
    var emailCell = newRow.insertCell();
    var emailText = document.createTextNode(prod.email);
    emailCell.appendChild(emailText);
    emailCell.classList.add("d-none", "d-md-table-cell");

    // Insert Phone
    var phoneCell = newRow.insertCell();
    var phoneText = document.createTextNode(prod.phone);
    phoneCell.appendChild(phoneText);
    phoneCell.classList.add("d-none", "d-md-table-cell");

    // Insert Course
    var courseCell = newRow.insertCell();
    var courseText = document.createTextNode(categories[prod.category - 1].name);
    courseCell.appendChild(courseText);
    courseCell.classList.add("d-none", "d-md-table-cell")

    // Insert Shift
    var shiftCell = newRow.insertCell();
    var shiftText = document.createTextNode(prod.shift);
    shiftCell.appendChild(shiftText);
    shiftCell.classList.add("d-none", "d-md-table-cell");
}

