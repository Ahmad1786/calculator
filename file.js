let firstNumber;
let operator;
let result;
let myString = '';

let displayedString = document.querySelector('#content');

const populateDisplay = function(e) {
    let clickedButtonText = myString + '' + e.target.textContent;
    myString = clickedButtonText;
    displayedString.textContent = clickedButtonText;
}
const digitButtons = document.querySelectorAll('.digit');
digitButtons.forEach(
    b => b.addEventListener('click', populateDisplay));

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(
    b => b.addEventListener('click', e => operatingTime(e.target.id))
);

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => clearDisplay())


 function operatingTime(operation) {
    operator = operation; 

    if (firstNumber === undefined) {
        firstNumber = Number(myString);
        result = firstNumber;
    }
    else {
        firstNumber = result;
    } 
    
    myString = '';
}


function clearDisplay() {
    displayedString.textContent = '';
    myString  = '';
    firstNumber = undefined;
    result = undefined;
}

const equalButton = document.querySelector('.equal');
function showResult() {
    
    displayedString.textContent = operate(result, Number(myString), operator);
    result =  operate(result, Number(myString), operator);
       
}
equalButton.addEventListener('click', () => showResult());





// PURE LOGIC (NUMBERS & OPERATORS)
function add(x,y) {
    return x + y;
}

function subtract(x,y) {
    return x - y;
}

function multiply(x,y) {
    return x * y;
}

function divide(x,y) {
    return x / y;
}

function operate(first, second, op) {
    switch(op) {
        case 'add':
            return add(first, second);
        case 'subtract':
            return subtract(first, second);
        case 'multiply':
            return multiply(first, second);
        case 'divide':
            return divide(first, second);
        default:
            console.log('Error: Invalid operatorrr');
            return null;
    }
}


function ty() {
    console.log("result: " + result);
    console.log('first #: ' + firstNumber);
    console.log('myString ' + myString);
    console.log('^^^^^^^^^^^^');
}
const anyButtons = document.querySelectorAll('button');
anyButtons.forEach(
    b => b.addEventListener('click', e => ty())
);
