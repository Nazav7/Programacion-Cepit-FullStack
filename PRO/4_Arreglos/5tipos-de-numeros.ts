//lo hice completamente sola
/*Tipos de Números en Arreglo

• Almacene en un arreglo de dimensión N números (la cantidad es ingresada por el usuario)
• Muestre cuántos números son positivos, cuántos son negativos y cuántos ceros hay

Ejemplo:
v = 0, -7, -9, 1, 0, 0
La salida es: 1 positivos, 2 negativos y 3 ceros*/

/*
inpuuts
cantidad de numeros del arreglo
numeros a almacenar

outputs
numeros positivos
numeros negativos
ceros*/

import * as rls from "readline-sync"

const userLength: number = rls.questionInt(`Ingrese la dimension del arreglo: `)

let arrayNumbers: number[] = new Array(userLength)
let positives: number = 0
let negatives: number = 0
let zero: number = 0

//Iterar para pedir valores al usuario
for(let i=0; i<arrayNumbers.length; i++){
    arrayNumbers[i] = rls.questionInt(`Ingrese el valor de la posicion ${i}: `)
}
// ASI NO FUNCIONA porque le tengo q pasar un numero uno por uno arrayNumbers = [rls.questionInt(`Ingrese el valor de la posicion ${i}`)]

//La maquina necesita verificar cada numero. Para eso usamos un FOR
for(let i=0; i<arrayNumbers.length; i++){
    if (arrayNumbers[i]>0) {
        positives = positives + 1
    }else if(arrayNumbers[i]<0){
        negatives = negatives + 1
    }else if(arrayNumbers[i]==0){
        zero = zero + 1
    }
}

console.log(`Hay ${positives} numeros positivos, ${negatives} negativos y ${zero} ceros`)

