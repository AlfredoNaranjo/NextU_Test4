/* Creación de Calculadora */
var Calculadora = function () {

    /* Declaración de variables para calculos y control. Las Variables de "controlFin" (variable de control)
     y "valor" se usan en el botonIgual y función resolver() */
    var numero1, operacion, resultado, controlFin = 1, valor,

        /* Variables para botones y pantalla */
        pantalla = document.getElementById("display"),
        botonOn = document.getElementById("on"),
        botonSigno = document.getElementById("sign"),
        boton1 = document.getElementById("1"),
        boton2 = document.getElementById("2"),
        boton3 = document.getElementById("3"),
        boton4 = document.getElementById("4"),
        boton5 = document.getElementById("5"),
        boton6 = document.getElementById("6"),
        boton7 = document.getElementById("7"),
        boton8 = document.getElementById("8"),
        boton9 = document.getElementById("9"),
        boton0 = document.getElementById("0"),
        botonPunto = document.getElementById("punto"),
        botonIgual = document.getElementById("igual"),
        botonDividir = document.getElementById("dividido"),
        botonMultiplicar = document.getElementById("por"),
        botonMenos = document.getElementById("menos"),
        botonMas = document.getElementById("mas");


    /* Definición de efectos de botones y aplicación por Listeners */
    var efectoPresionarBoton = function () {
        this.style.transform = "scale(0.9)";
    };

    var efectoSoltarBoton = function () {
        this.style.transform = "scale(1)";
    };
    /* Aplicación de efectos al presionar botones */
    boton1.addEventListener("mousedown", efectoPresionarBoton);
    boton2.addEventListener("mousedown", efectoPresionarBoton);
    boton3.addEventListener("mousedown", efectoPresionarBoton);
    boton4.addEventListener("mousedown", efectoPresionarBoton);
    boton5.addEventListener("mousedown", efectoPresionarBoton);
    boton6.addEventListener("mousedown", efectoPresionarBoton);
    boton7.addEventListener("mousedown", efectoPresionarBoton);
    boton8.addEventListener("mousedown", efectoPresionarBoton);
    boton9.addEventListener("mousedown", efectoPresionarBoton);
    boton0.addEventListener("mousedown", efectoPresionarBoton);
    botonMas.addEventListener("mousedown", efectoPresionarBoton);
    botonMenos.addEventListener("mousedown", efectoPresionarBoton);
    botonDividir.addEventListener("mousedown", efectoPresionarBoton);
    botonMultiplicar.addEventListener("mousedown", efectoPresionarBoton);
    botonSigno.addEventListener("mousedown", efectoPresionarBoton);
    botonOn.addEventListener("mousedown", efectoPresionarBoton);
    botonPunto.addEventListener("mousedown", efectoSoltarBoton);
    botonIgual.addEventListener("mousedown", efectoPresionarBoton);

    /* Aplicación de efectos al soltar botones */
    boton1.addEventListener("mouseup", efectoSoltarBoton);
    boton2.addEventListener("mouseup", efectoSoltarBoton);
    boton3.addEventListener("mouseup", efectoSoltarBoton);
    boton4.addEventListener("mouseup", efectoSoltarBoton);
    boton5.addEventListener("mouseup", efectoSoltarBoton);
    boton6.addEventListener("mouseup", efectoSoltarBoton);
    boton7.addEventListener("mouseup", efectoSoltarBoton);
    boton8.addEventListener("mouseup", efectoSoltarBoton);
    boton9.addEventListener("mouseup", efectoSoltarBoton);
    boton0.addEventListener("mouseup", efectoSoltarBoton);
    botonMas.addEventListener("mouseup", efectoSoltarBoton);
    botonMenos.addEventListener("mouseup", efectoSoltarBoton);
    botonDividir.addEventListener("mouseup", efectoSoltarBoton);
    botonMultiplicar.addEventListener("mouseup", efectoSoltarBoton);
    botonSigno.addEventListener("mouseup", efectoSoltarBoton);
    botonOn.addEventListener("mouseup", efectoSoltarBoton);
    botonPunto.addEventListener("mouseup", efectoSoltarBoton);
    botonIgual.addEventListener("mouseup", efectoSoltarBoton);


    /* Definicion de eventos en botones de numeros con la pantalla de Calculadora */

    /* Boton #1 */
    boton1.onmousedown = function () {
        if (pantalla.textContent == "0") {
            pantalla.textContent = "1"
        } else if (pantalla.textContent.length < 8) {
            pantalla.textContent = pantalla.textContent + "1";
        }
    };

    /* Boton #2 */
    boton2.onmousedown = function () {
        if (pantalla.textContent == "0") {
            pantalla.textContent = "2"
        } else if (pantalla.textContent.length < 8) {
            pantalla.textContent = pantalla.textContent + "2";
        }
    };


    /* Boton #3 */
    boton3.onmousedown = function () {
        if (pantalla.textContent == "0") {
            pantalla.textContent = "3"
        } else if (pantalla.textContent.length < 8) {
            pantalla.textContent = pantalla.textContent + "3";
        }
    };


    /* Boton #4 */
    boton4.onmousedown = function () {
        if (pantalla.textContent == "0") {
            pantalla.textContent = "4"
        } else if (pantalla.textContent.length < 8) {
            pantalla.textContent = pantalla.textContent + "4";
        }
    };

    /* Boton #5 */
    boton5.onmousedown = function () {
        if (pantalla.textContent == "0") {
            pantalla.textContent = "5"
        } else if (pantalla.textContent.length < 8) {
            pantalla.textContent = pantalla.textContent + "5";
        }
    };


    /* Boton #6 */
    boton6.onmousedown = function () {
        if (pantalla.textContent == "0") {
            pantalla.textContent = "6"
        } else if (pantalla.textContent.length < 8) {
            pantalla.textContent = pantalla.textContent + "6";
        }
    };


    /* Boton #7 */
    boton7.onmousedown = function () {
        if (pantalla.textContent == "0") {
            pantalla.textContent = "7"
        } else if (pantalla.textContent.length < 8) {
            pantalla.textContent = pantalla.textContent + "7";
        }
    };


    /* Boton #8 */
    boton8.onmousedown = function () {
        if (pantalla.textContent == "0") {
            pantalla.textContent = "8"
        } else if (pantalla.textContent.length < 8) {
            pantalla.textContent = pantalla.textContent + "8";
        }
    };


    /* Boton #9 */
    boton9.onmousedown = function () {
        if (pantalla.textContent == "0") {
            pantalla.textContent = "9"
        } else if (pantalla.textContent.length < 8) {
            pantalla.textContent = pantalla.textContent + "9";
        }
    };


    /* Boton #0 */
    boton0.onmousedown = function () {
        if (pantalla.textContent == "0") {
            pantalla.textContent = "0"
        } else if (pantalla.textContent.length < 8) {
            pantalla.textContent = pantalla.textContent + "0";
        }
    };


    /* Definición eventos botones de operaciones */

    botonMas.onmousedown = function () {
        if (controlFin == 1) {
            numero1 = parseFloat(pantalla.textContent);
            controlFin = 0;
            operacion = "+";
            resultado = resultado + numero1;
            limpiarPantalla();
        } else {
            numero1 = parseFloat(pantalla.textContent);
            controlFin = 0;
            operacion = "+";
            resultado = resultado + numero1;
            limpiarPantalla()
        }
    };

    botonMenos.onmousedown = function () {
        if (controlFin == 1) {
            numero1 = parseFloat(pantalla.textContent);
            controlFin = 0;
            operacion = "-";
            resultado = resultado - numero1;
            limpiarPantalla();
        } else {
            numero1 = parseFloat(pantalla.textContent);
            controlFin = 0;
            operacion = "-";
            resultado = parseFloat(resultado) - parseFloat(numero1);
            limpiarPantalla()
        }
    };


    botonMultiplicar.onmousedown = function () {
        numero1 = parseFloat(pantalla.textContent);
        operacion = "*";
        controlFin = 0;
        limpiarPantalla();
    };


    botonDividir.onmousedown = function () {
        numero1 = parseFloat(pantalla.textContent);
        operacion = "/";
        controlFin = 0;
        limpiarPantalla();
    };


    botonIgual.onmousedown = function () {
        if (controlFin == 0) {
            switch (operacion) {
                case "+":
                    valor = parseFloat(pantalla.textContent);
                    resultado = resultado + valor;
                    pantalla.textContent = resultado;
                    controlFin = 1;
                    break;

                case "-":
                    valor = parseFloat(pantalla.textContent);
                    resultado = resultado - valor;
                    pantalla.textContent = parseFloat(resultado);
                    controlFin = 1;
                    break;
            }



        } else {
            switch (operacion) {
                case "+":
                    resultado = resultado + valor;
                    pantalla.textContent = resultado;
                    controlFin = 1;
                    break;

                case "-":
                    resultado = resultado - valor;
                    pantalla.textContent = resultado;
                    controlFin = 1;
                    break;
            }
        }
    };


    botonOn.onmousedown = function () {
        borrarTodo();
    };


    botonSigno.onmousedown = function () {
        var signo = pantalla.textContent[0];
        if (pantalla.textContent != 0) {
            if (signo != "-") {
                pantalla.textContent = "-" + pantalla.textContent;
            } else {
                pantalla.textContent = pantalla.textContent.replace("-", "");
            }
        }
    };


    botonPunto.onmousedown = function () {
        var punto = ".";
        if (pantalla.textContent.indexOf(punto) == -1) {
            pantalla.textContent = pantalla.textContent + punto;
        } else {
            pantalla.textContent = pantalla.textContent;
        }
    };


    /* Defninir funcionamiento de limpiarPantalla, resolver y operaciones */

    var limpiarPantalla = function () {
        pantalla.textContent = "";
    };

    var borrarTodo = function () {
        pantalla.textContent = "0";
        resultado = 0;
    };
}();
