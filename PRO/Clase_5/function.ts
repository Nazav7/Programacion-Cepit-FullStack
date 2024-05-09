
//función hola mundo
function holaMundo() {
    console.log("hola mundo")
}
//llamo a la función
holaMundo();


// Definimos una función llamada suma que toma dos parámetros: a y b. Devuelve un número
function suma(a: number, b: number): number {
    let resultado: number = a + b;
    return resultado;
}
/* function suma(a: number, b: number): number {
    return: number = a + b;
    ES MAS CONCISA*/

// Llamamos a la función suma con dos argumentos 5 y 3
let resultado_suma: number = suma(5, 3);
// Imprimimos el resultado
console.log("La suma es:", resultado_suma);

//RETURNS
//Función que devuelve un número:
function devuelveNumero(): number {
    return 42;
}
console.log(devuelveNumero()); // Output: 42

//Función que devuelve una cadena de texto:
function devuelveCadena(): string {
    return "Hola, mundo!";
}
console.log(devuelveCadena()); // Output: Hola, mundo!

//Función que devuelve un valor booleano:
function devuelveBooleano(): boolean {
    return true;
}
console.log(devuelveBooleano()); // Output: true

//Función que devuelve null:
function devuelveNull(): any {
    return null;
}
console.log(devuelveNull()); // Output: null

//Función que devuelve un arreglo:
function devuelveArreglo(): number[] {
    return [1, 2, 3, 4, 5];
}
console.log(devuelveArreglo()); // Output: [1, 2, 3, 4, 5]