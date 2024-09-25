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
    // modificarVehiculo(vehiculo: Vehiculo, nuevaMarca: string, nuevoModelo: string){
    //     vehiculo._marca = nuevaMarca
    //     vehiculo._modelo = nuevoModelo
    // }

    agregarVehiculo(vehiculo: Vehiculo): void{
    this._vehiculos.push(vehiculo)}

    // agregarAuto(auto: Auto): void{
    //     this._autos.push(auto)
    // }

    eliminarVehiculo(vehiculo: Vehiculo){
        this._vehiculos = this._vehiculos.filter(element=> element !== vehiculo)
    }

}

// Crear instancias de vehiculos
const auto1 = new Auto("Toyota", "M123");
const moto1 = new Moto("Yamaha", "M234");
const camion1 = new Camion("Mercedes", "M345");

// Crear instancia de RegistroAutomotor
const registroAutomotor = new RegistroAutomotor();

// Agregar vehiculos
registroAutomotor.agregarVehiculo(auto1);
registroAutomotor.agregarVehiculo(moto1);
registroAutomotor.agregarVehiculo(camion1);

// Mostrar vehiculos
console.log("Mostrar vehiculos agregados")
console.log(registroAutomotor.getVehiculos());

// Eliminar un vehiculo
registroAutomotor.eliminarVehiculo(moto1);

// Modificar vehiculo
auto1.modificarVehiculo("Honda","M9")

// Mostrar vehículos después de eliminar y modificar
console.log("Mostrar vehiculos despues de eliminar moto1 y modificar auto1")
console.log(registroAutomotor.getVehiculos());





//Agregar vehiculo, get y set, modificar un vehiculo, dar de baja