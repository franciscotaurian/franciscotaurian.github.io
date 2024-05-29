let url = 'https://dolarapi.com/v1/dolares'; /*Obtencion de api*/
let mostrarcotizacion = document.getElementById('dolar');

fetch(url)
  .then((resp) => resp.json())
  .then((dato) => {
    console.log(dato); /*Funcion para obtener los datos del array de la api*/
    let oficial = dato[0];
    let blue = dato[1];
    let bolsa = dato[2];
    let contadoConLiqui = dato[3];
    let mayorista = dato[4];
    let tarjeta = dato[6];

    function createCurrencyDiv(currencyName, currencyData) { /*funcion para mostrar cada dato*/
      let box = document.createElement('box');
      let div = document.createElement('div');
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
      mostrarcotizacion.appendChild(div);
    }
    /*Llamado de funcion con valores*/
    createCurrencyDiv('Oficial', oficial);
    createCurrencyDiv('Blue', blue);
    createCurrencyDiv('Mep', bolsa);
    createCurrencyDiv('CCL', contadoConLiqui);
    createCurrencyDiv('Mayorista', mayorista);
    createCurrencyDiv('Tarjeta', tarjeta);

  });
