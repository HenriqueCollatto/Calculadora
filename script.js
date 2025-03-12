let currentInput = '';
let currentOperation = '';
let previousInput = '';
let dpsCalculo = false;

function appendNumber(number) {
    let num = number;
    if ( document.getElementById('input').innerHTML === '0'){
        document.getElementById('input').innerHTML = number;
        return
    }
    
    document.getElementById('input').innerHTML += number;

}

function clearDisplay(){
    
    let num = 0;
    document.getElementById('input').innerHTML = num;
}

function appendOperation(operation){
    if (operation === '.'){
        document.getElementById('input').innerHTML += operation;
    }
   
    document.getElementById('input').innerHTML += operation;
    
    //document.getElementById("calc-display").innerHTML += ' ';    
    //document.getElementById("calc-display").innerHTML += operation + ' ';

    //document.getElementById('input').innerHTML = `${previousInput} ${currentOperation} ${currentInput}`;

}

function inverse(){
    let num;
    num = document.getElementById('input').innerHTML;
    document.getElementById('input').innerHTML = eval(num) * (-1);
}

function answer(){
    let num;
    num = document.getElementById('input').innerHTML;
    document.getElementById('input').innerHTML = eval(num);
    //dpsCalculo = true;
    //document.getElementById('input').innerHTML = parseFloat(currentInput);
}

function clear(){
    let num;
    num = document.getElementById('input').innerHTML;
    document.getElementById('input').innerHTML = eval(num);
}

function percent(){
    let num;
    num = document.getElementById('input').innerHTML;
    document.getElementById('input').innerHTML = eval(num) * (100);
}

