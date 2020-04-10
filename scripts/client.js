console.log('JS ready!');

$(document).ready(readyNow);

function readyNow() {
    console.log('jQuery ready!');
    $('#submitBtn').on('click', submit);

}

let employees = [];

function submit() {
    console.log('Submit Button Clicked!');
    //create object
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

    console.log(employeeObject);
    employees.push(employeeObject);
    // let fName = $('#fNameInput').val();
    // console.log(fName);
    console.log(employees);
}



