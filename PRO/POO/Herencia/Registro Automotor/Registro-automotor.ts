import {Vehiculo} from "./Vehiculo";
import {Auto} from "./Auto";
import {Moto} from "./Moto";
import {Camion} from "./Camion";

export class RegistroAutomotor {
    private vehiculos: Vehiculo[]
    // private autos: Auto[]
    // private motos: Moto[]
    // private camiones: Camion[]
    
    public constructor() {
        this.vehiculos = [];
        // this.autos = [];
        // this.motos = [];
        // this.camiones = [];
    }
    //Getters
    getVehiculos(): Vehiculo[] {
        return this.vehiculos;
    }

    // getAutos(): Auto[] {
    //     return this.autos;
    // }

    // getMotos(): Moto[] {
    //     return this.motos;
    // }

    // getCamiones(): Camion[] {
    //     return this.camiones;
    // }

    agregarVehiculo(vehiculo: Vehiculo): void{
    this.vehiculos.push(vehiculo)}

    eliminarVehiculo(vehiculo: Vehiculo){
        this.vehiculos = this.vehiculos.filter(element=> element !== vehiculo) //va gaurdando en el array el elemento distinto de vehiculo
    }

    modificarVehiculo(index: number, vehiculo: Vehiculo): void {
        if (this.vehiculos[index]) {
          this.vehiculos[index] = vehiculo;
        }
      }
}





//modificarVehiculo
//this.listaAuto[index] = new Auto()