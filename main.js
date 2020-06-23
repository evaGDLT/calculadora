/*Calculadora con las funciones básicas y un histórico de operaciones. 
Si queremo realizar otra operacion
deberemos limpiar el display con C.*/

let numero1;
let numero2;
let numero = "";
let texto = "";
let operacion;
let operacionFinalizada = false;
let operacionPulsada = false;
let resultado;


let p = document.getElementById("resultado");

function pressNumber(number) {
    if (operacionFinalizada == false) {
        //loq ue llevo hasta el momento para el primer numero
        numero = numero + number;

        texto = texto + number;
        p.innerText = texto;
    }
}

function pressOperation(op) {
    //Hasta que no limpiemos el display no podremos comenzar otra operacion
    if (numero !== "" && operacionFinalizada == false) {
        //solo se puede realizar una operacion
        if (operacionPulsada == false) {
            //finaliza el primer numero
            numero1 = numero;
            operacion = op;

            texto = texto + op;
            p.innerText = texto;

            numero = "";
            operacionPulsada = true;
        }

    }

}

function pressDecimal() {
    if (operacionFinalizada == false) {
        numero = numero + ".";
        texto = texto + ".";
        p.innerText = texto;
    }
}

function result() {
    //finaliza el segundo numero
    numero2 = numero;
    if (operacionFinalizada == false && numero2 != undefined && numero1 != undefined) {
        if (operacion == "+") {
            resultado = parseFloat(numero1) + parseFloat(numero2)
        }
        if (operacion == "-") {
            resultado = parseFloat(numero1) - parseFloat(numero2)
        }
        if (operacion == "*") {
            resultado = parseFloat(numero1) * parseFloat(numero2)
        }

        texto = texto + "=" + resultado;
        p.innerText = texto;

        operacionPulsada = false;
        operacionFinalizada = true;
        addToHistoric();
    }
}

function clearAll() {
    numero1 = "";
    numero2 = "";
    numero = "";
    texto = "";
    p.innerText = "";
    operacionFinalizada = false;
}

function addToHistoric() {
    let elemento = document.getElementById("historico");
    let nuevoElemento = document.createElement("p");
    nuevoElemento.innerText = texto;
    elemento.appendChild(nuevoElemento);
}