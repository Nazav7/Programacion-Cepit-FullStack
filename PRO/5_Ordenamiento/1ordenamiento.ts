//Implemente un algoritmo de ordenamiento con el metodo Bubble Sort, para que ordene un arreglo de longitud N en orden DESCENDENTE.

import * as rls from "readline-sync"

//variables
let dimension: number = rls.questionInt(`Ingrese la longitud del arreglo: `)
let vector: number[]= new Array(dimension)

//llamadas
loadVectorRandom(vector)
console.log(`Arreglo: ${vector}`)
console.log(`Arreglo en orden descendente: ${bubble(vector)}`)

//funcion para cargar arreglo con numero aleatorio
function loadVectorRandom(arr: number[]){
    for (let i = 0; i < arr.length; i++) {
        vector[i] = Math.floor(Math.random()*10)
    }
}
/*function loadVector(arr: number[]){
    for (let i = 0; i < arr.length; i++) {
        vector[i] = rls.questionInt(`Ingrese numero de arreglo en posicion ${i}: `)
    }
}*/

//funcion para ordenar numeros de mayor a menor
function bubble(arr: number[]): number[]{
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
           if (arr[j] <arr[j+1]) {
            let aux = arr[j]
            arr[j]=arr[j+1]
            arr[j+1] = aux
           }
        }
    }
    return arr
}

