import { Personaje } from "./Personaje";

export class Arquero extends Personaje {
    private flechas: number;

    constructor(nombre: string, danio: number) {
        super(nombre, danio)
        this.flechas = 10
        this.danio = 6;
    }

    getDanio(): number {
        return this.danio
    }

    usarFlecha(): void {
        if (this.flechas > 0) {
            console.log(`${this.nombre} ha usado una flecha`)
            this.flechas--;
        } else {
            console.log(`${this.nombre} se ha quedado sin flechas`)
        }
    }

}