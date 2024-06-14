/*Selection Sort
Encuentra el elemento más pequeño (o más grande si se quiere) en la lista y lo coloca en la primera posición.
Luego, busca el segundo elemento más pequeño y lo coloca en la segunda posición.
Este proceso se repite hasta que toda la lista esté ordenada.
hace menos intercambios que Bubble Sort porque solo intercambia una vez por cada pasada.*/


function selectionSort(arr: number[]) {
    for (let i: number = 0; i < arr.length - 1; i++) { //recorre hasta el penúltimo elemento porque, al llegar al último elemento, este ya estará en su posición correcta después de haber colocado todos los elementos menores en sus posiciones correspondientes.
        let minIndex = i; //se asume que el elemento en la posición i es el menor.
        //Busca el menor elemento en el resto del arreglo
        for (let j: number = i + 1; j < arr.length; j++) { 
            if (arr[j] < arr[minIndex]) { //25 < 64? //12 < 25? //22 < 12?// 11 < 12?
                minIndex = j; 11
            }
        } //Intercambio de Elementos: 
        if (minIndex != i) { //Si minIndex no es igual a i, significa que se ha encontrado un nuevo mínimo y se realiza el intercambio.
            let temp = arr[i];
            arr[i] = arr[minIndex]; //i=0: Intercambia arr[0] con arr[4]. i
            arr[minIndex] = temp;
        }
    }
    return arr;
}

let vector1: number[] = [64,25,12,22,11]

console.log(selectionSort(vector1))

/* Primera Pasada (i = 0):
minIndex = 0
Recorre los elementos y encuentra que arr[4] = 11 es el menor.
Intercambia arr[0] con arr[4].
Arreglo: [11, 25, 12, 22, 64]

Segunda Pasada (i = 1):
minIndex = 1
Encuentra que arr[2] = 12 es el menor.
Intercambia arr[1] con arr[2].
Arreglo: [11, 12, 25, 22, 64]

Tercera Pasada (i = 2):
minIndex = 2
Encuentra que arr[3] = 22 es el menor.
Intercambia arr[2] con arr[3].
Arreglo: [11, 12, 22, 25, 64]

Cuarta Pasada (i = 3):
minIndex = 3
No encuentra ningún elemento menor.
No hay intercambio.
Arreglo: [11, 12, 22, 25, 64]*/