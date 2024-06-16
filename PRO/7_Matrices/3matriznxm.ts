/*• Crear una matriz de N filas y M columnas deseadas por el usuario
• Completar la matriz con los números que el usuario ingrese
• Mostrar el contenido de la matriz por pantalla:
El valor de la celda 00 es 1
...*/


import * as rls from "readline-sync"

// solicitar al usuario la cantidad de filas y columnas para la matriz
let columnsInput: number = rls.questionInt(`Ingrese cantidad de filas: `)
let rowsInput: number = rls.questionInt(`Ingrese cantidad de columnas: `)

// crear matriz con valores ingresados por el usuario
createMatrix(columnsInput, rowsInput)

// llenar la matriz matrixNxM con dimensiones ingresadas por el usuario
loadMatrixWithUserInput(matrixNxM)

// mostrar la matriz por pantalla
printMatrix(matrixNxM)

//funcion para crear matriz con dimensiones ingresadas por el usuario
function createMatrix(columns: number, rows: number): number[][] {
    let matrix: number[][] = new Array(columns);
    for (let i = 0; i < columns; i++) {
        matrix[i] = new Array(rows);
    }
    return matrix;
}

//funcion para cargar matriz con valores ingresados por el usuario
function loadMatrixWithUserInput(matrix: number[][]): number[][] {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = rls.questionInt(`Ingrese el valor de [${[i]},${[j]}]: `)
        }
    } return matrix
}

//funcion para mostrar el contenido por pantalla
function printMatrix (matrix: number[][]) {
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(`El valor de la celda ${i},${j} es: ${matrix[i][j]}`)
    }    
} 
}