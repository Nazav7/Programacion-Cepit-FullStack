/*• Realice un programa que devuelva la potencia de un número.
• La base y el exponente deben ser ingresados por teclado.
• Sólo deben admitirse exponentes mayores o iguales a cero.
• Recuerde que el resultado de un numero elevado a 0 es 1.
• Separe la lógica de calcular la potencia utilizando métodos.*/

import * as rls from "readline-sync"

let base : number = rls.questionInt("Ingrese la base de la potencia: ")
let exponent : number = rls.questionInt("Ingrese el exponente de la potencia: ")

//Funcion que calcula la potencia
function calculatePower (base: number, exponent: number): number {
    let result : number = 0
    if (exponent == 0) {
        result = 1
    } else {
        result = base ** exponent
    }
    return result
}

//Funcion que verifica si los valores son correctos para mostrar el resultado
function showPower (base: number, exponent: number): any {
    let result : number = 0
    while (exponent <0) {
    console.log("No se admiten valores menores a 0")
    exponent = rls.questionInt("Vuelva a ingresar el exponente de la potencia: ")
}
if (exponent >=0) {
    result = calculatePower (base, exponent)
    console.log("El resultado de la potencia es: " + result)
}
}

//Imprimimos resultado
showPower (base, exponent)

/* let functionResult : number = 0
if (exponent <0) {
    console.log("No se admiten valores menores a 0") 
}else{
functionResult = calculatePower (base, exponent)
console.log("El resultado de la potencia es: " + functionResult)
}*/