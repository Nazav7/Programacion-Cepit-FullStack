
//Algortimo de ordenamiento: Bubble sort


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



//Burbuja
function bubbleSort(array: number[]): number[] {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // Intercambiar si el elemento encontrado es mayor que el siguiente
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

// Ejemplo de uso
let lista: number[] = [64, 34, 25, 12, 22, 11, 90];
let listaOrdenada: number[] = bubbleSort(lista);
console.log("Lista ordenada:", listaOrdenada);