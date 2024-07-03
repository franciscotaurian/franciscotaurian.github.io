/**
 * Descripción
 * @method api-tarjeta
 * @param {button} addCardButton - Botón para agregar tarjeta
 * @param {number} numTarj1 - Numeros de la tarjeta del 1 al 4
 * @param {number} numTarj2 - Numeros de la tarjeta del 5 al 8
 * @param {number} numTarj3 - Numeros de la tarjeta del 9 al 12
 * @param {number} numTarj4 - Numeros de la tarjeta del 13 al 16
 * @param {string} titularTarj - Titular de la tarjeta
 * @param {number} cardExpirationMonth - Mes de expiración de la tarjeta
 * @param {number} cardExpirationYear - Año de expiración de la tarjeta
 * @param {number} cardCvv - CVV de la tarjeta
 * @return {alert} alert - Alerta de tarjeta guardada con éxito
 */

document.addEventListener('DOMContentLoaded', (event) => {
	var addCardButton = document.querySelector('#btn-add');
	if (addCardButton) {
		addCardButton.addEventListener('click', function (e) {
			// Previene el comportamiento predeterminado del formulario
			e.preventDefault();

			// Almacena los datos de la tarjeta en sessionStorage
			var num_tarj = document.getElementById('num-tarj-1').value;
			var num_tarj_1 = document.getElementById('num-tarj-2').value;
			var num_tarj_2 = document.getElementById('num-tarj-3').value;
			var num_tarj_3 = document.getElementById('num-tarj-4').value;
			var titular_tarj = document.getElementById('titular-tarj').value; // Supuesto id del titular
			var card_expiration_month = document.getElementById('card-expiration-month').value; // Supuesto id del mes de expiración
			var card_expiration_year = document.getElementById('card-expiration-year').value; // Supuesto id del año de expiración
			var card_cvv = document.getElementById('card-cvv').value; // Supuesto id del CVV

			console.log(num_tarj, num_tarj_1, num_tarj_2, num_tarj_3, titular_tarj, card_expiration_month, card_expiration_year, card_cvv); // Mostramos por consola

			if (!num_tarj || !num_tarj_1 || !num_tarj_2 || !num_tarj_3 || !titular_tarj || !card_expiration_month || !card_expiration_year || !card_cvv) {
				alert('Por favor, complete todos los campos.');
			}
			else {
				// Almacenar los datos en localStorage
				//JSON.stringify convierte un objeto o valor de JavaScript en una cadena de texto JSON
				localStorage.setItem('num-tarj-1', JSON.stringify(num_tarj));
				localStorage.setItem('num-tarj-2', JSON.stringify(num_tarj_1));
				localStorage.setItem('num-tarj-3', JSON.stringify(num_tarj_2));
				localStorage.setItem('num-tarj-4', JSON.stringify(num_tarj_3));
				localStorage.setItem('titular-tarj', JSON.stringify(titular_tarj));
				localStorage.setItem('card-expiration-month', JSON.stringify(card_expiration_month));
				localStorage.setItem('card-expiration-year', JSON.stringify(card_expiration_year));
				localStorage.setItem('card-cvv', JSON.stringify(card_cvv));

				if (!num_tarj || !num_tarj_1 || !num_tarj_2 || !num_tarj_3 || !titular_tarj || !card_expiration_month || !card_expiration_year || !card_cvv) {
					alert('Por favor, complete todos los campos.');
					return;
				}

				// Mostrar alerta de tarjeta guardada
				alert('Tarjeta guardada con éxito');

				// Borrar los números de la pantalla
				document.getElementById('num-tarj-1').value = '';
				document.getElementById('num-tarj-2').value = '';
				document.getElementById('num-tarj-3').value = '';
				document.getElementById('num-tarj-4').value = '';
				document.getElementById('titular-tarj').value = '';
				document.getElementById('card-expiration-month').value = '';
				document.getElementById('card-expiration-year').value = '';
				document.getElementById('card-cvv').value = '';
				$('.credit-card-box .number').html('');
				$('.credit-card-box .titular-tarj div').html('');
				$('.card-expiration-date div').html('');
				$('.cvv div').html('');
			}
		});
	} else {
		console.error('El elemento con clase "btn-add" no se encontró en el DOM.');
	}

	const formulario = document.querySelector("#formulario");
	if (formulario) {
		formulario.addEventListener("submit", function (e) {
			e.preventDefault();
			console.log('Cargando tarjeta');

			// Obtener los valores de los campos de entrada
			const num_tarj_1 = document.querySelector("#num-tarj-1").value;
			const num_tarj_2 = document.querySelector("#num-tarj-2").value;
			const num_tarj_3 = document.querySelector("#num-tarj-3").value;
			const num_tarj_4 = document.querySelector("#num-tarj-4").value;
			const titular_tarj = document.querySelector("#titular-tarj").value;
			const card_expiration_month = document.querySelector("#card-expiration-month").value;
			const card_expiration_year = document.querySelector("#card-expiration-year").value;
			const card_cvv = document.querySelector("#card-cvv").value;

			// Imprimir los valores obtenidos en la consola
			console.log(num_tarj_1, num_tarj_2, num_tarj_3, num_tarj_4);
			console.log(titular_tarj, card_expiration_month, card_expiration_year, card_cvv);
		});

	} else {
		console.error('El formulario con id "formulario" no se encontró en el DOM.');
	}

});

/* Crea una variable para almacenar el número de tarjeta.*/
$('.input-numero-tarj').on('keyup change', function () {
	var elementoActual = $(this);

	/*
	En jQuery, la convención de usar el signo $ antes de un nombre de variable es una práctica 
	común para indicar que esa variable contiene un objeto jQuery. 
	
	La función $() de jQuery se utiliza para convertir this en un objeto jQuery, 
	lo que permite usar métodos de jQuery en el elemento.
	
	!! Yo lo use con 'var = elementoActual
	 para entenderlo mejor*/


	if (elementoActual.val().length > 3) { // Si el valor del elemento actual es mayor a 3
		elementoActual.next().focus(); // Enfoca el siguiente elemento
	}

	var num_tarj = '';
	$('.input-numero-tarj').each(function () { // Por cada elemento con la clase 'input-numero-tarj'
		num_tarj += $(this).val() + ' '; // Concatena el valor del elemento actual con un espacio
		if ($(this).val().length == 16) { // Si el valor del elemento actual es igual a 16
			$(this).next().focus(); // Enfoca el siguiente elemento
		}
	})
	$('.credit-card-box .number').html(num_tarj); // Muestra el número de tarjeta en la caja de la tarjeta
});


$('#titular-tarj').on('keyup change', function () { // Cuando se presiona una tecla o cambia el valor del campo
	elementoActual = $(this); // Se almacena el elemento actual
	$('.credit-card-box .titular-tarj div').html(elementoActual.val()); // Se muestra el valor en la caja de la tarjeta
});

$('#titular-tarj').on('keyup change', function () { // Cuando se presiona una tecla o cambia el valor del campo

	elementoActual = $(this); // Se almacena el elemento actual
	$('.credit-card-box .titular-tarj div').html(elementoActual.val()); // Se muestra el valor en la caja de la tarjeta
});

$('#card-expiration-month, #card-expiration-year').change(function () { // Cuando cambia el mes o el año de expiración
	m = $('#card-expiration-month option').index($('#card-expiration-month option:selected')); // Se obtiene el índice del mes seleccionado
	m = (m < 10) ? '0' + m : m; // Si el mes es menor a 10, se le agrega un 0 al principio
	y = $('#card-expiration-year').val().substr(2, 2); // Se obtiene el año seleccionado
	$('.card-expiration-date div').html(m + '/' + y); // Se muestra la fecha de expiración en la caja de la tarjeta
})

$('#card-cvv').on('focus', function () { // Cuando se enfoca en el campo CVV
	$('.credit-card-box').addClass('hover'); // Se agrega la clase 'hover' a la caja de la tarjeta
}).on('blur', function () { // Cuando se quita el foco del campo CVV
	$('.credit-card-box').removeClass('hover'); // Se quita la clase 'hover' a la caja de la tarjeta
}).on('keyup change', function () { // Cuando se presiona una tecla o cambia el valor del campo CVV
	$('.cvv div').html($(this).val()); // Se muestra el valor en la caja de la tarjeta
});

setTimeout(function () { // Después de 500 milisegundos
	$('#card-cvv').focus().delay(1000).queue(function () { // Se enfoca en el campo CVV
		$(this).blur().dequeue(); // Se quita el foco del campo CVV
	});
}, 500);

//Verificamos que se ingresen solo numeros en los campos que deben ir solo numeros
document.addEventListener('DOMContentLoaded', function () { //Se espera a que el DOM se haya cargado completamente
	var cardNumber = document.querySelectorAll('.input-numero-tarj');
	var cvv = document.getElementById('card-cvv');//Se seleccionan los elementos de entrada y los elementos de error correspondientes

	function restriccionLetras(event) {//event es un objeto del evento keydow
		var key = event.key;//se obtiene la tecla presionada
		//verfica la tecla presionada
		if (!/^\d$/.test(key) && key !== 'Backspace' && key !== 'ArrowLeft' && key !== 'ArrowRight' && key !== 'Delete' && key !== 'Tab') {
			event.preventDefault();//Evita que se ingrese alguna de la teclas que no se deben ingresar
		}
	}

	//Se añade un event listener a los campos de entrada para escuchar el evento input, que se dispara cada vez que se cambia el valor de un campo de entrada
	cardNumber.forEach(function (input) {
		input.addEventListener('keydown', restriccionLetras);//se llama a la funcion cada vez que se produce el evento
	});

	cvv.addEventListener('keydown', restriccionLetras);
});

