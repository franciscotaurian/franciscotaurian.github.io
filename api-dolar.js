/**
 * Descripción
 * @method api-dolar
 * @param {string} url - URL de la API
 * @param {object} mostrarcotizacion - Contenedor de la cotización
 * @param {object} oficial - Cotización oficial
 * @param {object} blue - Cotización blue
 * @param {object} bolsa - Cotización bolsa
 * @param {object} contadoConLiqui - Cotización contado con liqui
 * @param {object} mayorista - Cotización mayorista
 * @param {object} tarjeta - Cotización tarjeta
 * @return {object} box - Caja para almacenar la cotización
 */

let url = 'https://dolarapi.com/v1/dolares'; /*Obtencion de api*/
let mostrarcotizacion = document.getElementById('dolar');

fetch(url) /*Funcion para obtener los datos de la api*/
  .then((resp) => resp.json()) 
  .then((dato) => {
    console.log(dato); /*Funcion para obtener los datos del array de la api*/
    /* Obtengo los datos del array dato y los almaceno en la variable que le corresponda */
    let oficial = dato[0]; 
    let blue = dato[1];
    let bolsa = dato[2];
    let contadoConLiqui = dato[3];
    let mayorista = dato[4];
    let tarjeta = dato[6];

    function createCurrencyDiv(currencyName, currencyData) { /*funcion para mostrar cada dato*/
      let box = document.createElement('box'); /*Creacion de caja */
      let div = document.createElement('div'); /*Creacion de div */
      div.className = 'currency-box';/*Clase caja*/
      div.innerHTML = `
        <h2>${currencyName}</h2>
        <div class="values">
          <div class="value-item">
            <span>Venta:</span>
            <span>$${currencyData.venta}</span>
          </div>
          <div class="value-item">
            <span>Compra:</span>
            <span>$${currencyData.compra}</span>
          </div>
        </div>
      `;/*Mostrar en formato HTML*/
      mostrarcotizacion.appendChild(div); /* El div se agrega al final del contenedor mostrarcotizacion */
    }
    /*Llamado de funcion con valores*/
    createCurrencyDiv('Oficial', oficial);
    createCurrencyDiv('Blue', blue);
    createCurrencyDiv('Mep', bolsa);
    createCurrencyDiv('CCL', contadoConLiqui);
    createCurrencyDiv('Mayorista', mayorista);
    createCurrencyDiv('Tarjeta', tarjeta);

  });
