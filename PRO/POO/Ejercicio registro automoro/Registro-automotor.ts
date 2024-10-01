import {Auto} from "./Auto";
import {Moto} from "./Moto";
import {Camion} from "./Camion";

export class RegistroAutomotor {
    private autos: Auto[]
    private motos: Moto[]
    private camiones: Camion[]
    
    public constructor() {
        this.autos = [];
        this.motos = [];
        this.camiones = [];
    }
    
    //Getters
    getAutos(): Auto[] {
        return this.autos;
    }

    getMotos(): Moto[] {
        return this.motos;
    }

    getCamiones(): Camion[] {
        return this.camiones;
    }

    // modificarVehiculo(vehiculo: Vehiculo, nuevaMarca: string, nuevoModelo: string){
    //     vehiculo._marca = nuevaMarca
    //     vehiculo._modelo = nuevoModelo
    // }

    modificarAuto(index: number, auto: Auto): void {
        if (this.autos[index]) {
            this.autos[index] = auto;
        }
    }

    modificarMoto(index: number, moto: Moto): void {
        if (this.motos[index]) {
            this.motos[index] = moto;
        }
    }

    modificarCamion(index: number, camion: Camion): void {
        if (this.camiones[index]) {
            this.camiones[index] = camion;
        }
    }

    agregarAuto(auto: Auto): void {
        this.autos.push(auto);
    }

    agregarMoto(moto: Moto): void {
        this.motos.push(moto);
    }

    agregarCamion(camion: Camion): void {
        this.camiones.push(camion);
    }

    darDeBajaAuto(auto: Auto): void {
        this.autos = this.autos.filter(element => element !== auto)
    }

    darDeBajaMoto(moto: Moto): void {
        this.motos = this.motos.filter(element => element !== moto)
    }

    darDeBajaCamion(camion: Camion): void {
        this.camiones = this.camiones.filter(element => element !== camion)
    }
}

