/*Arreglos sintaxis

let <identificador> : *tipo*[] = new Array (<max length>);
let <identificador> : *tipo*[] = new Array [elements]

let arrayA: number[]= new Array(6);
arrayA=[1,2,3,4,5,6];

let arrayB: number[]=[7,8,9,10,11,12]

let arregloMes : string[] = new Array (2) ;
arregloMes[0] = "Enero";
arregloMes[1] = "Febrero";*/

// Declaración de un arreglo de números
let numbers: number[] = [1, 2, 3, 4, 5]; //valores o elementos del arreglo que quiero almacenar

// Declaración de un arreglo de cadenas de texto
let fruits: string[] = ["apple", "banana", "orange", "mango"];

// 2. Recorrer el arreglo con un bucle 'for' y mostrar cada elemento
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// Declaración de un arreglo de cualquier tipo (usando 'any')
//let mixedArray: any[] = [1, "two", true, { key: "value" }];

// Accediendo a elementos del arreglo
console.log(numbers[0]); //Num de posicion - Salida: 1
console.log(fruits[2]);  // Salida: orange

// Modificando elementos del arreglo
numbers[0] = 10;
fruits[2] = "grape";

// Accediendo a elementos del arreglo
console.log(numbers[0]); //Num de posicion - Salida: 10
console.log(fruits[2]);  // Salida: grape

// Longitud del arreglo (muestra el numero de elementos del arreglo)
console.log(numbers.length); // Salida: 5
console.log(fruits.length);  // Salida: 4

//------------------------------------------------------------------------
//Funciones para crear numero al azar, cargar el arreglo, y mostrarlos.

//Funcion para crear un numero ramdom entre 0 y numAzar
function Azar(numAzar: number): number {
    return Math.floor(Math.random() * numAzar);
}
// Genera un número aleatorio entre 0 y 8
console.log("Número aleatorio:", Azar(9));


//Funcion para cargar el arreglo
function cargar(arreglo: number[], cantidad: number, numAzar: number) {
    for (let i: number = 0; i < cantidad; i++) {
        arreglo[i] = Azar(numAzar);
    }
}
// Crea y llena un arreglo con números aleatorios
let limite: number = 10;
let arreglo: number[] = new Array(limite);
cargar(arreglo, limite, 100);


//En esta funcion mostramos los valores del arreglo
function escribirEnUnaLinea(arreglo: number[], cantidad: number) {

    let vector: string = "";
    for (let i: number = 0; i < cantidad; i++) {
        vector += `${arreglo[i]} `;
    }
    console.log(vector);
}

// Imprime el arreglo antes de ordenarlo
console.log("Arreglo antes de ordenar:");
escribirEnUnaLinea(arreglo, limite);