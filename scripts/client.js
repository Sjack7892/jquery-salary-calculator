console.log('JS ready!');

$(document).ready(readyNow);

function readyNow() {
    console.log('jQuery ready!');
    $('#submitBtn').on('click', submit);
    $('#tableData').on('click', '#deleteBtn', deleteRow);
}

// Created array for employee objects.
let employees = [];

function submit() {
    console.log('Employee info added!');

    // Checked for empty input.
    if ($('#fNameInput').val() === '' || $('#lNameInput').val() === '' || $('#IDInput').val() === ''
        || $('#titleInput').val() === '' || $('#salaryInput').val() === '') {
        alert('Please fill in missing info!');
        return;
    }

    // Created variables to append to DOM.
    firstName = $('#fNameInput').val();
    lastName = $('#lNameInput').val();
    iD = $('#IDInput').val();
    title = $('#titleInput').val();
    annualSalary = $('#salaryInput').val();

    // Created object for input to be stored in.
    let employeeObject = {
        firstName: $('#fNameInput').val(),
        lastName: $('#lNameInput').val(),
        iD: $('#IDInput').val(),
        title: $('#titleInput').val(),
        annualSalary: Number($('#salaryInput').val())
    }

    // Emptied input values.
    $('#fNameInput').val('');
    $('#lNameInput').val('');
    $('#IDInput').val('');
    $('#titleInput').val('');
    $('#salaryInput').val('');

    // Pushed object to employees array.
    employees.push(employeeObject);

    // Appended variables and table data to DOM.
    $('#tableData').append
    (`<tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${iD}</td>
    <td>${title}</td>
    <td>$<span id="annual">${formatNumber(annualSalary)}</span></td>
    <td id="delete"><button id="deleteBtn" type="button">Delete</button></td>
    </tr>`);
    
    calculateTotalMonthly();
}

function deleteRow() {
    console.log('Employee info deleted!');

    // Declared variable of data to delete from DOM.
    let itemToDelete = (this).closest('tr');

    // Traversed the DOM to find the index of corresponding html.  
    let index = $(this).parent().parent().index();
    index -= 1;

    // Removed corresponding index from emplyees array.
    employees.splice(index, 1);

    // Deleted variable data from DOM.
    itemToDelete.remove();

    calculateTotalMonthly()
}

function calculateTotalMonthly() {
    console.log(employees);
    
    // Reset totalMonthly variable.
    totalMonthly = 0;

    // Looped though array to add up annualSalary of each employee.
    for (let i = 0; i < employees.length; i++) {
        totalMonthly += employees[i].annualSalary;
    }
    totalMonthly /= 12;

    // If else to determine result for a totalMonthly over $20,000.
    if (totalMonthly > 20000) {
        alert('Total monthly value has exceded maximum!');
        $('#totalMonthlyOutput').empty().append(`<span id="red" class="badge badge-secondary">$${formatNumber(totalMonthly.toFixed(2))}</span>`);
    } else {
        $('#totalMonthlyOutput').empty().append(`<span id="green" class="badge badge-secondary">$${formatNumber(totalMonthly.toFixed(2))}</span>`);
    }
}

// Function to add commas for currency values.
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

  



