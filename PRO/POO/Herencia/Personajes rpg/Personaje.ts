//Crear un sistema de personajes de un videojuego RPG.
//Los personajes tendrán características y habilidades únicas, y algunos podrán evolucionar a versiones  mejoradas con nuevas habilidades.
// El personaje debe tener atributos ej:
// nombre (string): Nombre del personaje //nivel (number): Nivel del personaje (empieza en 1) //puntosDeVida (number): Puntos de vida del personaje.
// Métodos ej:
// atacar(): Imprime un mensaje indicando que el personaje está atacando. 
// defender(): Imprime un mensaje indicando que el personaje está defendiendo.
// Recomendamos crear  3 tipos de héroes (mago, luchador, arquero) y luego algunos especiales.
//Extra: un jugador puede encontrar una caja mágica en algún momento y al abrirla el personaje aprende un nuevo ataque.
//¿Qué cambio debe realizar en la clase?- Olvidense de la caja, imaginen que ya está abierta-

import { Habilidad } from "./Habilidad";

export class Personaje {
    protected nombre: string;
    protected nivel: number;
    protected vida: number;
    protected danio: number;
    protected habilidades: Habilidad[];

    constructor(nombre: string, danio: number) {
        this.nombre = nombre;
        this.nivel = 1;
        this.vida = 100;
        this.danio = danio;
        this.habilidades = [];
    }

    getNombre(): string {
        return this.nombre
    }

    getVida(): number {
        return this.vida
    }

    atacar(danio: number): void {
        console.log(`${this.nombre} ha atacado y causado ${danio} puntos de daño`);
    }

    defender(): void {
        console.log(`${this.nombre} se ha defendido`);
    }

    subirNivel(): void {
        this.nivel++;
        console.log(`${this.nombre} ha subido de nivel`);
    }

    recibirDanio(danio: number) {
        this.vida -= danio;
        if (this.vida <= 0) {
            this.vida = 0;
            console.log(`${this.nombre} ha muerto`);
        } else {
            console.log(`${this.nombre} ha recibido ${danio} puntos de daño`);
        }
    }

    aumentarVida(puntosDeVida: number) {
        if (this.vida < 100) {
            this.vida += puntosDeVida;
        }
        if (this.vida > 100) {
            this.vida = 100;
        }
    }

    agregarHabilidad(habilidad: Habilidad): void {
        this.habilidades.push(habilidad);
        console.log(`${this.nombre} ha agregado la habilidad ${habilidad.getNombre()}`)
    }



}

