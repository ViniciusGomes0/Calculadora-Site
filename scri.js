alert ('Essa é minha primeira calculadora, não ligue para erros!:)')

const display = document.getElementById('display');

let currentInput = '';
let previousInput = '';
let operator = null;



function inserir(number) {
    currentInput += number;
    display.value = currentInput;
}

function SetOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calcular();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}
            
function calcular() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

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

    currentInput = result.toString();
    operator = null;
    previousInput = '';
    display.value = currentInput;
}

function ClearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = null;
    display.value = '';
}

function ClearOneNumber() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}


