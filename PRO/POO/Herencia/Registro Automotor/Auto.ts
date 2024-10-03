import {Vehiculo} from "./Vehiculo";

export class Auto extends Vehiculo{
    private puertas: number;

    constructor(marca: string, modelo: string, puertas:number){
        super(marca, modelo);
        this.puertas = puertas
    }

    getPuertas(): number{
        return this.puertas
    }

    setPuertas(puertas: number){
        this.puertas = puertas
    }
}