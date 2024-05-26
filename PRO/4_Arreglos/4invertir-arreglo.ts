/*Invertir Arreglo

• Almacene en un arreglo de tamaño N los números ingresados por el usuario
• La dimensión N también es ingresada por el usuario
• Muestre los números del arreglo pero del ultimo al primero

Ejemplo:

v = 1, 3, 7, 9, 9, 5
La salida es: 5, 9, 9, 7, 3, 1*/

import * as rls from "readline-sync"

/*guardar
tamanio del arreglo ing por el usuario
numeros del arreglo ing por el usuario.*/

// Solicita al usuario el tamaño del arreglo, y guarda el valor en el array
let arrayLength : number = rls.questionInt("Ingrese el tamanio del arreglo: "); //variable con un valor
let arrayNumbers : number[] = new Array (arrayLength) //variable con varios valores

//Pedir los valores del arreglo al usuario con iteraciones
for (let i = 0; i <arrayNumbers.length; i++) {
    arrayNumbers[i] = rls.questionInt(`Ingresa el valor para la posicion ${i}: `); //en la posicion i(0,1..) estara N valor...
}

for (let i= arrayNumbers.length-1; i >=0; i--){
    console.log(`El valor en la posición ${i} es: ${arrayNumbers[i]}`)
}