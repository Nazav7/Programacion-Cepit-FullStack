/*Tratamiento de cadenas
Convertir una palabra ingresada por el usuario en clave, según reglas vistas:
si el caracter es una vocal reemplazar aeiou por . , ; : !  respectivamente.
si el caracter es un número o un operador matemático (+ - * / ) queda igual.
si el caracter es una consonante minúscula pasar a mayúscula y viceversa.
MarcelO3980            m.RC,Lo3980*/

import * as rls from "readline-sync"

let palabra: string = rls.question("Indique la palabra a codificar: ");
console.log(`La palabra ingresada es: ${palabra}`);
console.log(`La palabra ingresada se convierte en: ${convertirEnClave(palabra)}`);

function convertirEnClave(palabra: string): string {
    let vocales: string = "aeiou";
    let signos: string = ".,;:!"
    let matematicos: string = "0123456789+-*/";
    let clave: string = "";

    for (let i = 0; i < palabra.length; i++) {
        //>= 0, porque si no encuentra el caracter devuelve -1
        if (matematicos.indexOf(palabra[i]) >= 0) { //Va a retornar un n >=0 si palabra[i] es algun valor de matematicos. Si es "/"retorna 13
            clave += palabra[i];//Si el carácter es un carácter matemático, se mantiene igual
        } else {
            if (vocales.indexOf(palabra[i]) >= 0) { 
                clave += signos[vocales.indexOf(palabra[i])]; //Si el carácter actual es una vocal, se reemplaza por el signo correspondiente
                //Supongamos que estamos procesando la palabra "yate" y estamos en el segunda carácter 'a'.
                //vocales.indexOf('a') devuelve 0. Por lo tanto, signos[0] es '.'
            } else {
                if (palabra[i] == palabra[i].toUpperCase()) {
                    clave += palabra[i].toLowerCase(); //Pasa todos las consonantes a minuscula
                }else{
                    clave += palabra[i].toUpperCase(); //Pasa todas las consonantes a mayuscula
                }
            }
        }
    }
    return clave;
}