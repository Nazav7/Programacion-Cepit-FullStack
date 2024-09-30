//La escuela debe tener un registro de los alumnos y maestros, y debe poder matricular/contratar y expulsar/despedir a los mismos.

import { Alumno } from "./Alumno";
import { Profesor } from "./Profesor";

export class Escuela {
    private nombre: string;
    private alumnos: Alumno[];
    private profesores: Profesor[];

    constructor(nombre: string, alumnos?: Alumno[], profesores?: Profesor[]) {
        this.nombre = nombre;

        if (alumnos != undefined) {
            this.alumnos = alumnos;
        } else {
            this.alumnos = [];
        }

        if (profesores != undefined) {
            this.profesores = profesores;
        } else {
            this.profesores = [];
        }
    }

    getNombre(): string{
        return this.nombre;
    }

    getAlumnos(): Alumno[] {
        return this.alumnos;
    }

    getProfesores(): Profesor[] {
        return this.profesores;
    }

    matricularAlumno(alumno: Alumno) {
        this.alumnos.push(alumno)
    }

    contratarProfesor(profesor: Profesor){
        this.profesores.push(profesor)
    }

    expulsarAlumno(nombre: string){
        this.alumnos.filter(alumno => alumno.getNombre() !== nombre)
    }

    despedirProfesor(nombre: string){
        this.profesores.filter(profesor => profesor.getNombre() !== nombre)
    }
}


// import { Alumno } from "./Alumno";
// import { Profesor } from "./Profesor";


// export class Escuela {
//     private nombre: string;
//     private alumnos: Alumno[];
//     private profesores: Profesor[];

//     constructor(nombre: string, listaDeAlumnos?: Alumno[], listaDeProfesores?: Profesor[]) {
//         this.nombre = nombre;

//         if (listaDeAlumnos != undefined) {
//             this.alumnos = listaDeAlumnos;
//         } else {
//             this.alumnos = [];
//         }

//         if (listaDeProfesores != undefined) {
//             this.profesores = listaDeProfesores;
//         } else {
//             this.profesores = [];
//         }
//     }

//     getNombre() : string {
//         return this.nombre;
//     }

//     matricularAlumno(alumno: Alumno): void {
//         this.alumnos.push(alumno);
//     }

//     contratarProfesor(profesor: Profesor): void {
//         this.profesores.push(profesor);
//     }

//     expulsarAlumno(nombre: string): void {
//         this.alumnos = this.alumnos.filter(alumno => alumno.getNombre() !== nombre);
//     }
//    // ["Juan","Mario","Pepe"] =  ["Juan", "Mario"]
//     despedirProfesor(nombre: string): void {
//         this.profesores = this.profesores.filter(profesor => profesor.getNombre() !== nombre);

//     }

//     obtenerAlumnos(): Alumno[] {
//         return this.alumnos;
//     }

//     obtenerProfesores(): Profesor[] {
//         return this.profesores;
//     }
// }