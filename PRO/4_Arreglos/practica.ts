/*Ejercicio 1: Encuentra el promedio de un array de números
Escribe una función que reciba el array de números como parámetro y devuelva el promedio de dichos números.
La función debe recorrer el array usando un bucle for.

Ejercicio 2: Encuentra el número más grande del array
Escribe una función que reciba el array de números como parámetro y devuelva el núero más grande del array.

Ejercicio 3: Encuentra el número más chico del array
Escribe una función que reciba el array de números como parámetro y devuelva el número más chico del array.

Ejercicio 4: Encuentra el número de veces que aparece un elemento en un array
Escribe una función que reciba un array de números y un número como parámetros, y devuelva la cantidad de veces que el número aparece en el array.
La función debe recorrer el array usando un bucle for.

Ejercicio 5: Sumar dos arreglos
Hacer la suma de dos arreglos y dejarlo en otro arreglo. La dimensión de los arreglos es solicitada al usuario.
Los dos arreglos son cargados al azar

Ejercicio 6: Ordenar arreglo
Escribe una función que tome un arreglo de números como parámetro y lo ordene de forma descendente.

Ejecicio 7: Concatenar dos arreglos
Escribe una función que tome dos arreglos como parámetros y devuelva un nuevo arreglo que contenga los elementos de ambos arreglos concatenados.

Ejercicio 8:
Implementa una función que tome un arreglo de números como parámetro y devuelva el resultado de multiplicar todos los elementos.*/

//Escribe una función que tome dos números como parámetros y devuelva la suma de ambos.
//Escribe una función que tome un número como parámetro y devuelva true si es primo, o false si no lo es.
//Implementa una función que tome dos números como parámetros y devuelva el número más pequeño.



//TEORICAS
//¿Qué es la programación y por qué es importante?
//La progrmaacion es el proceso de crear instrucciones que puedan ser leidas por una computadora y a partir de ellas realizar
//una tarea específica.
//La programacion hoy en día es importante debido a la insercion de la tecnología en la vida cotidiana de las personas. Ha de ser util
//en muchas areas facilitando el acceso a la informacion,la automatización, la resolución de problemas, y la innovacion.

//Explica qué es un algoritmo y por qué es útil en programación.
//Un algoritmo es una serie de pasos ordenados, que sirven para realizar una tarea u objetivo.

//¿Qué es una variable y cómo se utiliza en programación?
//Una variable es un contenedor que se utiliza para almacenar datos. Consta de tres partes, un nombre para identificar la variable, el tipo
//de dato que puede contener, y el valor almacenado.

//¿Cuál es la diferencia entre una función y un método?
//

//Describe qué es un bucle y proporciona un ejemplo de uso.
//Un bucle es una secuencia de instrucciones que se repiten hasta que se deje de cumplir la condicion asignada.
/*let contador = 0;
while (contador < 3) {
    console.log("Hola, mundo!");
    contador++;
}*/

//¿Qué son los condicionales y cómo se utilizan en programación?
//Las condicionales son estructuras de control que permiten tomar decisiones basadas en condiciones predefinidas.

//Explica qué son los arreglos y cómo se manejan en programación.
//Los arreglos son variables que pueden almacenar más de un valor, de un mismo tipo de dato.

//¿Cuál es la diferencia entre una cadena de texto y un número en programación?
//Una cadena de texto y un número son tipos de datos distintos en programación. 


let arrayExample: number[] = [1, 5, 4, 6, 8, 7, 7]
import * as rls from "readline-sync"
//Ejercicio 1 Encuentra el promedio de un array de números

function average(arr: number[]): number {
    let sum: number = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return (sum / arr.length)
}
console.log(`El promedio de la suma de los arrays es: ${average(arrayExample)}`)

//Ejercicio 2 Encuentra el número más grande del array

function getBiggest(arr: number[]): number {
    let biggest: number = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > biggest) {
            biggest = arr[i];
        }
    }
    return biggest;
}

console.log(`El numero mas grande del array es: ${getBiggest(arrayExample)}`)

//Ejercicio 3 Encuentra el número más chico del array

function getSmallest(arr: number[]): number {
    let small: number = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < small)
            small = arr[i]
    }
    return small
}

console.log(`El numero mas chico del array es: ${getSmallest(arrayExample)}`)

//Ejercicio 4 Encuentra el número de veces que aparece un elemento en un array

function getNtimes(arr: number[], num: number): number {
    let nTimes = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            nTimes++
        }
    }
    return nTimes
}

console.log(`El numero 7 se repite ${getNtimes(arrayExample, 7)} veces`)

//Ejercicio 5 Sumar dos arreglos

let ArrDimension: number = rls.questionInt(`Ingrese la dimension del arreglo`)
let vector1: number[] = new Array(ArrDimension)
let vector2: number[] = new Array(ArrDimension)


function loadVectorsByUser(arr1: number[], arr2: number[]) {
    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = rls.questionInt(`Ingrese un numero en la posicion ${i} del primer vector`)
    }
    for (let i = 0; i < arr2.length; i++) {
        arr2[i] = rls.questionInt(`Ingrese un numero en la posicion ${i} del segundo vector`)
    }
}

function sumOfVectors(arr1: number[], arr2: number[]): number[] {
    let vectorSum: number[] = new Array(ArrDimension)
    for (let i = 0; i < arr1.length; i++) {
        vectorSum[i] = arr1[i] + arr2[i]
    }
    return vectorSum
}

loadVectorsByUser(vector1, vector2)
console.log(`La suma de los arreglos da: ${sumOfVectors(vector1, vector2)}`)

//Ejercicio 6: Ordenar arreglo


//Ejecicio 7: Concatenar dos arreglos

function concatenateVectors(arr1: number[], arr2: number[]): number[] {
    let vector3: number[] = []
    for (let i = 0; i < arr1.length; i++) {
        vector3[vector3.length] = arr1[i]
    }
    for (let i = 0; i < arr2.length; i++) {
        vector3[vector3.length] = arr2[i]
    }
    return vector3
}

console.log (`La concatenacion de los dos arreglos es: ${concatenateVectors(vector1, vector2)}`)


