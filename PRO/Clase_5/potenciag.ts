import * as rls from "readline-sync";

// Función para verificar si el exponente ingresado es válido
function validarExponente(exponente: number): boolean {
    return exponente >= 0;
}

// Función para calcular la potencia de un número
function calcularPotencia(base: number, exponente: number): number {
    return base ** exponente;
}

// Función principal
function main() {
    let base: number = rls.questionInt("Ingrese la base de la potencia: ");
    let exponente: number = rls.questionInt("Ingrese el exponente de la potencia: ");

    if (!validarExponente(exponente)) {
        console.log("El exponente debe ser mayor o igual a cero.");
        return; // Salir de la función si el exponente no es válido
    }

    let resultado: number = calcularPotencia(base, exponente);
    console.log(`El resultado de ${base} elevado a ${exponente} es: ${resultado}`);
}

// Llamar a la función principal
main();






/* Función para calcular la potencia de un número
function calcularPotencia(base: number, exponente: number): number {
    if (exponente === 0) {
        return 1; // El resultado de cualquier número elevado a 0 es 1
    }
    
    let resultado: number = 1;
    for (let i = 0; i < exponente; i++) {
        resultado *= base;
    }
    return resultado;
}

// Función principal
function main() {
    let base: number = rls.questionFloat("Ingrese la base de la potencia: ");
    let exponente: number = rls.questionInt("Ingrese el exponente de la potencia: ");

    if (!validarExponente(exponente)) {
        console.log("El exponente debe ser mayor o igual a cero.");
        return; // Salir de la función si el exponente no es válido
    }

    let resultado: number = calcularPotencia(base, exponente);
    console.log(`El resultado de ${base} elevado a ${exponente} es: ${resultado}`);
}

// Llamar a la función principal
main();*/