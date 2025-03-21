
function appendNumber(number) {
    
    if ( document.getElementById('input').innerHTML === '0'){
        document.getElementById('input').innerHTML = number;
        return
    }
    if (document.getElementById('input').innerHTML.length > 14){
        return
    }
    document.getElementById('input').innerHTML += number;

}

function clearDisplay(){
    let num = 0;
    document.getElementById('input').innerHTML = num;
}

function appendOperation(operation){
    let input = document.getElementById('input').innerHTML;
    if ("+-*/.".includes(input.slice(-1))) return;
    document.getElementById('input').innerHTML += operation;
}

function inverse(){
    let num = document.getElementById('input').innerHTML;
    document.getElementById('input').innerHTML = eval(num) * (-1);
}

function answer(){
    let num = document.getElementById('input').innerHTML;
    document.getElementById('input').innerHTML = eval(num);
    document.getElementById('calculation').innerHTML = num;
}


function clearCalc() {
    document.getElementById('input').innerHTML = "0";
}

function percent(){
    let num = document.getElementById('input').innerHTML;
    document.getElementById('input').innerHTML = eval(num) / (100);
}

function backspace(){
    if(document.getElementById('input').innerHTML.length === 1){
        document.getElementById('input').innerHTML = "0"
        return
    }
    let input = document.getElementById("input").innerHTML;
    document.getElementById("input").innerHTML = input.substring(0, input.length -1);
}

