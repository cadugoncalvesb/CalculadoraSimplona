// Selecionar elementos

const num1Imput = document.getElementById("num1");
const num2Imput = document.getElementById("num2");
const addButton = document.getElementById("addButton");
const subtractButton = document.getElementById("subtractButton");
const multiplyButton = document.getElementById("multiplyButton");
const divideButton = document.getElementById("divideButton");
const resultSpan = document.getElementById("result");

// Função para somar

function add() {

    const num1 = parseFloat(num1Imput.value);
    const num2 = parseFloat(num2Imput.value);

    if (!isNaN(num1) && !isNaN(num2)){
        const result = num1 + num2;
        resultSpan.textContent = result;

    }
    else{
        resultSpan.textContent = "Entradas inválidas"

    }
}

// Função para subtrair

function subtrai(){

    const num1 = parseFloat(num1Imput.value);
    const num2 = parseFloat(num2Imput.value);

    if(!isNaN(num1) && !isNaN(num2)) {
        const result = num1 - num2;
        resultSpan.textContent = result;

    }
    else{
        resultSpan.textContent = "Entradas inválidas";

    }
}

function multiplic(){

    const num1 = parseFloat(num1Imput.value);
    const num2 = parseFloat(num2Imput.value);

    if(!isNaN(num1) && !isNaN(num2)) {
        const result = num1 * num2;
        resultSpan.textContent = result;

    }
    else{
        resultSpan.textContent = "Entradas inválidas";

    }
}

function divide(){

    const num1 = parseFloat(num1Imput.value);
    const num2 = parseFloat(num2Imput.value);

    if(!isNaN(num1) && !isNaN(num2)){
        const result = num1 / num2;
        resultSpan.textContent = result;

    }
    else{
        resultSpan.textContent = "Entradas inválidas";

    }
}

// Adicionar listener de evento dos botões

addButton.addEventListener("click", add);
subtractButton.addEventListener("click", subtrai);
multiplyButton.addEventListener("click", multiplic);
divideButton.addEventListener("click", divide);

