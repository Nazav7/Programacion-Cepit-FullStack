//El método split() en JavaScript se usa para dividir una cadena (string) en un arreglo de subcadenas basadas en un separador especificado.
//No se aplica directamente a números, ya que split() es un método de las cadenas (string), no de los números (number).

//Ejemplo con String:

const frase = "Hola mundo";
const palabras = frase.split(" "); // Usar el espacio (" ") como separador, divide la cadena en un arreglo de palabras.
console.log(palabras); // ["Hola", "mundo"]

//Ejemplo con Caracteres:

const saludo = "Hola";
const caracteres = saludo.split(""); // Usar la cadena vacía ("") como separador, divide la cadena en un arreglo de caracteres individuales
console.log(caracteres); // ["H", "o", "l", "a"]

//Número Convertido a Cadena:
//Si deseas dividir un número en dígitos, primero debes convertir el número a una cadena y luego usar split():

const numero = 12345;
const numeroString = numero.toString(); // Convertir el número a cadena
const digitos = numeroString.split("");
console.log(digitos); // ["1", "2", "3", "4", "5"]