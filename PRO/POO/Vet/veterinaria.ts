import { Cliente } from "./Cliente";
import { Paciente } from "./Paciente";

export class Veterinaria {
    private id: number;
    private nombre: string;
    private direccion: string;
    private clientes: Cliente[];
    private pacientes: Paciente[]

    constructor(nombre: string, direccion: string) {
        this.id = 0;
        this.nombre = nombre;
        this.direccion = direccion;
        this.clientes = [];
        this.pacientes = [];
    }

    //Métodos

    agregarClienteConsola(nombre: string, telefono: number) {
        const cliente = this.clientes.find(c => c.getNombre() === nombre && c.getTelefono() === telefono);
        if (!cliente) {
            const nuevoCliente = new Cliente(nombre, telefono);
            this.clientes.push(nuevoCliente);
            console.log('El cliente ha sido agregado');
        } else {
            console.log('No se puede agregar cliente porque ya existe');
        }
    }

    verificarIdYAgregarPacienteConsola(id: number, nombre: string, especie: string) {
        const cliente = this.clientes.find(c => c.getId() === id)
        if (cliente) {
            this.agregarPacienteConsola(nombre, especie)
        } else {
            console.log('El ID no esta registrado')
        }
    }

    agregarPacienteConsola(nombre: string, especie: string) {
        const paciente = this.pacientes.find(p => p.getNombre() === nombre && p.getEspecie() === especie);
        if (!paciente) {
            const nuevoPaciente = new Paciente(nombre, especie);
            this.pacientes.push(nuevoPaciente);
            console.log('El paciente ha sido agregado');
        } else {
            console.log('No se puede agregar paciente porque ya existe');
        }
    }


    eliminarClienteConsola(nombre: string, telefono: number) {
        const cliente = this.clientes.find(c => c.getNombre() === nombre && c.getTelefono() === telefono);
        if (cliente) {
            const index = this.clientes.indexOf(cliente);
            this.clientes.splice(index, 1);
            console.log('El cliente ha sido eliminado');
        } else {
            console.log('El cliente no se encuentra en la base de datos');
        }
    }

    eliminarPacienteConsola(nombre: string, especie: string) {
        const paciente = this.pacientes.find(p => p.getNombre() === nombre && p.getEspecie() === especie);
        if (paciente) {
            const index = this.pacientes.indexOf(paciente);
            this.pacientes.splice(index, 1);
            console.log('El paciente ha sido eliminado');
        } else {
            console.log('El paciente no se encuentra en la base de datos');
        }
    }


    modificarClienteConsola(nombre: string, telefono: number) {
        const cliente = this.clientes.find(c => c.getNombre() === nombre && c.getTelefono() === telefono);
        if (cliente) {
            cliente.setNombre(nombre);
            cliente.setTelefono(telefono);
            console.log('El cliente ha sido modificado');
        } else {
            console.log('No se encontró cliente');
        }
    }

    modificarPacienteConsola(nombre: string, especie: string) {
        const paciente = this.pacientes.find(p => p.getNombre() === nombre && p.getEspecie() === especie);
        if (paciente) {
            paciente.setNombre(nombre);
            paciente.setEspecie(especie);
            console.log('El paciente ha sido modificado');
        } else {
            console.log('No se encontró paciente');
        }
    }

    //Getters
    getNombre(): string {
        return this.nombre;
    }

    getId(): number {
        return this.id;
    }

    getDireccion(): string {
        return this.direccion;
    }

    getClientes(): Cliente[] {
        return [...this.clientes];
    }

    getPacientes(): Paciente[] {
        return [...this.pacientes]
    }

    //Getters
    setNombre(nuevoNombre: string): void {
        this.nombre = nuevoNombre;
    }

    setId(nuevoId: number): void {
        this.id = nuevoId;
    }

    setClientes(nuevaLista: Cliente[]): void {
        this.clientes = [...nuevaLista];
    }

    setPacientes(nuevaLista: Paciente[]): void {
        this.pacientes = [...nuevaLista]
    }

    setDireccion(nuevaDireccion: string): void {
        this.direccion = nuevaDireccion;
    }

    agregarCliente(cliente: Cliente) {
        if (cliente != undefined && !this.clientes.includes(cliente)) {
            this.clientes.push(cliente);

        }
    }

    agregarPaciente(paciente: Paciente) {
        if (paciente != undefined && !this.pacientes.includes(paciente)) {
            this.pacientes.push(paciente);

        }
    }

    eliminarCliente(cliente: Cliente) {
        if (cliente != undefined && this.clientes.includes(cliente)) {
            const index = this.clientes.indexOf(cliente);
            this.clientes.splice(index, 1);

        }
    }

    eliminarPaciente(paciente: Paciente) {
        if (paciente != undefined && this.pacientes.includes(paciente)) {
            const index = this.pacientes.indexOf(paciente);
            this.pacientes.splice(index, 1);

        }
    }

    modificarCliente(cliente: Cliente, clienteModificado: Cliente) {
        if (cliente != undefined && this.clientes.includes(cliente)) {
            const index = this.clientes.indexOf(cliente);
            this.clientes[index] = clienteModificado;
        }
    }

    modificarPaciente(paciente: Paciente, pacienteModificado: Paciente) {
        if (paciente != undefined && this.pacientes.includes(paciente)) {
            const index = this.pacientes.indexOf(paciente);
            this.pacientes[index] = pacienteModificado;

        }
    }
}





//Métodos
