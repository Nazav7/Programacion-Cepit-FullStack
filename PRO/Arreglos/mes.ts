import * as rls from "readline-sync"

let arregloMes : string[]= [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ]

let numMes : number = rls.questionInt("Coloque el numero del mes ")

let indice : number = numMes - 1
console.log("El mes es", arregloMes[indice])
