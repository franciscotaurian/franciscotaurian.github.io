/**
 * Descripción
 * @method botonConfirmacion
 * @param {button} confirmarCompra - Botón de confirmación de compra
 * @param {number} numTarj1 - Numeros de la tarjeta del 1 al 4
 * @param {number} numTarj2 - Numeros de la tarjeta del 5 al 8
 * @param {number} numTarj3 - Numeros de la tarjeta del 9 al 12
 * @param {number} numTarj4 - Numeros de la tarjeta del 13 al 16
 * @return {alert} alert - Alerta de confirmación de compra
 * @return {alert} alert - Alerta de compra cancelada
 * @return {alert} alert - Alerta de ingreso de tarjeta
 */

document.addEventListener('DOMContentLoaded', function () { // se asegura que el codigo este totalmente cargado para usar
    const buttons = document.querySelectorAll('#confirmarCompra');//recorre todos los botones con el mismo id.
    buttons.forEach(button => { //recorre todos los botones, para cada uno que suceda el evento click, se ejecuta la funcion.
        button.addEventListener('click', function () {//agrega un evento de click
            const numTarj1 = JSON.parse(localStorage.getItem('num-tarj-1'));
            const numTarj2 = JSON.parse(localStorage.getItem('num-tarj-2'));
            const numTarj3 = JSON.parse(localStorage.getItem('num-tarj-3'));
            const numTarj4 = JSON.parse(localStorage.getItem('num-tarj-4'));
            const numTarj = `${numTarj1} ${numTarj2} ${numTarj3} ${numTarj4}`;

            if (numTarj1 == null && numTarj2 == null && numTarj3 == null && numTarj4 == null) { //si no se ingreso un numero de tarjeta, se muestra una alerta
                alert('Debe ingresar una tarjeta para poder realizar la compra');
            }
            else {
                if (confirm(`¿Desea confirmar la compra? El numero de tarjeta con el que confirmara la compra es: ${numTarj}`)) {//ejecuta una funcion confirm.
                    alert('Compra confirmada. ¡Disfrute del servicio!');
                } else {
                    alert('Compra cancelada.');
                }
            }
        });
    });
});
