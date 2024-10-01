import {Auto} from "./Auto";
import {Moto} from "./Moto";
import {Camion} from "./Camion";
import { RegistroAutomotor } from "./Registro-automotor";

// Crear instancias de vehiculos
const auto1 = new Auto("Toyota", "M123", 2018);
const auto2 = new Auto("Ferrari", "M123", 2018);
const moto1 = new Moto("Yamaha", "M234", 2001);
const camion1 = new Camion("Mercedes", "M345", 2005);

// Crear instancia de RegistroAutomotor
const registroAutomotor = new RegistroAutomotor();

// Agregar vehiculos
registroAutomotor.agregarAuto(auto1);
registroAutomotor.agregarMoto(moto1);
registroAutomotor.agregarCamion(camion1);

// Mostrar vehiculos
console.log("Mostrar vehiculos agregados")
console.log(registroAutomotor.getAutos());
console.log(registroAutomotor.getMotos());
console.log(registroAutomotor.getCamiones());

// Eliminar un vehiculo
registroAutomotor.darDeBajaMoto(moto1);

// Modificar vehiculo
registroAutomotor.modificarAuto(0, auto2)

// Mostrar vehículos después de eliminar y modificar
console.log("Mostrar vehiculos despues de eliminar moto1 y modificar auto1")
console.log(registroAutomotor.getAutos());
console.log(registroAutomotor.getMotos());
console.log(registroAutomotor.getCamiones());



//modificarVehiculo
//this.listaAuto[index] = new Auto()
//hacer validaciones de objetos: q ningun parametro sea indefinido o vacio, if parametro es !== undefined, entra
//Agregar vehiculo, get y set, modificar un vehiculo, dar de baja