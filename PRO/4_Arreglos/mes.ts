import * as rls from "readline-sync"

let arregloMes : string[]= [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ]

let numMes : number = rls.questionInt("Coloque el numero del mes: ")

let indice : number = numMes - 1
console.log("El mes es", arregloMes[indice])


/* Asi se haria de mal manera

import * as rls from 'readline-sync';

let nroMes : number = rls.questionInt("Indique el numero de mes que le interesa: ");
switch (nroMes) {
case 1: console.log("El mes es Enero"); break;
case 2: console.log("El mes es Febrero"); break;
case 3: console.log("El mes es Marzo"); break;
case 4: console.log("El mes es Abril"); break;
case 5: console.log("El mes es Mayo"); break;
case 6: console.log("El mes es Junio"); break;
case 7: console.log("El mes es Julio"); break;
case 8: console.log("El mes es Agosto“); break;
case 9: console.log("El mes es Septiembre"); break;
case 10: console.log("El mes es octubre"); break;
case 11: console.log("El mes es Noviembre“); break;
case 12: console.log("El mes es Diciembre"); break;
default: console.log("ud no ha escrito un numero de mes valido");*/