/*Crear una matriz cuadrada (5x5) donde cada fila impar de la matriz son ceros y el resto son unos.
Luego un usuario ingresará una posición de la matriz, (un valor para una fila y otro para la columna).
En esa posición deberá reemplazar el valor existente por un 5.

Ej. de cómo se debería ver la salida:
[1, 5, 1, 1, 1]
[0, 0, 0, 0, 0]
[1, 1, 1, 1, 1]
[0, 0, 0, 0, 0]
[1, 1, 1, 1, 1]
*/

import * as rls from "readline-sync"

//crear matriz de 5x5 con funcion
let matrix5x5 : number[][] = createMatrix(5, 5)

//cargar valor de la matriz con 0 o 1 dependiendo si la fila es par o impar, con funcion 
loadMatrixParImpar(matrix5x5)

//solicitar al usuario que ingrese un numero para cambiar el valor de una posición aleatoria en la matriz
let userNumber: number = rls.questionInt(`Ingrese un numero para cambiar el valor de una posicion aleatoria de la matriz: `)

//cambiar el valor de una posición aleatoria en la matriz con el numero ingresado por el usuario
matrix5x5[Math.floor(Math.random() * 5)][Math.floor(Math.random() * 5)] = userNumber;

//imprimir la matriz, con funcion
printMatrix(matrix5x5);

//funcion para crear matriz
function createMatrix(filas: number, columnas: number): number[][]{
let matrix: number[][] = new Array(filas)
for (let f: number = 0; f < filas; f++) {
        matrix[f] = new Array(columnas)    
} return matrix
}

//funcion para cargar matriz con 0 o 1 dependiendo si la fila es par o impar
function loadMatrixParImpar(matrix: number[][]): number[][] {
for (let f = 0; f < matrix.length; f++) {
    for (let c = 0; c < matrix[0].length; c++) {
        if (f % 2 == 0) {
            matrix[f][c] = 1
        } else{
            matrix[f][c] = 0
        }  
    }
} return matrix
}

//funcion para mostrar matriz
function printMatrix(matriz: number[][]): void {
    for (let f = 0; f < matriz.length; f++) {
      let cadena: string = ''; // Resetear la cadena para cada fila. Asi se imprime por filas.
      for (let c = 0; c < matriz[f].length; c++) {
        cadena += `${matriz[f][c]}, `;
      }
      console.log(`[${cadena.trim()}]`); // .trim() para eliminar espacios adicionales
    }
  }
