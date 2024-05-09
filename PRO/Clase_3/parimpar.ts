/*•Desarrollar un algoritmo que dado un número, ingresado por el usuario determine si el número es par o impar y le informe al usuario
•En el caso de ser 0 (cero) el algoritmo deberá informarlo*/

import * as rls from "readline-sync";
//número ingresado por el usuario
let nroDeseado : number = rls.questionInt ("Ingrese un número para verificar si es par o impar: ")
//verificar si el número es par o impar
if (nroDeseado == 0) {
    console.log("El número ingresado es 0")
} else {
    if (nroDeseado & 2) {
        console.log("El número ingresado es par")
    } else {
        console.log("El número ingresado es impar")
    }
}