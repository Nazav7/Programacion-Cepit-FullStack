/*Sumar Dos Arreglos
• Sumar los elementos de cada una de las posiciones de dos arreglos y guardar el resultado en otro arreglo
• El arreglo tiene dimensión 4 y los números de los dos vectores los carga el usuario

Ejemplo:
v1 = 1, 3, 7, 9, 9, 5
v2 = 6, 9, 2, 5, 9, 4
vSuma = 7, 12, 9, 14, 18, 9*/

import * as rls from "readline-sync"

//necesitamos guardar los dos arreglos y el resultado
let arrayA: number[] = new Array(4);
let arrayB: number[] = new Array(4)
let arraySum: number[] = new Array(4)

console.log(`Suma de cada elemento entre dos vectores`)
//iterar para que los números de los dos vectores los cargue el usuario
for(let i=0; i<arrayA.length; i++){
arrayA[i]= rls.questionInt(`Ingrese el elemento ${i} del primer vector: `);
arrayB[i] = rls.questionInt(`Ingrese el elemento ${i} del segundo vector: `);
arraySum[i] = arrayA[i] + arrayB[i]
console.log (`La suma de los elementos es: ${arraySum[i]}`)
}

console.log (`Primer vector: ${arrayA}`)
console.log (`Segundo vector: ${arrayB}`)
console.log (`Suma de los vectores: ${arraySum}`)
