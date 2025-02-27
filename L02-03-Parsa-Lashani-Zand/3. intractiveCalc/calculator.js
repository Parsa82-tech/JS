const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let firstOperand = null;
let operator = null;
let shouldResetDisplay = false;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const action = button.getAttribute('data-action');
        const buttonContent = button.textContent;

        if (!action) {
            appendNumber(buttonContent);
        } else {
            handleAction(action);
        }
    });
});

function appendNumber(number) {
    if (display.textContent === '0' || shouldResetDisplay) {
        display.textContent = number;
        shouldResetDisplay = false;
    } else {
        display.textContent += number;
    }
}

function handleAction(action) {
    switch (action) {
        case 'add':
            setOperation('+');
            break;
        case 'subtract':
            setOperation('−');
            break;
        case 'multiply':
            setOperation('×');
            break;
        case 'divide':
            setOperation('÷');
            break;
        case 'equals':
            calculate();
            break;
        case 'clear':
            clearCalculator();
            break;
        case 'backspace':
            deleteLastDigit();
            break;
        case 'negate':
            negateNumber();
            break;
        default:
            break;
    }
}

function setOperation(op) {
    if (operator !== null) calculate();
    firstOperand = parseFloat(display.textContent);
    operator = op;
    shouldResetDisplay = true;
}

function calculate() {
    if (operator === null || shouldResetDisplay) return;
    const secondOperand = parseFloat(display.textContent);
    let result;
    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '−':
            result = firstOperand - secondOperand;
            break;
        case '×':
            result = firstOperand * secondOperand;
            break;
        case '÷':
            if (secondOperand === 0) {
                alert('Dividding by Zero is not possible!!!');
                clearCalculator();
                return;
            }
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }
    displayResult(result);
    operator = null;
}

function displayResult(result) {
    let resultStr = result.toString();
    if (resultStr.length > 13) {
        if (resultStr.includes('.')) {
            const integerPartLength = resultStr.split('.')[0].length;
            const decimalPlaces = 13 - integerPartLength - 1;
            if (decimalPlaces > 0) {
                resultStr = result.toFixed(decimalPlaces);
            } 
            else {
                resultStr = result.toExponential(6);
            }
        } 
        else {
            resultStr = result.toExponential(6);
        }
    }
    display.textContent = resultStr;
}


function clearCalculator() {
    display.textContent = '0';
    firstOperand = null;
    operator = null;
    shouldResetDisplay = false;
}

function deleteLastDigit() {
    if (display.textContent.length > 1) {
        display.textContent = display.textContent.slice(0, -1);
    } else {
        display.textContent = '0';
    }
}

function negateNumber() {
    display.textContent = (-parseFloat(display.textContent)).toString();
}
