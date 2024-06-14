// @ts-ignore porque sino me tira error la linea 3
//(una sola linea) o ts-no check para todo el documento
import fs from 'node:fs' //fs (fileSystem)

//el formato txt solo lee string (no lee numeros,arreglos,matrices,etc)

let contenido: number = 9;
let contenidoString: string = contenido.toString(); //pasar el numero a string

const nombres: string[] = ["Juan", "Amalia", "Alexa"];

//Pasar los elementos del arreglo a string
let nombresString: string="";
for (let i = 0; i < nombres.length; i++) {
    nombresString += `${nombres[i]} `
}

// Pasar los elementos del arreglo a string con funcion 
//let nombresString: string = nombres.join(' ');

//Guardar información en txt (ruta, contenido)
fs.writeFileSync('./test.txt', nombresString); //no puedo pasar mas de dos variables, preguntar
console.log(`Finalizado`);

//Leer informacion de txt (recupera info para mostrarla por consola)
const datos: string= fs.readFileSync(`./test.txt`, `utf8`);
const datos2: string= datos.trim(); //saca los espacios de adelante y atras del string, que pusimos cuando pasamos el arreglo a string
const nuevoArray: string[] = datos2.split(` `);
// split('') divide la cadena en un array de caracteres individuales. "hola Pepe" = ["h", "o", "l", "a", "p", "e", "p", "e"]
//split(' ') divide la cadena en palabras, por espacios en blanco. "hola Pepe" = ["hola", "pepe"]
console.log(nuevoArray)

/*
La notación ./ se utiliza para indicar la ruta relativa al directorio actual desde el cual se está ejecutando el script.
./test.txt: Indica que test.txt está en el mismo directorio que el script que se está ejecutando.
../test.txt: Indica que test.txt está en el directorio padre del directorio actual.*/