/*Implemente un método llamado cantidadDeDivisores que reciba un número entero y devuelva la cantidad de divisores 
Por ejemplo, para el número 16, sus divisores son 1, 2, 4, 8, 16, por lo que la respuesta debería ser 5 
Re-utilice el método esMultiplo implementado para el ejercicio anterior*/

let numeroEntero : number = 16

function esMultiplo (multiplo:number, divisor:number) : boolean {
    return multiplo % divisor == 0
    }

function cantidadDeDivisores(numeroEntero : number) : number {
let contador : number = 0
for (let index = 0; index <= numeroEntero; index++) {
    if (esMultiplo(numeroEntero, index )) {
        contador++ //contador + 1
    }
}
    return contador
}
console.log("El num " + numeroEntero + " tiene " + cantidadDeDivisores(numeroEntero) + " divisores" )