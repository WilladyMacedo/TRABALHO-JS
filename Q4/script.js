let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(currentInput);
        currentInput = display.value;
    } catch (error) {
        display.value = 'Erro';
    }
}

function calculateFactorial() {
    let num = parseFloat(currentInput);
    if (num < 0) return;
    let factorial = 1;
    for (let i = 2; i <= num; i++) {
        factorial *= i;
    }
    display.value = factorial;
    currentInput = display.value;
}

function calculateSin() {
    let num = parseFloat(currentInput);
    display.value = Math.sin(num).toFixed(4);
    currentInput = display.value;
}

function calculateCos() {
    let num = parseFloat(currentInput);
    display.value = Math.cos(num).toFixed(4);
    currentInput = display.value;
}

function calculateTan() {
    let num = parseFloat(currentInput);
    display.value = Math.tan(num).toFixed(4);
    currentInput = display.value;
}

function calculateLog() {
    let num = parseFloat(currentInput);
    if (num <= 0) return;
    display.value = Math.log(num).toFixed(4);
    currentInput = display.value;
}

function calculateSqrt() {
    let num = parseFloat(currentInput);
    if (num < 0) return;
    display.value = Math.sqrt(num).toFixed(4);
    currentInput = display.value;
}

function calculatePow() {
    let num = parseFloat(currentInput);
    display.value = Math.pow(num, 2).toFixed(4);
    currentInput = display.value;
}

function calculateSinh() {
    let num = parseFloat(currentInput);
    display.value = Math.sinh(num).toFixed(4);
    currentInput = display.value;
}

function calculateCosh() {
    let num = parseFloat(currentInput);
    display.value = Math.cosh(num).toFixed(4);
    currentInput = display.value;
}

function calculateTanh() {
    let num = parseFloat(currentInput);
    display.value = Math.tanh(num).toFixed(4);
    currentInput = display.value;
}