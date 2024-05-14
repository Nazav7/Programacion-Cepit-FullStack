/*Implemente un método llamado imprimirNombre que reciba un nombre y un apellido y devuelva los dos datos concatenados
en una variable de tipo string. 
El string devuelto debe imprimirse por consola.

Refactorizar el método dibujarGuiones utilizado para el ejercicio de la calculadora realizado anteriormente */

function imprimirNombre (nombre: string, apellido: string) : string {
    const nombreCompleto = nombre + " " + apellido
    return nombreCompleto
}

console.log(imprimirNombre("Nazarena", "Vazquez"))