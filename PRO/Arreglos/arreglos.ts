// Declaración de un arreglo de números
let numbers: number[] = [1, 2, 3, 4, 5];

// Declaración de un arreglo de cadenas de texto
let fruits: string[] = ["apple", "banana", "orange", "mango"];

// Declaración de un arreglo de cualquier tipo (usando 'any')
let mixedArray: any[] = [1, "two", true, { key: "value" }];

// Accediendo a elementos del arreglo
console.log(numbers[0]); // Salida: 1
console.log(fruits[2]);  // Salida: orange

// Modificando elementos del arreglo
numbers[0] = 10;
fruits[2] = "grape";

// Longitud del arreglo
console.log(numbers.length); // Salida: 5
console.log(fruits.length);  // Salida: 4