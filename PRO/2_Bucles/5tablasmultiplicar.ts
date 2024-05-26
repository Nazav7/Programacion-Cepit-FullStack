/*Tablas de Multiplicación
• Diseñar un algoritmo que muestre por pantalla la tabla de multiplicación del número ingresado por el usuario
• Para definir hasta qué número desea que muestre la tabla de multiplicación, el usuario también deberá ingresar dicho valor

Ingrese el número: 9
Ingrese hasta qué número: 4
9 x 1 = 9
9 x 2 = 18
9 x 3 = 27
9 x 4 = 36*/

import * as rls from "readline-sync"

const userTable : number = rls.questionInt("What multiplication table do you want? Enter a number: ")
const userFinalNumber : number = rls.questionInt("Up to what number do you want the multiplication table?")
let result : number = 0

for (let i=1; i<=userFinalNumber; i++){
    result= userTable * i
    console.log(`${userTable} x ${i} = ${result}`) //va imprimiendo cada numero
}
