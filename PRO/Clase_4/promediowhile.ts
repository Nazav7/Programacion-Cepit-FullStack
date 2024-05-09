/* Escriba un programa que solicite 10 notas al usuario y calcule el promedio de las mismas. Luego, muestre el resultado por pantalla.
Calcular el promedio con While*/

import * as rls from "readline-Sync";

let nota, suma, promedio, i : number
suma=0
i=0

//solicitar 10 notas al usuario. Sumar las 10 notas. (Mientras el contador sea menor a )
while (i <= 9) {
    nota = rls.questionFloat ("Ingrese la nota= ")
    suma += nota
    i++ 
    //tambien se puede hacer i+=1 
}

//Dividir la suma por 10. mostrar el resultado por pantalla*/
promedio = suma / 10
console.log("El promedio es= " + promedio)





/*Algoritmo Promedio10Para
Definir nota, suma, promedio Como Real
Definir contador Como Entero
suma = 0
Para contador = 1 Hasta 10 Con Paso 1 Hacer
Escribir "Ingrese la nota ", contador, ":"
Leer nota
suma = suma + nota
FinPara
promedio = suma / 10
Escribir "El promedio de las notas es: ", promedio
FinAlgoritmo*/