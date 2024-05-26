/*Producto escalar

Cargue dos arreglos de dimensión N números (la cantidad es ingresada por el usuario)
Calcule el producto escalar entre los dos arreglos:

Ejemplo:
n =		3
v1 = 		0, 1, 2
v2 =		3, 4, 5
producto = 	14*/

import * as rls from "readline-sync"








//producto escalar

function cargarVector(v: number[], cantidad: number) {
    let indice: number;
    for (indice = 0; indice < cantidad; indice++) {
        v[indice] = rls.questionInt("Ingrese el valor en " + indice + ": ");
    }
}

let cantidad: number= rls.questionInt("Ingrese la longitud del arreglo: ");

let arreglo1: number[] = new Array(cantidad);
let arreglo2: number[] = new Array(cantidad);

console.log("Cargar vector 1");
cargarVector(arreglo1, cantidad);
console.log("Cargar vector 2");
cargarVector(arreglo2, cantidad);

function multiplicarVector(v1:number[], v2:number[], cantidad:number):number {
    let acum:number=0;
    
    for(let indice:number = 0; indice < cantidad; indice++ ){
        acum = acum + (v1[indice] * v2[indice]);
    }

    return acum;
}


console.log(multiplicarVector(arreglo1,arreglo2, 2));

/*function multiplicarVector(v1:number[], v2:number[], cantidad:number):number {
    let acum:number=0;
    
    for(let indice:number = 0; indice < cantidad; indice++ ){
        acum = acum + (v1[indice] * v2[indice]);
    }

    return acum;
}


console.log(multiplicarVector(arreglo1,arreglo2, 2));*/