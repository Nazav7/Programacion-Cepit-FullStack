/*Algoritmo Eureka
          Definir contador Como Entero
          Definir acierto Como Logico
          Definir clave Como Texto
          contador = 0
          Repetir
                      Escribir "Introduzca la clave"
                      Leer clave
                      Si clave = "eureka" Entonces
                                 acierto = Verdadero
                     FinSi
                     contador = contador + 1
         Hasta Que (contador = 3 O acierto = Verdadero)
         Si acierto Entonces
                  Escribir "Clave correcta"
         Sino
                  Escribir "Ya no tiene más intentos"
         FinSi
FinAlgoritmo*/

import * as rls from "readline-Sync"

let contador: number = 0;
let claveReal: boolean = false;
let claveUsuario: string;

while (contador < 3 && claveReal) {
    claveUsuario = rls.question("Introduzca la clave:");

    if (claveUsuario == "eureka") {
        claveReal = true;
    }

    contador++;
}

if (claveReal) {
    console.log("Clave correcta");
} else {
    console.log("Ya no tiene más intentos");
}