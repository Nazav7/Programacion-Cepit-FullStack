import { RegistroAutomotor } from "./Registro-automotor";
import { Vehiculo } from "./Vehiculo";

// Crear instancias de vehiculos
const vehiculo1 = new Vehiculo ("Auto", "Toyota", "M123", 2019);
const vehiculo2 = new Vehiculo ("Moto", "Yamaha", "M124", 2018);

// const vehiculos3: Vehiculo[] = [
//     new Vehiculo("Avion", "Yamaha", "M124", 2018),
//     new Vehiculo("Helicoptero", "Toyota", "Corolla", 2020),
// ];

// Crear instancia de RegistroAutomotor
const registroAutomotor = new RegistroAutomotor();

// Agregar vehiculos
registroAutomotor.agregarVehiculo(vehiculo1);
registroAutomotor.agregarVehiculo(vehiculo2);

// Mostrar vehiculos
console.log("Mostrar vehiculos agregados")
console.log(registroAutomotor.getVehiculos());

// Eliminar un vehiculo
registroAutomotor.eliminarVehiculo(vehiculo2);

// Modificar vehiculo
// vehiculo1.modificarVehiculo("Camion", "Toyota", "M123", 2019)
vehiculo1.setModelo('nuevoModelo')
registroAutomotor.modificarVehiculo(0, vehiculo1);

// Mostrar vehiculos despues de eliminar y modificar
console.log("Mostrar vehiculos despues de eliminar vehiculo2 y modificar vehiculo1")
console.log(registroAutomotor.getVehiculos());







//Agregar vehiculo, get y set, modificar un vehiculo, dar de baja