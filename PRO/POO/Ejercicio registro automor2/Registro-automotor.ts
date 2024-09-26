import {Vehiculo} from "./Vehiculo";

export class RegistroAutomotor {
    private _vehiculos: Vehiculo[]
    
    public constructor() {
        this._vehiculos = [];
    }
    //Getters
    getVehiculos(): Vehiculo[] {
        return this._vehiculos;
    }
    //Setters
    setVehiculo(vehiculo: Vehiculo[]){
        this._vehiculos = vehiculo
    }

    agregarVehiculo(vehiculo: Vehiculo): void{
    this._vehiculos.push(vehiculo)}

    eliminarVehiculo(vehiculo: Vehiculo){
        this._vehiculos = this._vehiculos.filter(element=> element !== vehiculo)
    }

}