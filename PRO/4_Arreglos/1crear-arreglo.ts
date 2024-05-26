
/*Crear arreglo

1) Crear un arreglo de letras e imprimirlo. Luego recorrerlo
2) Dado un array con nombres de tamaño 5, pedir al usuario que ingrese un nombre y verificar si está en el arreglo.
Imprimir el arreglo y si está o no en él.*/

//1 imprimir arreglo de letras
let arrayLetters: string[] = ["a","b","c","d"]
console.log(arrayLetters)
//recorrerlo
for(let i=0; i<arrayLetters.length; i++){
    console.log(arrayLetters[i])
}

import * as rls from "readline-sync"
//2
let arrayNames: string[] = ["Alex", "Sam", "Dario","Fausto", "Greta"]
let userName = rls.question(`Ingrese un nombre para verificar si se encuentra en el vector: `)

let isInArray = false;
for (let i = 0; i < arrayNames.length; i++) {
    if (userName == arrayNames[0]) {
        isInArray = true;//Esto indica que se ha encontrado el nombre en el arreglo y no es necesario seguir buscando.
        break; //Esto evita que el bucle siga iterando sobre los elementos restantes del arreglo, ya que ya hemos encontrado el nombre.
    }
}

console.log(arrayNames)

if(isInArray){
    console.log(`El nombre se encuentra en el vector`)
}else{
    console.log(`El nombre no se encuentra en el vector`)
}




/* De esta manera que hice el console.log se repite y se imprime 5 veces
for (let i = 0; i < arrayNames.length; i++) {
if (userName == arrayNames[0]) {
    console.log(`El nombre se encuentra en el vector`)
} else {
    console.log(`El nombre no se encuentra en el vector`)
}
}*/
