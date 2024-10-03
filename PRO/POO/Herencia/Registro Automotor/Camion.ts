import {Vehiculo} from "./Vehiculo";

export class Camion extends Vehiculo{
    private capacidadKg: number;

    constructor(marca: string, modelo: string, capacidadKg:number){
        super(marca, modelo);
        this.capacidadKg = capacidadKg
    }

    getCapacidadKg(): number{
        return this.capacidadKg
    }

    setCapacidadKg(nuevaCapacidadKg: number){
        this.capacidadKg = nuevaCapacidadKg
    }
}