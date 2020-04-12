console.log('JS ready!');

$(document).ready(readyNow);

function readyNow() {
    console.log('jQuery ready!');
    $('#submitBtn').on('click', submit);
    $('#tableData').on('click', '#deleteBtn', deleteRow);
}

let employees = [];

function submit() {
    console.log('Employee info added!');
    // Check for empty input.
    if ($('#fNameInput').val() === '' || $('#lNameInput').val() === '' || $('#IDInput').val() === ''
        || $('#titleInput').val() === '' || $('#salaryInput').val() === '') {
        alert('Please fill in missing info!');
        return;
    }

    firstName = $('#fNameInput').val();
    lastName = $('#lNameInput').val();
    iD = $('#IDInput').val();
    title = $('#titleInput').val();
    annualSalary = $('#salaryInput').val();

    // Create object for input to be stored in.
    let employeeObject = {
        firstName: $('#fNameInput').val(),
        lastName: $('#lNameInput').val(),
        iD: $('#IDInput').val(),
        title: $('#titleInput').val(),
        annualSalary: Number($('#salaryInput').val())
    }

    $('#fNameInput').val('');
    $('#lNameInput').val('');
    $('#IDInput').val('');
    $('#titleInput').val('');
    $('#salaryInput').val('');

    employees.push(employeeObject);
    displayEmployee();
   

    calculateTotalMonthly();

}

function deleteRow() {
    console.log('Employee info deleted!');
    let itemToDelete = (this).closest('tr');
    let index = $(this).parent().parent().index();
    index -= 1;
    employees.splice(index, 1);
    itemToDelete.remove();
    calculateTotalMonthly()
}

function displayEmployee() {
    $('#tableData').append
    (`<tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${iD}</td>
    <td>${title}</td>
    <td>$<span id="annual">${formatNumber(annualSalary)}</span></td>
    <td id="delete"><button id="deleteBtn" type="button">Delete</button></td>
    </tr>`); 
}

function calculateTotalMonthly() {
    console.log(employees);
    totalMonthly = 0;
    for (let i = 0; i < employees.length; i++) {
        totalMonthly += employees[i].annualSalary;
    }
    totalMonthly /= 12;

    if (totalMonthly > 20000) {
        alert('Total monthly value has exceded maximum!');
        $('#totalMonthlyOutput').empty().append(`<span id="red" class="badge badge-secondary">$${formatNumber(totalMonthly.toFixed(2))}</span>`);
        
    } else {
        $('#totalMonthlyOutput').empty().append(`<span id="green" class="badge badge-secondary">$${formatNumber(totalMonthly.toFixed(2))}</span>`);
    }
}

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

  



