/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 



function sumar()
{	
	let number1 = parseInt(txtIdNumeroUno.value);
	let number2 = parseInt(txtIdNumeroDos.value);
	alert(number1 + number2);	
}

function restar()
{
	let number1 = parseInt(txtIdNumeroUno.value);
	let number2 = parseInt(txtIdNumeroDos.value);
	alert(number1 - number2);	
}

function multiplicar()
{ 
	let number1 = parseInt(txtIdNumeroUno.value);
	let number2 = parseInt(txtIdNumeroDos.value);
	alert(number1 * number2);	
}

function dividir()
{
	let number1 = parseInt(txtIdNumeroUno.value);
	let number2 = parseInt(txtIdNumeroDos.value);
	alert(number1 / number2);	
}

