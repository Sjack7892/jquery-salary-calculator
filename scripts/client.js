console.log('JS ready!');

$(document).ready(readyNow);

function readyNow() {
    console.log('jQuery ready!');
    $('#submitBtn').on('click', submit);
    $('#tableData').on('click', '#deleteBtn', deleteRow);
}


let employees = [];

function deleteRow() {
    console.log('Delete button clicked!');
    $(this).parent().parent().remove();
    
}

function submit() {
    // Check for empty input.
    if ($('#fNameInput').val() === '' || $('#lNameInput').val() === '' || $('#IDInput').val() === ''
        || $('#titleInput').val() === '' || $('#salaryInput').val() === '') {
        alert('Please fill in missing info!');
    }

    firstName = $('#fNameInput').val();
    lastName = $('#lNameInput').val()
    ID = $('#IDInput').val();
    title = $('#titleInput').val();
    annualSalary = $('#salaryInput').val();

    // Create object for input to be stored in.
    let employeeObject = {
        firstName: $('#fNameInput').val(),
        lastName: $('#lNameInput').val(),
        ID: $('#IDInput').val(),
        title: $('#titleInput').val(),
        annualSalary: $('#salaryInput').val()
    }

    $('#fNameInput').val('');
    $('#lNameInput').val('');
    $('#IDInput').val('');
    $('#titleInput').val('');
    $('#salaryInput').val('');

    displayEmployee();

    console.log(employeeObject);
    employees.push(employeeObject);
    console.log(employees);

    calculateTotalMonthly();

    // $('#deleteBtn').on('click', deleteRow);
}



function displayEmployee() {
    // for ( let i = 0; i < employees.length; i++) {
    //     $('#tableData').append(`<tr><td>${employees[i].firstName}</td><td>${employees[i].lastName}</td>
    // <td>${employees[i].ID}</td><td>${employees[i].title}</td><td>$${employees[i].annualSalary}</td>
    // <td><button class="btn btn-danger" type="button">Delete</button></td></tr>`);
    // }


    $('#tableData').append
    (`<tr><td>${firstName}</td>
    <td>${lastName}</td>
    <td>${ID}</td>
    <td>${title}</td>
    <td>$${formatNumber(annualSalary)}</td>
    <td id="delete"><button id="deleteBtn" class="btn btn-danger" type="button">Delete</button></td></tr>`);

    
}

function calculateTotalMonthly() {
    let totalMonthly = 0;

    for (let i = 0; i < employees.length; i++) {
        console.log('individual yearly salary is ' + employees[i].annualSalary);
        let individualMonthlySalary = employees[i].annualSalary / 12;
        console.log('individual monthly salary is ' + individualMonthlySalary);
        totalMonthly += individualMonthlySalary;

        console.log('total monthly salary is ' + totalMonthly);
    }
   
    $('#totalMonthlyOutput').empty().append(` $${formatNumber(totalMonthly.toFixed(2))}`);

}

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  



