/*Cadenas
Solicite al usuario que ingrese un texto y retornelo convertido en un nombre de variable/función con las reglas camelCase

Por ejemplo, si el usuario ingresa:

		convertir texto segun camel case

el programa lo debe convertir en:

		convertirTextoSegunCamelCase*/












        //camelCase
// function pasarACamelCase(texto: string): string {
//     let aMayusc: boolean = false;
//     let camelCase: string = "";
//     for (let index = 0; index < texto.trim().length; index++) {
//         if (texto[index] === " ") {
//             aMayusc = true;
//         } else {
//             if (aMayusc) {
//                 camelCase += texto[index].toUpperCase(); 
//                 aMayusc = false;
//             } else {
//                 camelCase += texto[index].toLowerCase();

//             }
//         }
//     }
//     return camelCase;
// }

// let texto: string = rls.question("Ingrese un texto: ");

// console.log(`El texto: ${texto} convertido a CamelCase queda: ${pasarACamelCase(texto)}`);