/*Imprimir contenido de un arreglo
Sabemos recorrer un arreglo de forma secuencial ¿Pero cómo lo hacemos de forma recursiva?
Recursion: funcion que se llama a si misma*/

let vector: number[] = [0, 3, 1, 4, 2];

//Imprimir arreglo de manera SECUENCIAL:
function imprimirArregloSec(arreglo: number[]) {
    let indice: number;
    for (indice = 0; indice < arreglo.length; indice++) {
        console.log(`posición ${indice} tiene: ${arreglo[indice]}`);
    }
}

imprimirArregloSec(vector);

//Imprimir arreglo de manera RECURSIVA:
function imprimirArregloRec(arreglo: number[], indice: number = 0): void {
    if (indice < arreglo.length) {
        console.log(`posición ${indice} tiene: ${arreglo[indice]}`);
        imprimirArregloRec(arreglo, indice + 1);  // Llamada recursiva
    }
}

imprimirArregloRec(vector);

//Factorial
//Calcular factorial de manera SECUENCIAL
function calcularFactorialSec(n: number): number {
    let resultado: number = 1;
    let indice: number = 1;
    for (indice = 2; indice <= n; indice++) {
        resultado = resultado * indice;
    };
    return resultado;
}

console.log("factorial secuencial" + calcularFactorialSec(8))

//Calcular factorial de manera RECURSIVA
function calcularFactorialRec(n: number): number {
    let resultado: number = 1;
    if (n == 0) { // o if (n <= 1)
        resultado = 1;
    } else {
        resultado = n * calcularFactorialRec(n - 1);
    };
    return resultado;
}

console.log("factorial recursivo" + calcularFactorialRec(8))

//Invertir arreglo de manera SECUENCIAL //en la carpeta de arreglos hay una manera mas facil de hacerlo con for y while
function invertirArregloSec(arreglo: number[]): number[] {
    let aux: number;
    for (let i = 0; i < arreglo.length / 2; i++) {
        aux = arreglo[i];
        arreglo[i] = arreglo[arreglo.length - 1 - i];
        arreglo[arreglo.length - 1 - i] = aux;
    }
    return arreglo;
}

console.log(invertirArregloSec(vector))

//Invertir arreglo de manera RECURSIVA //Vuleve a ordenarse porque ya la inverti arriba
function invertirArregloRec(arreglo: number[], indiceIzq: number, indiceDer: number): number[] {
    let aux: number;
    if (indiceIzq < indiceDer) {
        aux = arreglo[indiceIzq];
        arreglo[indiceIzq] = arreglo[indiceDer];
        arreglo[indiceDer] = aux;
        invertirArregloRec(arreglo, indiceIzq + 1, indiceDer - 1);
    };
    return arreglo
}

console.log(invertirArregloRec(vector, 0, vector.length-1))
