import { Mago } from "./Mago";

export class Habilidad {
    protected nombre: string;
    protected descripcion: string;

    constructor(nombre: string, descripcion: string) {
        this.nombre = nombre;
        this.descripcion = descripcion;
    }

    getNombre(): string {
        return this.nombre
    }

}

export abstract class HabilidadMago extends Habilidad {
    protected costoMana: number;

    constructor(nombre: string, descripcion: string, costoMana: number) {
        super(nombre, descripcion)
        this.costoMana = costoMana;
    }

}

export class HabilidadPorDefecto extends HabilidadMago {

    constructor(nombre: string, descripcion: string, costoMana: number) {
        super(nombre, descripcion, costoMana);
    }

    usar(personaje: Mago): void {
        if (personaje.getMana() >= this.costoMana) {
            console.log(`${personaje.getNombre()} usa ${this.nombre}`);
            personaje.reducirMana(this.costoMana);
        } else {
            console.log(`${personaje.getNombre()} no tiene suficiente mana`);
        }
    }
}

export class HabilidadCurar extends HabilidadMago {

    constructor(nombre: string, descripcion: string, costoMana: number) {
        super(nombre, descripcion, costoMana);
    }

    usar(personaje: Mago): void {
        if (personaje.getMana() >= this.costoMana) {
            personaje.aumentarVida(10)
            personaje.reducirMana(this.costoMana);
        } else {
            console.log(`${personaje.getNombre()} no tiene suficiente mana`);
        }
    }


}


