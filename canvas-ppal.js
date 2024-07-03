/**
 * Descripción
 * @method canvas-ppal 
 * @param {number} numMonedas - Número de monedas que quieres que caigan
 * @return {number} x - Posición x (separadas por 150px)
 * @return {number} dx - Velocidad (todas las monedas caen a la misma velocidad)
 * @return {number} y - Posición y (comienzan en la parte superior del canvas)
 * @return {number} dy - Velocidad (todas las monedas caen a la misma velocidad)
 */

//Aca se genera la animacion de la lluvia de monedas
var monedas = []; // Array para almacenar las monedas
var numMonedas = 10; // Número de monedas que quieres que caigan

// Crear las monedas
for (var i = 0; i < numMonedas; i++) {
    monedas.push({ // Añadir un objeto moneda al array
        x: i * 150, // Posición x (separadas por 150px)
        y: 0, // Posición y (comienzan en la parte superior del canvas)
        dy: 10 // Velocidad (todas las monedas caen a la misma velocidad)
    });
}
function caidaMoneda() {
    var canvas = document.getElementById("myCanvas"); // obtener el elemento canvas
    var ctx = canvas.getContext("2d"); // obtener el contexto de dibujo en el canvas

    var alturaMax = canvas.height; // obtener la altura del canvas
    var anchoMax = canvas.width; // obtener el ancho del canvas
    var margen = 20; // Margen en los lados

    canvas.width = canvas.width; // limpiar el canvas

    var img = new Image(); // crear un objeto imagen
    img.src = "Imagenes/coin.png";

    img.onload = function () {
        // Dibujar todas las monedas
        for (var i = 0; i < monedas.length; i++) {
            (function (i) { // Crear una nueva función de alcance para preservar el valor de i
                setTimeout(function () {
                    var moneda = monedas[i];

                    // Limpiar solo el área que va a ser redibujada
                    ctx.clearRect(moneda.x, moneda.y, img.width, img.height);

                    ctx.drawImage(img, moneda.x, moneda.y);

                    // Actualizar la posición de la moneda
                    moneda.y += moneda.dy;
                    if (moneda.y > canvas.height - 50) {
                        //si la moneda llega al suelo que se frene
                        moneda.dy = 0;
                    }
                }, i * 500); // Retrasar la ejecución de esta función en i milisegundos
            })(i);//el i invoca a la funcion inmediatamente
        }
    }
}



