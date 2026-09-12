const digits = document.querySelectorAll('[data-type="number"]');
const display = document.querySelector(".display");
let firstNumber = null;
let operator = null;
let resetDisplay = true;

digits.forEach((digit) => {
    digit.addEventListener("click", e => {
        if(resetDisplay){
            display.value = e.currentTarget.dataset.value;
            resetDisplay = false;
        }else {
            display.value += e.currentTarget.dataset.value;
        }
    });
})

// Functions to operate the calculator
function add(a, b){    
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(a, op, b){
    let firstNumber = parseFloat(a);
    let secondNumber = parseFloat(b);

    switch (op) {
        case "+":
            return add(firstNumber, secondNumber);
        case "-":
            return subtract(firstNumber, secondNumber);
        case "*":
            return multiply(firstNumber, secondNumber);
        case "/":
            return divide(firstNumber, secondNumber);
        default:
            return "Syntax Error";
    }
};