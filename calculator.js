// Get the input element
var input = document.querySelector('input');

// Function to update the input field
function updateinput(value) {
    input.value += value;
}

// Function to clear the input field
function clearinput() {
    input.value = '';
}

// Function to calculate the result
function calculate() {
    try {
        input.value = eval(input.value);
    } catch (error) {
        input.value = 'Error';
    }
}
