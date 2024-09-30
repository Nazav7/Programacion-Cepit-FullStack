// Cada alumno debe saber su nota e informar si está aprobado o no (es decir si la nota es mayor que 7).

export class Alumno {
    private nombre: string;
    private nota: number;

    constructor(nombre: string, nota: number) {
        this.nombre = nombre;
        this.nota = nota;
    }

    getNombre(): string {
        return this.nombre;
    }

    getNota(): number {
        return this.nota;
    }

    estaAprobado(): boolean {
        return this.nota >= 7;
    }
    //Lo mismo que hacer
    // estaAprobado(): boolean{
    //     if (this.nota >= 7) {
    //         return true
    //     } else {
    //         return false
    //     }
    // }
    
}





























// export class Alumno {
//     private nombre: string;
//     private nota: number;

//     constructor(nombre: string, nota: number) {
//         this.nombre = nombre;
//         this.nota = nota;
//     }

//      getNombre(): string {
//         return this.nombre;
//     }


//      estaAprobado(): boolean {
//         if (this.nota >= 7) {
//             return true;
//         } else {
//             return false;
//         }
//     }

//      getNota(): number {
//         return this.nota;
//     }
// }