import {Vehiculo} from "./Vehiculo";
import {Auto} from "./Auto";
import {Moto} from "./Moto";
import {Camion} from "./Camion";

export class RegistroAutomotor {
    private _vehiculos: Vehiculo[]
    private _autos: Auto[]
    private _motos: Moto[]
    private _camiones: Camion[]
    
    public constructor() {
        this._vehiculos = [];
        this._autos = [];
        this._motos = [];
        this._camiones = [];
    }
    //Getters
    getVehiculos(): Vehiculo[] {
        return this._vehiculos;
    }

    getAutos(): Auto[] {
        return this._autos;
    }

    getMotos(): Moto[] {
        return this._motos;
    }

    getCamiones(): Camion[] {
        return this._camiones;
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

    // modificarVehiculo(vehiculo: Vehiculo, nuevaMarca: string, nuevoModelo: string){
    //     vehiculo._marca = nuevaMarca
    //     vehiculo._modelo = nuevoModelo
    // }
}