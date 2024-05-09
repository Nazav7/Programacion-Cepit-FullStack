/*Implemente un algoritmo que calcule y muestre por pantalla el precio final de un producto después de aplicarle un descuento
• El precio inicial del producto se ingresa por pantalla
• El descuento a aplicar es del 10%. Recuerde que puede obtener el 10% de un valor multiplicado por 0,1
• Precio final debe ser mostrado en pantalla*/

import * as readlineSync from "readline-sync";

// Paso 1: Solicitar al usuario que ingrese el precio inicial del producto
let precioInicial: number = readlineSync.questionFloat("Ingrese el precio inicial del producto: ");

// Paso 2: Calcular el descuento del 10%
let descuento: number = precioInicial * 0.1;

// Paso 3: Calcular el precio final restando el descuento al precio inicial
let precioFinal: number = precioInicial - descuento;

// Paso 4: Mostrar el precio final en pantalla
console.log("El precio final del producto después de aplicar el descuento del 10% es: " + precioFinal);