/*
let nombre = prompt('Como es tu nombre?');
let edad = prompt('cuantos años tienes?');

document.getElementById('app').innerHTML = `Bienvenido ${nombre} de ${edad} años`;

*/


/***********************************
 * Var - let and const


//var primerNombre = 'Daniel'; - camelcase
//var primer_nombre = 'Daniel'; - underscore
//var PrimerNombre = 'Daniel'; - pascal case

var nombre = 'Daniel';
console.log(nombre);


let nombre = 'Daniel';
let apellido = 'Garcia';
console.log(`${nombre} ${apellido}`);


const nombre = 'Daniel';
console.log(nombre);



let mensaje = 'Aprendiendo JavaScript, HTML, CSS';

console.log(mensaje.indexOf('JavaScript'));
console.log(mensaje.toUpperCase());
console.log(mensaje.toLowerCase());
console.log(mensaje.substring(0,16));
console.log(mensaje.slice(-7));
console.log(mensaje.split(', '));
console.log(mensaje.replace('CSS', 'PHP'));
console.log(mensaje.includes('CSS'));

let tecnologia = 'JavaScript' + ' ';
console.log(tecnologia.repeat(5));

*/


/**************************************************
 *Numeros
 */

/*
let numero1 = 30;
let numero2 = 20;


let resultado;

//Modulo
resultado = numero1 % numero2;
//PI
resultado = Math.PI;
//redondear
resultado = Math.round(2.8);
//redondear hacia arriba
resultado = Math.ceil(2.3);
//redondear hacia abajo
resultado = Math.floor(2.6);
//raiz cuadrada
resultado = Math.sqrt(145);
//numero absoluto
resultado = Math.abs(numero2);
//potencia
resultado = Math.pow(35, 2);
//numero minimo
resultado = Math.min(2,6,9,5);
//maximo
resultado = Math.max(2,6,9,5);
//aleatorio
resultado = Math.random();

console.log(resultado);

*/


/************************************************
* Video 16 - tipos de datos
*/
/*

Datos primitivos:
- String
- Number
- Boolean
- Null
- Undefined
- Symbol

Datos de referencia:
- Array
- Objetcs
- Date

let valor;

valor = 'Daniel';
valor = 20;
valor = 20.5;
valor = -19;
valor = '20';
valor = true;
valor = false;
valor = undefined;
valor = null;
valor = Symbol('Yeah');
valor = [1,5,9];
valor = {
    nombre: 'Alejandro',
    edad: 20
};

console.log(typeof valor);
*/


/*******************************************
 * Operadores de comparacion
 */
/*
const numero1 = 50;
const numero2 = 20;
const numero3 = '20';

//Comparadores <>
//console.log( numero1 < numero2 );
//console.log( numero1 > numero2 );

//Comparador de igual
//console.log( numero1 == numero2 );
//console.log( numero2 == numero3 );
//console.log( numero2 === numero3 );

//diferentes
//console.log( numero1 != numero2 );
//console.log( numero2 != numero3 );

//comparando string
//console.log( 'Buenas' == ' Buenas' );
//Mayusculas son de menor valor y las minusculas de mayor
//console.log( 'A' > 'z' );
*/


/*************************************************
 * Convertir de String a numero


Number()
parseInt() - parseInt(string, x);
parseFloat()

toFixed()



let num1 = 20,
    num2 = 'Diez',
    num3 = '10101010',
    num4 = '20px',
    num5 = 21.5786765,
    num6 = true,
    num7 = -5;

console.log(parseInt(num1));
console.log(Number(num1));
console.log(parseFloat(num1));

*/

/***********************************************
 * Convertir de numero a string
 */

let dato;

dato = 4;


 //String() o toString()

dato = 20;
dato = true;
dato = [1,2,3];

dato = dato.toString();
console.log(dato);
console.log(dato.length);