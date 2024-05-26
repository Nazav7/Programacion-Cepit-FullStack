import * as rls from "readline-sync"


let palabra: string = rls.question("Ingrese la palabra que quiera invertir: ")
let arregloLetras: string[] = palabra.split("")

function invertirVector(v: string[], cantidad: number) {
    let indiceIzq: number = 0;
    let indiceDer: number = cantidad - 1;
    let aux: string;
    while (indiceIzq < indiceDer) {
        aux = v[indiceIzq];
        v[indiceIzq] = v[indiceDer];
        v[indiceDer] = aux;
        indiceIzq++;
        indiceDer--;
    }
}

console.log(invertirVector)

/*function invertirPalabra(v: string[], cantidad: number) {
    let aux: string;
    for (let i = 0; i < cantidad / 2; i++) {
        aux = v[i];
        v[i] = v[cantidad - 1 - i];
        v[cantidad - 1 - i] = aux;
    }
}*/
