import {Vehiculo} from "./Vehiculo";

export class Moto extends Vehiculo{
    private cilindradas: number;

    constructor(marca: string, modelo: string, cilindradas:number){
        super(marca, modelo);
        this.cilindradas = cilindradas
    }

    getCilindradas(): number{
        return this.cilindradas
    }

    setCilindradas(nuevaCilindrada: number){
        this.cilindradas = nuevaCilindrada
    }
}