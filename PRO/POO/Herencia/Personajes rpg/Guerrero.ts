import { Personaje } from "./Personaje";

export class Guerrero extends Personaje {
    private superAtaque: number;

    constructor(nombre: string, danio: number) {
        super(nombre, danio)
        this.superAtaque = 1;
        this.danio = 10;
    }

    getDanio(): number {
        return this.danio;
    }

    usarSuperAtaque() {
        if (this.superAtaque > 0) {
            console.log(`${this.nombre} ha usado el super ataque`);
            this.superAtaque = 0;

            //Recarga superAtaque despues de 1 minuto
            setTimeout(() => {
                this.superAtaque = 1;
            }, 60000);
        } else {
            console.log(`Super ataque no disponible`)
        }
    }
}
