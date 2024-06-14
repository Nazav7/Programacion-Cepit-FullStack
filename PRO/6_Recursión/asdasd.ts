
let vector: number[] = [0, 3, 1, 4, 2];

//Invertir arreglo de manera RECURSIVA
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