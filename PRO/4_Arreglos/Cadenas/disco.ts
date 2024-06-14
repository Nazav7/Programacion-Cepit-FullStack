/*Ejercicio – Personas en una Disco

• Para tener control de la gente que hay en una disco el gerente quiere saber cuantas personas de diferentes edades han entrado.
• No se han permitido la entrada a menores de 18 ni mayores de 40.
Para la carga de los datos se usa la función aleatorio (use la función
aleatorio(menorValor,mayorValor), es decir aleatorio(19,40))
• Se sabe que la cantidad total de personas dentro del local es de 270
• Se quiere saber:
• Cuántas personas son menores de 21 años
• Cuántas personas mayores o igual a 21 años
• Cuántas personas en total*/


//variables
let lowerValue: number = 18
let higherValue: number = 40
let total: number[] = new Array(270)

loadArray(total)
console.log(`La cantidad de personas es de ${total.length}`)
console.log(`El numero de personas menores a 21 son ${peopleUnder21(total)}, y las restantes son ${peopleOver21(total)}`)

//funcion para obtener numero aleatorio
function getRandomNumber(higherValue: number, lowerValue: number) : number {
    return Math.floor(Math.random() * (higherValue - lowerValue + 1)) + lowerValue
}

//funcion para llenar vector con numero random
function loadArray(arr: number[]){
    for (let i = 0; i < arr.length; i++) {
        arr[i]= getRandomNumber(higherValue, lowerValue)
    }
}

//funciones para determinar edades
function peopleUnder21(arr: number[]): number{
    let counter: number = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]<21) {
            counter++
        }
    }
    return counter
}

function peopleOver21(arr: number[]): number{
    let counter: number = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>=21) {
            counter++
        }
    }
    return counter
}



/*function mostrarPersonas(personas : number[]) {
    let indice : number;
    let lista : string = “”;
    for (indice=1; indice <= Array.length; indice++) {
    lista += ` ${personas[indice-1]}`;
    if (indice % 30 == 0) {
    console.log (lista);
    lista = “”;
    }
    }
    console.log (lista);
    }*/