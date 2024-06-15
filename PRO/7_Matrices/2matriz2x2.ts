//Ejercicio: Matriz de 2x2
//Definir una matriz de 2x2 e inicializarla con los siguientes valores: 10, 20, 30, 40

const matrix2x2: number[][] = new Array(2)
matrix2x2[0] = new Array(2)
matrix2x2[1] = new Array(2)

matrix2x2[0][0] = 10
matrix2x2[0][1] = 20
matrix2x2[1][0] = 30
matrix2x2[1][1] = 40

printMatrix(matrix2x2)

function printMatrix(matrix: number[][]) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            console.log(`matriz[${i},${j}] = ${matrix[i][j]}`)
        }
    }
}

/*Usando return
function matrixToString(matrix: number[][]): string {
    let result = "";
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            result += matrix[i][j] + " ";
        }
        result += "\n"; // Salto de línea al final de cada fila
    }
    return result;
}*/