console.log('JS ready!');

$(document).ready(readyNow);

function readyNow() {
    console.log('jQuery ready!');
    $('#submitBtn').on('click', submit);
}

let employees = [];

function submit() {
    console.log('Submit Button Clicked!');
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

    let employeeObject = {
        firstName: firstName,
        lastName: lastName,
        ID: ID,
        title: title,
        annualSalary: annualSalary
    }

displayEmployee();

    $('#fNameInput').val('');
    $('#lNameInput').val('');
    $('#IDInput').val('');
    $('#titleInput').val('');
    $('#salaryInput').val('');

    console.log(employeeObject);
    employees.push(employeeObject);
    console.log(employees);
}

function displayEmployee() {
    $('#tableData').append(`<tr><td>${firstName}</td><td>${lastName}</td>
    <td>${ID}</td><td>${title}</td><td>$${annualSalary}</td>
    <td><button class="btn btn-danger" type="button">Delete</button></td></tr>`);

let totalMonthly = annualSalary / 12;
console.log(annualSalary);

    $('#totalMonthly').append(` $${totalMonthly}`);
}



