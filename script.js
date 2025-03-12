let currentInput = '';
let currentOperation = '';
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    document.getElementById('input').innerHTML = `${previousInput} ${currentOperation} ${currentInput}`;
}

function clearDisplay(){

}