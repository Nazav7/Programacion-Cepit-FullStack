/*Cadenas
Solicite al usuario que ingrese un texto y retornelo convertido en un nombre de variable/función con las reglas camelCase

Por ejemplo, si el usuario ingresa:

		convertir texto segun camel case

el programa lo debe convertir en:

		convertirTextoSegunCamelCase*/


import * as rls from "readline-sync";
// Función para convertir texto a CamelCase
function pasarACamelCase(texto: string): string {
    let aMayusc: boolean = false; // Indicador para convertir el siguiente carácter a mayúscula
    let camelCase: string = "";   // Cadena resultante en CamelCase

    // Recorre el texto, omitiendo espacios iniciales y finales
    for (let i = 0; i < texto.trim().length; i++) {
        if (texto[i] === " ") {
            // Si el carácter actual es un espacio, el siguiente carácter será mayúscula
            aMayusc = true;
        } else {
            if (aMayusc) {
                // Convierte el carácter actual a mayúscula y lo añade a la cadena resultante
                camelCase += texto[i].toUpperCase();
                aMayusc = false; // Resetea el indicador
            } else {
                // Añade el carácter actual en minúscula a la cadena resultante
                camelCase += texto[i].toLowerCase();
            }
        }
    }
    return camelCase; // Devuelve la cadena en formato CamelCase
}

// Solicita al usuario que ingrese un texto
let texto: string = rls.question("Ingrese un texto: ");

// Muestra el texto convertido a CamelCase
console.log(`El texto: ${texto} convertido a CamelCase queda: ${pasarACamelCase(texto)}`);