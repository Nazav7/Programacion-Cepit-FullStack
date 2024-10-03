import {Vehiculo} from "./Vehiculo";
import {Auto} from "./Auto";
import {Moto} from "./Moto";
import {Camion} from "./Camion";
import { RegistroAutomotor } from "./Registro-automotor";

// Crear instancias de vehiculos
const auto1 = new Auto("Toyota", "M123", 4 );
const moto1 = new Moto("Yamaha", "M234", 20);
const camion1 = new Camion("Mercedes", "M345", 1500);

// Crear instancia de RegistroAutomotor
const registroAutomotor = new RegistroAutomotor();

// Agregar vehiculos
registroAutomotor.agregarVehiculo(auto1);
registroAutomotor.agregarVehiculo(moto1);

// Mostrar vehiculos
console.log("Mostrar vehiculos agregados")
console.log(registroAutomotor.getVehiculos());

// Eliminar un vehiculo
registroAutomotor.eliminarVehiculo(moto1);

// Modificar vehiculo
registroAutomotor.modificarVehiculo(0, camion1)

// Mostrar vehículos después de eliminar y modificar
console.log("Mostrar vehiculos despues de eliminar moto1 y modificar auto1")
console.log(registroAutomotor.getVehiculos());

//Mostrar vehiculos
console.log("Usando todos los GETS");
console.log(registroAutomotor.getVehiculos());
// console.log(registroAutomotor.getAutos());
// console.log(registroAutomotor.getCamiones());
// console.log(registroAutomotor.getMotos());





//hacer validaciones de objetos: q ningun parametro sea indefinido o vacio, if parametro es !== undefined, entra
//Agregar vehiculo, get y set, modificar un vehiculo, dar de baja