let firstNumber;
let operator;
let secondNumber;

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
            add(first, second);
        case 'subtract':
            subtract(first, second);
        case 'multiply':
            multiply(first, second);
        case 'divide':
            divide(first, second);
        default:
            console.log('Error: Invalid operator');
            return null;
    }
}


