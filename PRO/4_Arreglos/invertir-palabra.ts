import * as rls from "readline-sync"

/*INVERTIR POSICIONES DEL ARREGLO, ejemplo: 
arreglo[1,2,3]
i[0]=3, i[1]=2, i[2]=1*/

let palabra: string = rls.question("Ingrese la palabra que quiera invertir: ")
let arregloLetras: string[] = palabra.split("") // Convertir la palabra en un array de caracteres
/*En JavaScript y TypeScript, una cadena de texto puede ser tratada como un array, pero existen diferencias en su manipulacion.
Inmutabilidad de las cadenas de texto:
Las cadenas de texto en JavaScript y TypeScript son inmutables, es decir que no puedes cambiar los caracteres individuales
directamente. Por ejemplo, no puedes hacer palabra[0] = 'a'; para cambiar el primer carácter de la cadena palabra.*/
function invertirVector(v: string[]) : void {
    let indiceIzq: number = 0;
    let indiceDer: number = v.length - 1;
    let aux: string;
    while (indiceIzq < indiceDer) {
        aux = v[indiceIzq];
        v[indiceIzq] = v[indiceDer];
        v[indiceDer] = aux;
        indiceIzq++;
        indiceDer--;
    }
}

console.log(invertirVector(arregloLetras))

/*function invertirPalabra(v: string[], cantidad: number) {
    let aux: string;
    for (let i = 0; i < cantidad / 2; i++) {
        aux = v[i];
        v[i] = v[cantidad - 1 - i];
        v[cantidad - 1 - i] = aux;
    }
}*/