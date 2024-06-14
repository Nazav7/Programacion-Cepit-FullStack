/*Producto escalar

Cargue dos arreglos de dimensión N números (la cantidad es ingresada por el usuario)
Calcule el producto escalar entre los dos arreglos:

Ejemplo:
n =		3
v1 = 		0, 1, 2
v2 =		3, 4, 5
producto = 	14*/

import * as rls from "readline-sync"

//producto escalar ejemplo profesora

function cargarVector(arr: number[]) { //puedo sacar el parametro cantidad
    for (let i = 0; i < arr.length; i++) { // y puedo poner v.length
        arr[i] = rls.questionInt("Ingrese el valor en " + i + ": ");
    }
}

let cantidad: number= rls.questionInt("Ingrese la longitud del arreglo: ");

let arreglo1: number[] = new Array(cantidad);
let arreglo2: number[] = new Array(cantidad);

console.log("Cargar vector 1");
cargarVector(arreglo1);
console.log("Cargar vector 2");
cargarVector(arreglo2);

function multiplicarVector(arr1:number[], arr2:number[]):number {
    let acum:number=0;
    
    for(let i:number = 0; i < arr1.length; i++ ){
        acum = acum + (arr1[i] * arr2[i]);
    }

    return acum;
}

console.log(multiplicarVector(arreglo1,arreglo2));