let numero1;
let numero = "";
let operacion;
let texto = "";
let resultado;

let p = document.getElementById("resultado");

function pressNumber(number) {
    //concateno los numeros
    numero = numero + number;
    texto = numero;
    p.innerText = texto;

}

function pressOperation(op) {
    console.log(numero)
    numero1 = numero;
    operacion = op;
    numero = "";
}

function result() {
    numero2 = numero;
    if (operacion == "suma") {
        resultado = parseFloat(numero1) + parseFloat(numero2)
    }
    if (operacion == "resta") {
        resultado = parseFloat(numero1) - parseFloat(numero2)
    }
    if (operacion == "multiplicacion") {
        resultado = parseFloat(numero1) * parseFloat(numero2)
    }
    texto = resultado;
    p.innerText = resultado
}

function clearAll() {
    numero1 = "";
    numero2 = "";
    numero = "";
    texto = "";
    p.innerText = "";
}

function pressDecimal() {
    numero = numero + ".";
    texto = numero;
    p.innerText = texto;
}