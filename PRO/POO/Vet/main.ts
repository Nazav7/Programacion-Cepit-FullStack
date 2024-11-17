import * as rls from 'readline-sync';
import { RedDeVeterinarias } from './RedDeVeterinarias';
import { Veterinaria } from "./Veterinaria";
import { Proveedor } from "./Proveedor";
import { Cliente } from './Cliente';
import { Paciente } from './Paciente';

//Se crea Red
const redDeVeterinaria = new RedDeVeterinarias()

//Se crea veterinaria
const arrayVeterinarias = [
    new Veterinaria("Veterinaria Pepa", "Calle 1"),
];

//Se crean proveedores
const arrayProveedores = [
    new Proveedor("Raul González", 2284689898),
    new Proveedor("Liliana Vélez", 2284689898)
]

//Se crean clientes
const arrayClientes = [
    new Cliente("Juan Pérez", 2284788959),
    new Cliente("María López", 2284475869)
]

//Se crean pacientes
const arrayPacientes = [
    new Paciente("Tita", "perro"),
    new Paciente("Misha", "gato"),
    new Paciente("Lore", "loro")
]

//Se agregan veterinarias, proveedores, clientes y pacientes a Red
redDeVeterinaria.agregarVeterinaria(arrayVeterinarias[0]);
redDeVeterinaria.agregarProveedor(arrayProveedores[0]);
redDeVeterinaria.agregarProveedor(arrayProveedores[1]);
redDeVeterinaria.agregarCliente(arrayClientes[0]);
redDeVeterinaria.agregarCliente(arrayClientes[1]);
redDeVeterinaria.agregarPaciente(arrayPacientes[0]);
redDeVeterinaria.agregarPaciente(arrayPacientes[1]);
redDeVeterinaria.agregarPaciente(arrayPacientes[2]);

//Se agregan clientes y pacientes a veterinaria
arrayVeterinarias[0].agregarCliente(arrayClientes[0]);
arrayVeterinarias[0].agregarPaciente(arrayPacientes[0]);
arrayVeterinarias[0].agregarPaciente(arrayPacientes[1]);
arrayVeterinarias[0].agregarCliente(arrayClientes[1]);
arrayVeterinarias[0].agregarPaciente(arrayPacientes[2]);

//Se agregan pacientes(mascotas) a clientes
arrayClientes[0].agregarMascota(arrayPacientes[0]);
arrayClientes[0].agregarMascota(arrayPacientes[1]);
arrayClientes[1].agregarMascota(arrayPacientes[2]);

menuPrincipal()

function menuPrincipal() {
    console.log("_________________________")
    console.log("BIENVENIDOS")
    console.log("-------------------------")
    console.log("1. Soy una Red de Veterinarias")
    console.log("2. Soy una sucursal")
    console.log("0. Salir")
    console.log("-------------------------")
    let opcion: number = rls.questionInt("Ingrese una opción: ");
    console.log("_________________________")

    switch (opcion) {
        case 1:
            menuRedDeVeterinarias()
            break;
        case 2:
            menuSucursal()
            break;
        case 0:
            break; //fijarse si sale solo con el break
        default:
            console.log("La opción no es válida");
            menuPrincipal()
    }
}

function menuRedDeVeterinarias() {
    console.log("_________________________")
    console.log("RED")
    console.log("-------------------------")
    console.log("1. Proveedores")
    console.log("2. Sucursales")
    console.log("3. Ver clientes")
    console.log("4. Ver pacientes")
    console.log("9. Atrás")
    console.log("0. Salir")
    console.log("-------------------------")
    let opcion: number = rls.questionInt("Ingrese una opción: ");
    console.log("_________________________")

    switch (opcion) {
        case 1:
            proveedores()
            break;
        case 2:
            sucursales()
            break;
        case 3:
            redDeVeterinaria.listarClientes();
            console.log("-------------------------");
            console.log("9. Atrás")
            let opcionCliente: number = rls.questionInt("Ingrese una opción: ");
            ("_________________________")
            if (opcionCliente === 9) {
                menuRedDeVeterinarias();}
                break;
        case 4:
            redDeVeterinaria.listarPacientes();
            break;
        case 9:
            menuPrincipal()
            break;
        case 0:
            break; //fijarse si sale solo con break
        default:
            console.log("La opción no es válida");
            menuRedDeVeterinarias()
    }
}

function menuSucursal() {
    //Antes el usuario deberia ingresar su ID de veterinaria y se debe buscar su ID
    //let opcion: number = rls.questionInt("Ingrese su ID: ");
    console.log("_________________________")
    console.log("VETERINARIA")
    console.log("-------------------------")
    console.log("1. Clientes")
    console.log("2. Pacientes")
    console.log("9. Atrás")
    console.log("0. Salir")
    console.log("-------------------------")
    let opcion: number = rls.questionInt("Ingrese una opción: ");
    console.log("_________________________")

    switch (opcion) {
        case 1:
            clientes();
            break;
        case 2:
            pacientes();
            break;
        case 9:
            menuPrincipal()
            break;
        case 0:
            break; //fijarse si sale solo con break
        default:
            console.log("La opción no es válida");
            menuSucursal()
    }
}

function proveedores() {
    console.log("_________________________")
    console.log("PROVEEDORES")
    console.log("-------------------------")
    redDeVeterinaria.listarProveedores();
    console.log("-------------------------")
    console.log("1. Agregar proveedor")
    console.log("2. Eliminar proveedor")
    console.log("3. Modificar proveedor")
    console.log("9. Atrás")
    console.log("0. Salir")
    let opcion: number = rls.questionInt("Ingrese una opción: ");
    console.log("_________________________")

    switch (opcion) {
        case 1:
            const nombre1: string = rls.question("Ingrese el nombre del proveedor: ");
            const telefono1: number = rls.questionInt("Ingrese el telefono del proveedor: ");
            redDeVeterinaria.agregarProveedorConsola(nombre1, telefono1)
            menuRedDeVeterinarias();
            break;
        case 2:
            const nombre2: string = rls.question("Ingrese el nombre del proveedor: ");
            const telefono2: number = rls.questionInt("Ingrese el telefono del proveedor: ");
            redDeVeterinaria.eliminarProveedorConsola(nombre2, telefono2)
            menuRedDeVeterinarias();
            break;
        case 3:
            const id3: number = rls.questionInt("Ingrese ID: ");
            const nombre3: string = rls.question("Ingrese nuevo nombre ");
            const telefono3: number = rls.questionInt("Ingrese nuevo telefono: ");
            redDeVeterinaria.modificarProveedorConsola(id3, nombre3, telefono3)
            menuRedDeVeterinarias();
            break;
        case 9:
            menuRedDeVeterinarias();
            break;
        case 0:
            break; //fijarse si sale solo con break
        default:
            console.log("La opción no es válida");
            menuRedDeVeterinarias()
    }
}

function sucursales() {
    console.log("_________________________")
    console.log("SUCURSALES DE VETERINARIAS")
    console.log("-------------------------")
    redDeVeterinaria.listarVeterinarias();
    console.log("-------------------------")
    console.log("1. Agregar sucursal")
    console.log("2. Eliminar sucursal")
    console.log("3. Modificar sucursal")
    console.log("9. Atrás")
    console.log("0. Salir")
    let opcion: number = rls.questionInt("Ingrese una opción: ");
    console.log("_________________________")

    switch (opcion) {
        case 1:
            const nombre1: string = rls.question("Ingrese el nombre de la sucursal: ");
            const direccion1: string = rls.question("Ingrese la direccion de la sucursal: ");
            redDeVeterinaria.agregarVeterinariaConsola(nombre1, direccion1)
            sucursales()
            break;
        case 2:
            const nombre2: string = rls.question("Ingrese el nombre de la sucursal: ");
            const direccion2: string = rls.question("Ingrese la direccion de la sucursal: ");
            redDeVeterinaria.eliminarVeterinariaConsola(nombre2, direccion2)
            sucursales()
            break;
        case 3:
            const id3: number = rls.questionInt("Ingrese ID: ");
            const nombre3: string = rls.question("Ingrese nuevo nombre ");
            const direccion3: string = rls.question("Ingrese nueva direccion: ");
            redDeVeterinaria.modificarVeterinariaConsola(id3, nombre3, direccion3)
            sucursales()
            break;
        case 9:
            menuRedDeVeterinarias();
            break;
        case 0:
            break; //fijarse si sale solo con break
        default:
            console.log("La opción no es válida");
            sucursales()
    }
}

function clientes() {
    console.log("_________________________")
    console.log("CLIENTES")
    console.log("-------------------------")
    redDeVeterinaria.listarClientes();
    console.log("-------------------------")
    console.log("1. Agregar cliente")
    console.log("2. Eliminar cliente")
    console.log("3. Modificar cliente")
    console.log("4. Registrar visita") //FALTA HACER ESTA, creo que hay que hacer registrar visita en Veterinaria, ahora esta en Cliente
    console.log("9. Atrás")
    console.log("0. Salir")
    let opcion: number = rls.questionInt("Ingrese una opción: ");
    console.log("_________________________")

    switch (opcion) {
        case 1:
            const nombre1: string = rls.question("Ingrese el nombre del cliente: ");
            const telefono1: number = rls.questionInt("Ingrese el telefono del cliente: ");
            arrayVeterinarias.forEach(veterinaria => {
                veterinaria.agregarClienteConsola(nombre1, telefono1);
            });
            clientes()
            break;
        case 2:
            const nombre2: string = rls.question("Ingrese el nombre del cliente: ");
            const telefono2: number = rls.questionInt("Ingrese el telefono del cliente: ");
            arrayVeterinarias.forEach(veterinaria => {
                veterinaria.eliminarClienteConsola(nombre1, telefono1);
            });
            clientes()
            break;
        case 3:
            const id3: number = rls.questionInt("Ingrese ID: ");
            const nombre3: string = rls.question("Ingrese el nuevo nombre del cliente: ");
            const telefono3: number = rls.questionInt("Ingrese el nuevo telefono del cliente: ");
            arrayVeterinarias.forEach(veterinaria => {
                veterinaria.modificarClienteConsola(nombre1, telefono1);
            });
            clientes()
            break;
        case 4:
            break;
        case 9:
            menuSucursal();
            break;
        case 0:
            break; //fijarse si sale solo con break
        default:
            console.log("La opción no es válida");
            clientes()
    }
}

function pacientes() {
    console.log("_________________________")
    console.log("PACIENTES")
    console.log("-------------------------")
    redDeVeterinaria.listarPacientes();
    console.log("-------------------------")
    console.log("1. Agregar pacientes")
    console.log("2. Eliminar pacientes")
    console.log("3. Modificar pacientes")
    console.log("9. Atrás")
    console.log("0. Salir")
    let opcion: number = rls.questionInt("Ingrese una opción: ");
    console.log("_________________________")

    switch (opcion) {
        case 1:
            const id1: number = rls.questionInt("Ingrese el ID del paciente: ");
            const nombre1: string = rls.question("Ingrese el nombre del paciente: ");
            const especie1: string = rls.question("Ingrese la especie del paciente: ");
            arrayVeterinarias.forEach(veterinaria => {
                veterinaria.verificarIdYAgregarPacienteConsola(id1, nombre1, especie1);
            });
            pacientes()
            break;
        case 2:
            const nombre2: string = rls.question("Ingrese el nombre del paciente: ");
            const especie2: string = rls.question("Ingrese la especie del paciente: ");
            arrayVeterinarias.forEach(veterinaria => {
                veterinaria.eliminarPacienteConsola(nombre2, especie2);
            });
            pacientes()
            break;
        case 3:
            const nombre3: string = rls.question("Ingrese el nombre del paciente: ");
            const especie3: string = rls.question("Ingrese la especie del paciente: ");
            arrayVeterinarias.forEach(veterinaria => {
                veterinaria.modificarPacienteConsola(nombre3, especie3);
            });
            pacientes()
            break;
        case 9:
            menuSucursal();
            break;
        case 0:
            break; //fijarse si sale solo con break
        default:
            console.log("La opción no es válida");
            pacientes()
    }
}