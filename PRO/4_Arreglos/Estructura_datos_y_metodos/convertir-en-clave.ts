/*Tratamiento de cadenas
Convertir una palabra ingresada por el usuario en clave, según reglas vistas:
si el caracter es una vocal reemplazar aeiou por . , ; : !  respectivamente.
si el caracter es un número o un operador matemático (+ - * / ) queda igual.
si el caracter es una consonante minúscula pasar a mayúscula y viceversa.
MarcelO3980            m.RC,Lo3980*/

















// function convertirEnClave(palabra: string): string {
//     let vocales: string = "aeiou";
//     let signos: string = ".,;:!"
//     let matematicos: string = "0123456789+-*/";
//     let clave: string = "";

//     for (let index = 0; index < palabra.length; index++) {
//         if (matematicos.indexOf(palabra[index]) >= 0) {
//             clave += palabra[index];
//         } else {
//             if (vocales.indexOf(palabra[index]) >= 0) {
//                 clave += signos[vocales.indexOf(palabra[index])];
//             } else {
//                 if (palabra[index] == palabra[index].toUpperCase()) clave += palabra[index].toLowerCase(); else clave += palabra[index].toUpperCase();
//             }
//         }
//     } return clave;
// }

// let palabra: string = rls.question("Indique la palabra a codificar: ");
// console.log(`La palabra ingresada: ${palabra} se convierte en: ${convertirEnClave(palabra)}`);