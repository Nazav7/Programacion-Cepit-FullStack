import { Personaje } from "./Personaje";
import { HabilidadPorDefecto } from "./Habilidad";

export class Mago extends Personaje {
    private mana: number;
    // private costoMana: number;

    constructor(nombre: string, danio: number) {
        super(nombre, danio)
        this.mana = 100;
        // this.costoMana = 20;
        this.danio = 4;
    }

    getDanio(): number {
        return this.danio
    }

    getMana(): number {
        return this.mana
    }

    setMana(mana: number): void {
        this.mana = mana
    }

    reducirMana(costoMana: number) {
        if (this.mana > 0) {
            this.mana = this.mana - costoMana
        }
    }

    // usarHechizo(): void{
    //     if (this.mana >= this.costoMana) {
    //         console.log(`${this.nombre} lanza un hechizo`)
    //         this.mana -= this.costoMana;
    //     }else{
    //         console.log(`${this.nombre} no tiene suficiente mana`)
    //     }
    // }

}