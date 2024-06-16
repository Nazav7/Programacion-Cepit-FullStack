/*Ejercicio: Suma de Columna

• Crear una matriz N x M y llenarla con los números que el usuario desee
• Sume todos los números que componga la primera columna*/

import * as rls from "readline-sync"

// crear matriz nxm
let matrix2x3: number[][] = createMatrixNxM(2, 3)

// llenar matriz con valores ingresados por el usuario
loadMatrixWhitUserInput(matrix2x3)

// sumar los numeros de la primer columna y mostrarlo por pantalla
console.log(`La suma de la primer columna es ${sumFirstRow(matrix2x3)}`)

// mostrar suma de numeros por consola

//funcion para crear matriz
function createMatrixNxM(rows: number, columns: number): number[][] {
    let matrix: number[][] = new Array(rows)
    for (let i = 0; i < rows; i++) {
        matrix[i] = new Array(columns)
    } return matrix
}

//funcion para llenar matriz con valores ingresados por el usuario
function loadMatrixWhitUserInput(matrix: number[][]) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = rls.questionInt(`Ingrese un valor para la celda ${[i]},${[j]}: `)
        }
    }
}

//funcion para sumar numeros de la primer columna de la matriz
function sumFirstRow(matrix: number[][]): number {
    let suma: number = 0
    for (let i = 0; i <= 0; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            suma += matrix[0][j]
        }
    } return suma
}