
let variableNumerica:number=0;
console.log("valor de variableNumerica antes de la funcion: " + variableNumerica); //salida 0

modificarVariable(variableNumerica);//llamando a la funcion que esta aca abajo//salida 1

function modificarVariable(variableNumerica: number) {
    variableNumerica=1;
    console.log("valor de variableNumerica dentro de la funcion: " + variableNumerica);
}

console.log("valor de variableNumerica despues de la funcion: " + variableNumerica); //salida 0
//Simplemente aca muestra la variable global. VariableNumerica es 1 solo dentro de la función.

/*Como podemos observar, el valor de la variable global no se modifica.
No importa que tenga el mismo nombre dentro de la función.
variableNumerica dentro de la función (pertenece al scope local) por lo tanto TS la trata como otra variable. 

Cuando se trata de arreglos no es lo mismo*/

let arreglo2:number[]=[0,1,2];
console.log("valor de arreglo antes de la funcion2: " + arreglo2);//salida 0,1,2

modificarVariable2(arreglo2); //salida 9,9,9

function modificarVariable2(arregloParam: number[]) {
    arreglo2=[9,9,9];//la reasignacion de valores crea un arreglo nuevo en el ambito de la funcion
    //por lo tanto no modifica al arreglo "global"
    //let arreglo:number[]=[9,9,9];
    console.log("valor de arreglo dentro de la funcion2: " + arreglo2);
}
console.log("valor de arreglo despues de la funcion2: " + arreglo2); //salida 9,9,9


//otro ejemplo

let arreglo:number[]=[0,1,2];
console.log("valor de arreglo antes de la funcion: " + arreglo);//salida 0,1,2

modificarVariable1(arreglo); //salida 0,1,2 // y 9,9,9

function modificarVariable1(arregloParam: number[]) {
    arregloParam=[9,9,9];//la reasignacion de valores crea un arreglo nuevo en el ambito de la funcion
    //por lo tanto no modifica al arreglo "global"
    //let arreglo:number[]=[9,9,9];
    console.log("valor de arreglo dentro de la funcion: " + arreglo);
    console.log("valor de arregloParam: " + arregloParam);
}
console.log("valor de arreglo despues de la funcion: " + arreglo); //salida 0,1,2

