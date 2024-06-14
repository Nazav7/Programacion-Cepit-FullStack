/*Matrices
Permiten representar más de 1 dimensión (a diferencia de los arreglos)
Si tienen 2 dimensiones, son como tablas (n filas y m columnas)
Si tienen 3 dimensiones, son como espacios con ancho, alto y profundidad (X, Y, Z)*/

/*identificador : tipo[][] = new Array (filas);
identificador[0] : tipo[] = new Array (columnas);
identificador[1] : tipo[] = new Array (columnas);
...*/

/*const miMatriz: number[][] = [
  [1, 2, 3],
  [4, 5, 6]
];*/

/*Ejemplo: tabla (2,3) (2 filas, 3 columnas)
  0 1 2
0 x x x
1 x x x*/

//crear una matriz de 2 filas
let tabla: number[][] = new Array(2); //array de dos elementos

//crear cada fila con 3 columnas
tabla[0] = new Array(3); // en la posicion(fila) 0 creamos un nuevo array de 3 elementos
tabla[1] = new Array(3); //en la posicion(fila) 1 creamos un nuevo array de 3 elementos

// Asignar valores a la matriz
tabla[0][0] = 1;
tabla[0][1] = 2;
tabla[0][2] = 3;
tabla[1][0] = 4;
tabla[1][1] = 5;
tabla[1][2] = 6;

//---------------------------------------------------------------------
// Función para crear una matriz de manera automatica
function crearMatriz(filas: number, columnas: number): number[][] {
  let matriz: number[][] = new Array(filas);
  for (let i: number = 0; i < filas; i++) {
    matriz[i] = new Array(columnas);
  }
  return matriz;
}

// llamada a la funcion para crear matriz de 2x3 y guardamos valor
let matriz = crearMatriz(2, 3);

// Asignar valores a la matriz
matriz[0][0] = 1;
matriz[0][1] = 2;
matriz[0][2] = 3;
matriz[1][0] = 4;
matriz[1][1] = 5;
matriz[1][2] = 6;

console.log(`Matriz con funcion:`, matriz, `\n`);

//---------------------------------------------------------------------
//Pare recorrer una matriz necesitamos dos indices

//Funcion para recorrer matriz
function recorrerMatriz(matriz: number[][]) {
  const nroFilas = matriz.length;
  const nroColumnas = matriz[0].length; // Suponiendo que todas las filas tienen la misma longitud, sino hacemos otra variable

  for (let i: number = 0; i < nroFilas; i++) {
    for (let j: number = 0; j < nroColumnas; j++) {
      console.log(matriz[i][j]);
    }
  }
}

// Ejemplo de uso
console.log(`funcion recorrer matriz: `)
recorrerMatriz(matriz);


//funcion sin console, buscar push
/*function obtenerElementosMatriz(matriz: number[][]): number[] {
    const elementos: number[] = [];
    const nroFilas = matriz.length;
    const nroColumnas = matriz[0].length;

    for (let fila = 0; fila < nroFilas; fila++) {
        for (let columna = 0; columna < nroColumnas; columna++) {
            elementos.push(matriz[fila][columna]);
        }
    }

    return elementos;
}*/

//-----------------------------------------------------------------------
//Funcion para cargar matriz con valores aleatorios entre 0 y numAzar
function cargar(matriz: number[][], numAzar: number): number[][] {
  const filas = matriz.length;
  const columnas = matriz[0].length;
  for (let f = 0; f < filas; f++) { //o (let f = 0; f < matriz.length; f++)
    for (let c = 0; c < columnas; c++) {// o (let c = 0; c < matriz[f].length; c++)
      matriz[f][c] = Math.floor(Math.random() * numAzar);
    }
  } return matriz
}

let matriz1 = crearMatriz(3, 3);

console.log(`funcion que carga matriz con numeros random:`, cargar(matriz1, 10)); //cuando lo uno con + en consola se muestra como string

//----------------------------------------------------------------------------
//Muestra por pantalla una matriz de fxc de a una fila por línea
//con console.log en la funcion
function mostrarMatriz(matriz: number[][]): void {
  for (let f = 0; f < matriz.length; f++) {
    let cadena: string = ''; // Resetear la cadena para cada fila. Asi se imprime por filas.
    for (let c = 0; c < matriz[f].length; c++) {
      cadena += `${matriz[f][c]} `;
    }
    console.log(cadena); // .trim() para eliminar espacios adicionales
  }
}
console.log(`Matriz mostrada por pantalla en forma de tabla:`)
mostrarMatriz(matriz1);

//la funcion con return sin console.log
function convertirMatriz(matriz: number[][]): string {
  let resultado: string = ``
  for (let f = 0; f < matriz.length; f++) {
    let cadena: string = `` //Dentro del bucle externo que recorre las filas, la variable cadena se reinicializa a una cadena vacía ('') para cada fila.
    for (let c = 0; c < matriz[0].length; c++) {
      cadena += `${matriz[f][c]} `; // primero guarda el dato de la primer fila y la primer columna...
    }
    resultado += cadena + '\n'
  } return resultado.trim()
}

console.log(`Matriz mostrada por pantalla en forma de tabla`)
console.log(convertirMatriz(matriz1))
