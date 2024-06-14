//Algortimo de ordenamiento: Bubble sort. 1 6 4 7 3 --> 1 3 4 6 7, o, 7 6 4 3 1

//Implementación sencilla
function bubbleSort(array: number[]): number[] {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // Intercambiar si el elemento encontrado es mayor que el siguiente
                let aux = array[j]; //antes guardo arrayJ
                array[j] = array[j + 1];
                array[j + 1] = aux;
            }
        }
    }
    return array;
}

let lista: number[] = [64, 34, 25, 12, 22, 11, 90];
let listaOrdenada: number[] = bubbleSort(lista);
console.log("Lista ordenada:", listaOrdenada);

//Implementación más sencilla de Bubble Sort (omite la variable i en el segundo for)
function bubbleSortBasic(arr: number[]): number[] {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let aux = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = aux;
            }
        }
    }
    return arr;
}

let arr = [3, 2, 1];
let sortedArr = bubbleSortBasic(arr);
console.log(sortedArr); // [1, 2, 3]

//Implementación de Bubble Sort con funciones
//En esta funcion vamos a poder cambiar las posiciones "i" y "j"
function intercambiar(arreglo: number[], i: number, j: number) {
    let aux: number;
    aux = arreglo[i];
    arreglo[i] = arreglo[j];
    arreglo[j] = aux;
}

//Compara los valores de las posiciones "i" y "j" del arreglo que pasamos por parametro
function comparar(arreglo: number[], i: number, j: number): number {
    let comparacion: number;
    if (arreglo[i] === arreglo[j]) {
        comparacion = 0;
    } else if (arreglo[i] < arreglo[j]) {
        comparacion = -1;
    } else {
        comparacion = 1;
    }
    return comparacion;
}

//Aplica el algoritmo Bubble sort
function burbuja(arreglo: number[], cantidad: number) {
    for (let i: number = 0; i < cantidad; i++) {
        for (let j: number = 0; j < (cantidad - 1); j++) {
            if (comparar(arreglo, j, j + 1) == 1) {
                intercambiar(arreglo, j, j + 1);
            }
        }
    }
}

let limite: number = 10;
let arreglo: number[] = new Array(limite);
// Ordena el arreglo usando el algoritmo burbuja
burbuja(arreglo, limite);
// Imprime el arreglo después de ordenarlo
console.log("Arreglo después de ordenar:");
//escribirEnUnaLinea(arreglo, limite);


// Implementación tradicional de Bubble Sort utilizando do-while
function bubbleSortTraditional(arr: number[]): number[] {
    let n = arr.length;
    let swapped: boolean;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Intercambiar arr[i] y arr[i + 1]
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        n--; // Optimización: reducir la longitud del array para la siguiente iteración
    } while (swapped);
    return arr;
}

