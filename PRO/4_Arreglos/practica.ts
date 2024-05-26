/*Ejercicio 1: Encuentra el promedio de un array de números
Escribe una función que reciba el array de números como parámetro y devuelva el promedio de dichos números.
La función debe recorrer el array usando un bucle for.

Ejercicio 2: Encuentra el número más grande del array
Escribe una función que reciba el array de números como parámetro y devuelva el núero más grande del array.

Ejercicio 3: Encuentra el número más chico del array
Escribe una función que reciba el array de números como parámetro y devuelva el número más chico del array.

Ejercicio 4: Encuentra el número de veces que aparece un elemento en un array
Escribe una función que reciba un array de números y un número como parámetros, y devuelva la cantidad de veces que el número aparece en el array.
La función debe recorrer el array usando un bucle for.*/

let arrayExample: number[] = [1, 5, 4, 6, 8, 7]

//Ejercicio 1

function average (arr : number[]) : number {
    let sum : number = 0
    for (let i=0; i<arr.length; i++){
        sum += arr[i] 
    }
    return (sum / arr.length)
}
console.log(`El promedio de la suma de los arrays es: ${average(arrayExample)}`)

//Ejercicio 2

function getBiggest(arr : number[]) : number{
    let biggest: number = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > biggest) {
            biggest = arr[i];
        }       
    }
    return biggest;
}
