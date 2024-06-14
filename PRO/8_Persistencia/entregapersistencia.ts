/*Guarda la información de los siguientes arrays:
const precios: number[] = [525, 3500, 400, 1999];
const productos: string[] = ["Leche", "Galletitas", "Harina", "Queso"];
en un archivo “precios.txt” y “productos.txt” respectivamente.
Luego recupera la información en forma de array nuevamente y mostrala por consola.*/

import fs from 'node:fs'

const prices: number[] = [525, 3500, 400, 1999];
const products: string[] = ["Leche", "Galletitas", "Harina", "Queso"];

//pasar elementos de arreglos a string
let pricesString: string = ""
for (let i = 0; i < prices.length; i++) {
    pricesString += `${prices[i]} `
}

let productsString: string = ""
for (let i = 0; i < products.length; i++) {
    productsString += `${products[i]} ` //o `${products[i]}\n` para salto de linea
}

//guardar en txt
fs.writeFileSync(`./prices.txt`, pricesString)
fs.writeFileSync(`./products.txt`, productsString)
console.log(`Finalizado`);

//recuperar la información en forma de array nuevamente y mostrala por consola.
const pricesData: string = fs.readFileSync(`./prices.txt`, `utf8`).trim()
const newPricesArrayString: string[] = pricesData.split(` `);
const newPricesArrayNumber: number[] = convertArrayStringtoNumber(newPricesArrayString)
console.log(newPricesArrayNumber)

const productsData: string = fs.readFileSync(`./products.txt`, `utf8`).trim()
const newProductsArray: string[] = productsData.split(` `);
console.log(newProductsArray)


//funcion que convierte array de string a array de numeros
function convertArrayStringtoNumber(arr: string[]): number[] {
    let arrayNumber: number[] = new Array(arr.length); // crea un nuevo array de numeros con la misma longitud que el array de entrada
    for (let i = 0; i < arr.length; i++) { // recorre el array de strings y convierte cada elemento a number
        arrayNumber[i] = parseInt(arr[i]);
    }
    return arrayNumber;
}