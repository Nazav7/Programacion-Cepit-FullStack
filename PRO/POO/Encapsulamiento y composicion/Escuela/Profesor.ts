//Los profesores deben tener un listado de sus alumnos.

import { Alumno } from "./Alumno.ts";

export class Profesor{
    private nombre: string;
    private alumnos: Alumno[];

    constructor(nombre: string){
        this.nombre = nombre;
        this.alumnos = [];
    }

    getNombre(): string{
        return this.nombre
    }

    getAlumnos(): Alumno[]{
        return this.alumnos
    }

    agregarAlumno(alumno: Alumno): void {
        this.alumnos.push(alumno);
    }
}

/* si yo no le paso una lista de alumnos a la hora de crear un prof, este codigo no sirve
   constructor(nombre: string, alumnos: Alumno[]){
        this.nombre = nombre;
        this.alumnos = alumnos;
    }*/