/* Encontrar el elemento mas grande del arreglo
Dado el siguiente arreglo [4,7,9,3,1,45,67,23,29,78,11,16]
-Crear un programa que encuentre cual es el numero mas grande del arreglo e imprimirlo por consola
-Almacenar el numero mas grande en una variable global y pasarlo a una funcion para determinar si el numero es par o impar*/

let arrayNumbers : number[] = [4,7,9,3,1,45,67,23,29,78,11,16];
let maxNumber : number = 0;

//Se itera sobre el arreglo para encontrar el numero mas grande y lo guarda en la variable maxNumber.
for (let i=0; i<12; i++){ //el for va a seguir corriendo siempre, no importa si if es v o f
    if (arrayNumbers[i] >= maxNumber ){ //si es v entra y sigue la instrucccion que guarda el num mas grande en la variable. 
        maxNumber = arrayNumbers[i] //cambio el valor para que arrayNumbers vaya comparando con el numero más grande que se guardó.
    }
}

console.log(`El numero mas grande del arreglo es: ${maxNumber}`)

//Se determina si el num mas grande es par o impar
    if (maxNumber % 2 == 0) {
        console.log(`El numero ${maxNumber} es par`)
    } else {
        console.log(`El numero ${maxNumber} es impar`)
    }
