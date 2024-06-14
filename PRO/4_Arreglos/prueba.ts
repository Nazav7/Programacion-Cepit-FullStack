/*Inicio del algoritmo
Hay que ingresar 50 caracteres
Se pregunta si la longitud es correcta, si no es correcta hay que volver a ingresar los 50 caracteres solicitados, si es correcta pasa a la siguiente instruccion
Se declaran dos variables, c con valor 0, e i con valor 0
Mientras i sea menor a la longitud del texto (50), hacer la siguiente instruccion hasta que i llegue a 50.
Instruccion: se verifica si el texto en la posicion [i] es igual a "A". Si encuentra una A se aumenta C en uno. Es decir que C guarda la cantidad de "A".
Se aumenta i en uno
El resultado muestra la cantidad de "A" que hay en el texto de 50 caracteres.
Fin*/

//Cree un string de al menos 15 caracteres (sin que el usuario lo ingrese). Cuente la cantidad de A, E y O que hay en ese string y almacene esas cantidades en otro arreglo de 3 elementos en el orden que usted desee.
//Pegar el codigo aquí.

let text: string = "AEIOU ABCDEFGHI"
let vector: number[] = [0,0,0]

for (let i = 0; i < text.length; i++) {
    if(text[i]==`A`){
        vector[0]++
    }
    if (text[i]==`E`) {
        vector[1]++
    }
    if (text[i]==`O`){
        vector[2]++
    }
}
console.log(vector)

function sumarArreglo(arreglo: number[]): number {
    let suma: number = 0;
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return suma;
}

/*function sumarArreglo(arreglo: number[]): number {
    let suma: number = 0;
    for ( i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return arreglo;
}*/

function establecerColorPorNota(valor: number): string {
    if (valor >= 0 && valor <7) {
        return "rojo";
    }
    else if ( valor >=7 && valor <= 10) {
        return "verde";
    }
     return "gris";
}

console.log(establecerColorPorNota(7))

/*Corregir los errores que encuentre:
function establecerColorPorNota(valor: number): string {
    if (valor >= 0 and valor <"siete") {
        return rojo;
    }
    else if ( valor >=7 and valor <= 10) {
        return verde;
    }
     return gris;
}*/

function obtenerPromedio(arr:number[]){    
    let suma: number = sumarArreglo(arr);
    let promedio: number = suma / arr.length;
    console.log(promedio);
}

/*function obtenerPromedio(arr:number[]): string {    
    let suma: number = sumarArreglo(arr);
    let promedio: number = suma % arr.length;
    console.log(promedio);
}*/