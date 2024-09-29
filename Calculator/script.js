let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
    currentInput += number.toString();  // Append the clicked number to the current input
    updateDisplay();  // Update the display with the current number and operator if any
}

function setOperation(op) {
    if (currentInput === '') return;  // Prevent setting operator without a number
    if (previousInput !== '') {
        calculate();  // If there's already a previous input, calculate before setting a new operator
    }
    operator = op;  // Store the operator
    previousInput = currentInput;  // Store the current input as previous
    currentInput = '';  // Clear current input for the next number entry
    updateDisplay();  // Update the display with the previous number and operator
}

function calculate() {
    if (previousInput === '' || currentInput === '') return;  // Prevent calculation if no inputs
    let result;
    const prev = parseFloat(previousInput);  // Convert previous input to number
    const current = parseFloat(currentInput);  // Convert current input to number
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentInput = result.toString();  // Store the result as a string for further calculations
    operator = '';
    previousInput = '';
    updateDisplay();  // Display the result
}

function updateDisplay() {
    let displayValue = previousInput;  // Start with the previous input
    if (operator !== '') {
        displayValue += ' ' + operator + ' ';  // Add the operator if there is one
    }
    displayValue += currentInput;  // Append the current input
    document.getElementById('display').value = displayValue;  // Update the display with the full expression
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    document.getElementById('display').value = '';  // Clear the display
}

