/*•En una prueba, un piloto tiene que completar 4 vueltas
•Se necesita un programa que permita ingresar por teclado el tiempo de cada vuelta
•El programa debe retornar el tiempo total y el promedio de vuelta*/

import * as rls from "readline-sync"
//Paso 1: Solicitar que se ingrese el tiempo de cada vuelta
let vuelta1 : number = rls.questionFloat("Ingrese el tiempo de la vuelta 1: ");
let vuelta2 : number = rls.questionFloat("Ingrese el tiempo de la vuelta 2: ");
let vuelta3 : number = rls.questionFloat("Ingrese el tiempo de la vuelta 3: ");
let vuelta4 : number = rls.questionFloat("Ingrese el tiempo de la vuelta 4: ");

//Paso 2: El programa debe retornar el tiempo total y el promedio de la vuelta
let resultadoVuelta : number = vuelta1 + vuelta2 + vuelta3 + vuelta4
let promedio : number = resultadoVuelta / 4
console.log("El tiempo total de la vuelta es: " + resultadoVuelta)
console.log("El promedio de la vuelta es: " + promedio)






/*Paso 1: Solicitar que se ingrese el tiempo de cada vuelta
let tiemposVuelta: number[] = [];
for (let i = 0; i < 5; i++) {
    let tiempo: number = readlineSync.questionFloat(`Ingrese el tiempo de la vuelta ${i+1}: `);
    tiemposVuelta.push(tiempo);*/


/*for (let i=0; i<4; i++) {
    console.log(`hola mundo, esta es mi iteracion numero ${i}`)
}*/