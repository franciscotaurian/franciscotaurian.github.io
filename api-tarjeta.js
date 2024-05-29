
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

		console.log(num_tarj, num_tarj_1, num_tarj_2, num_tarj_3, titular_tarj, card_expiration_month, card_expiration_year, card_cvv); // Para depurar

		localStorage.setItem('num-tarj-1', JSON.stringify(num_tarj));
		localStorage.setItem('num-tarj-2', JSON.stringify(num_tarj_1));
		localStorage.setItem('num-tarj-3', JSON.stringify(num_tarj_2));
		localStorage.setItem('num-tarj-4', JSON.stringify(num_tarj_3));
		localStorage.setItem('titular-tarj', JSON.stringify(titular_tarj));
		localStorage.setItem('card-expiration-month', JSON.stringify(card_expiration_month));
		localStorage.setItem('card-expiration-year', JSON.stringify(card_expiration_year));
		localStorage.setItem('card-cvv', JSON.stringify(card_cvv));

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

	});
} else {
	console.error('El elemento con clase "btn-add" no se encontró en el DOM.');
}

const formulario = document.querySelector("#formulario");
if (formulario) {
	formulario.addEventListener("submit", function(e) {
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


	if (elementoActual.val().length > 3) {
		elementoActual.next().focus();
	}

	var num_tarj = '';
	$('.input-numero-tarj').each(function () {
		num_tarj += $(this).val() + ' ';
		if ($(this).val().length == 16) {
			$(this).next().focus();
		}
	})
	$('.credit-card-box .number').html(num_tarj);
});


$('#titular-tarj').on('keyup change', function () {
	elementoActual = $(this);
	$('.credit-card-box .titular-tarj div').html(elementoActual.val());
});

$('#titular-tarj').on('keyup change', function () {

	elementoActual = $(this);
	$('.credit-card-box .titular-tarj div').html(elementoActual.val());
});

$('#card-expiration-month, #card-expiration-year').change(function () {
	m = $('#card-expiration-month option').index($('#card-expiration-month option:selected'));
	m = (m < 10) ? '0' + m : m;
	y = $('#card-expiration-year').val().substr(2, 2);
	$('.card-expiration-date div').html(m + '/' + y);
})

$('#card-cvv').on('focus', function () {
	$('.credit-card-box').addClass('hover');
}).on('blur', function () {
	$('.credit-card-box').removeClass('hover');
}).on('keyup change', function () {
	$('.cvv div').html($(this).val());
});

setTimeout(function () {
	$('#card-cvv').focus().delay(1000).queue(function () {
		$(this).blur().dequeue();
	});
}, 500);

