//realizado por mi
/*El DT de los infantiles del equipo de fútbol desea saber el promedio de la edad de los chicos. 
La edad de los chicos va de 3 a 7 años. Las edades son cargadas al azar (use la función aleatorio(menorValor, mayorValor)),
es decir aleatorio (3,7).
Muestre todas las edades y el promedio de las mismas.*/

import * as rls from "readline-sync"
//variable para guardar cantidad de chicos y su posterior arreglo
let arrLength : number = rls.questionInt(`Ingrese la cantidad de jugadores: `)
let agesOfChildren : number[] = new Array (arrLength)
let higherValue: number = 7
let lowerValue: number = 3

//funcion para obtener numero aleatorio
function getRandomNumber(parHigherValue: number, parLowerValue: number) : number {
    return Math.floor(Math.random() * (parHigherValue - parLowerValue + 1)) + parLowerValue // (0 a <1 * 5) + 3
    // Math.floor redondea hacia abajo (7 - 3 + 1 = 5) ej: 0.256 * 5 = 1.28 + 3
    //                         valores de 0 a 4,999... + 3 para q no inicie en 0
}  

//funcion para cargar vector con numero aleatorio
function loadVector(parArray:number[]){
    for (let i = 0; i < parArray.length; i++) {
        agesOfChildren[i] = getRandomNumber(lowerValue,higherValue)     
    }
}

//funcion para escribir edades en una linea
function writeInALine (parArray: number[]) : string{
    let vector: string = "";
    for (let i = 0; i < parArray.length; i++) {
            vector += `${parArray[i]} `;
        }
    return vector //trim( creo q elimina ultimo espacio)
}

//funcion para calcular promedio
function average (parArr: number[]) : number {
    let sum : number = 0
    for (let i = 0; i < parArr.length; i++) {
            sum += parArr[i];        
        }
    return (sum / parArr.length)
}

loadVector(agesOfChildren)
console.log(`Las edades de los jugadores son ${writeInALine(agesOfChildren)} y el promedio de las mismas es: ${average(agesOfChildren)} `)
