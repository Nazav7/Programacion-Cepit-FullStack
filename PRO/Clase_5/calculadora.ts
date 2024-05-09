/*Realice una calculadora que sume o reste según el pedido del usuario. 
El usuario deberá ingresar 2 números por teclado
Luego ingresará una opción: 
Si ingresa 1 los números se sumarán
Si ingresa 2 los números se restarán
Si ingresa cualquier otra tecla termina el programa
Para informar el resultado de la operación debe usar el siguiente formato (40 guiones ‘-’ ):*/

//Pedir al usuario que ingrese dos numeros
//Luego si ingresa 1 se sumaran, 2 se restaran, otra tecla termina el programa


import * as rls from "readline-sync";

let i : number, linea : string;
let numero1 : number = rls.questionInt("Ingrese el primer número: "); ;
let numero2 : number = rls.questionInt("Ingrese el segundo número: "); ;
let opcionMenu : number = rls.questionInt("Ingrese 1 para sumar, 2 para restar, cualquier otro numero para salir: ");
let resultadoFuncion: number = 0

// Función para calcular el resultado en base a la opción elegida por el usuario
function calcularResultado (numero1:number, numero2:number, opcionMenu:number):number {
	let resultado:number=0;
    if (opcionMenu == 1) {
        resultado = numero1 + numero2;   
    } else if (opcionMenu == 2) {
        resultado = numero1 - numero2;   
    } else if (opcionMenu !== 1 && opcionMenu !== 2) {
        console.log("Saliste del programa")
    }
    return resultado;
}

// Llamar a la función para calcular el resultado si la opción del menú es válida
if (opcionMenu == 1 || opcionMenu == 2) {
    resultadoFuncion = calcularResultado (numero1, numero2, opcionMenu)
    console.log( "El resultado es: " + resultadoFuncion)
}

/* No funciona porque tengo que convertir opcionMenu a un número antes de realizar la comparación. Con la funcion parseInt() para convertir
la cadena de texto a un número entero.

let opcionMenuNum: number = parseInt(opcionMenu);

let i : number, linea : string;
let numero1 : number = rls.questionInt("Ingrese el primer número: "); ;
let numero2 : number = rls.questionInt("Ingrese el segundo número: "); ;
let opcionMenu : any = rls.question("Ingrese 1 para sumar, 2 para restar, cualquier otra tecla para salir: ");
let resultadoFuncion: number = 0

// Función para calcular el resultado en base a la opción elegida por el usuario
function calcularResultado (numero1:number, numero2:number, opcionMenu:number):number {
	let resultado:number=0;
    if (opcionMenu == 1) {
        resultado = numero1 + numero2;   
    } else if (opcionMenu == 2) {
        resultado = numero1 - numero2;   
    } else if (opcionMenu != 1 && opcionMenu !=2) {
        console.log("Saliste del programa")
    }
    return resultado;
}

// Llamar a la función para calcular el resultado si la opción del menú es válida
if (opcionMenu == 1 || opcionMenu == 2) {
    resultadoFuncion = calcularResultado (numero1, numero2, opcionMenu)
    console.log( "El resultado es: " + resultadoFuncion)
}*/
