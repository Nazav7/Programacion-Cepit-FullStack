/* Escriba un programa que solicite 10 notas al usuario y calcule el promedio de las mismas. Luego, muestre el resultado por pantalla.
Calcular el promedio con While*/

/*solicitar 10 notas al usuario
sumar las 10 notas
dividir la suma por 10
mostrar el resultado por pantalla*/

import * as rls from "readline-Sync";

let nota, suma, promedio : number
suma = 0

for (let i = 0; i <= 9; i++) {
    nota = rls.questionFloat ("Ingrese la nota= ")
    suma += nota
}
promedio = suma / 10
console.log("El promedio es= " + promedio )