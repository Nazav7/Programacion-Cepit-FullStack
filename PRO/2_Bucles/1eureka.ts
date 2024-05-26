/*Escribir un algoritmo que nos pida una clave y verifique que sea la correcta
• La clave es la palabra “eureka”
• Solo tenemos 3 intentos para acertar, si fallamos los 3 intentos el sistema mostrará un mensaje
indicándonos que hemos agotado todas las oportunidades
• Si acertamos la clave, saldremos directamente del programa*/

/*pedir clave al usuario. const ClaveUsuario
mientras const sea distinta de Eureka y el contador sea menor a 3
    mostramos "la constraseña es incorrecta"
    
    si intentos es igual a 3, entonces mostramos "se agotaron los intentos"

    mostramos "constraseña correcta"*/

import * as rls from "readline-Sync"

const claveEureka : string = "eureka"
let claveUsuario : string = ""
let i : number = 0

while (i <= 2 && claveUsuario != claveEureka) {
    claveUsuario = rls.question ("Ingrese la clave (eureka): ")
    i++
}

if (claveUsuario != claveEureka) {
    console.log("Se agotaron los intentos")
} else {
    console.log("La clave es correcta")
}
//console.log("La clave es incorrecta")