const calculadora = document.querySelector(".calculadora");
const teclado = calculadora.querySelector(".teclado");
const pantalla = calculadora.querySelector(".pantalla");
let powerOn = false;
let operator = "";
let operation = "";
let result = 0;
var num1, num2;

function Suma(a, b) {
    return a + b;
}

function Resta(a, b) {
    return a - b;
}

function Multiplicacion(a, b) {
    return a * b;
}

function Division(a, b) {
    return a / b;
}

teclado.addEventListener("click", (i) => {
    const key = i.target;
    const keyContent = key.textContent;
    const cifra = pantalla.textContent;

    if (key.matches("button.power")) {
        if (cifra == "") {
            pantalla.textContent = "0";
            key.textContent = "OFF";
            powerOn = true;
        } else {
            pantalla.textContent = "";
            key.textContent = "ON";
            powerOn = false;
            operator = "";
        }
    }
    
    if (key.matches("button.number") && powerOn) {
        if (cifra == 0 || operator) {
            pantalla.textContent = keyContent;
            operator = "";
        } else if (cifra == "") {
            pantalla.textContent = "";
        } else {
            if (cifra.length < 12)
            pantalla.textContent += keyContent;
        }
    }

    if (key.matches("button.operator") && powerOn && cifra != 0) {
        num1 = parseFloat(cifra);
        if (keyContent == "+") {
            operator = "add";
            operation = "suma";
        } else if (keyContent == "-") {
            operator = "subs";
            operation = "resta";
        } else if (keyContent == "x") {
            operator = "mult";
            operation = "multiplicacion";
        } else {
            operator = "div";
            operation = "division";
        }
        console.log(num1);
        console.log(operator);
    }

    if (key.matches("button.equal") && num1) {
        num2 = parseFloat(cifra);
        if (operation == "suma") {
            result = Suma(num1, num2);
        } else if (operation == "resta") {
            result = Resta(num1, num2);
        } else if (operation == "multiplicacion") {
            result = Multiplicacion(num1, num2);
        } else if (operation == "division") {
            if (num2 == 0) {
               result = "ERROR";
            } else {
                result = Division(num1, num2);
            }
        }
        
        pantalla.textContent = result;
        num1 = 0;
    }
})