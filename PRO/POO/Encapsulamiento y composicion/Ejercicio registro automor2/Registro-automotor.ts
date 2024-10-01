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

    agregarVehiculo(vehiculo: Vehiculo): void{
    this._vehiculos.push(vehiculo)}

    eliminarVehiculo(vehiculo: Vehiculo){
        this._vehiculos = this._vehiculos.filter(element=> element !== vehiculo)
    }

    modificarVehiculo(index: number, vehiculo: Vehiculo): void {
        if (this._vehiculos[index]) {
          this._vehiculos[index] = vehiculo;
        }
      }

}