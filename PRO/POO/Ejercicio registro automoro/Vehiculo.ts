export class Vehiculo {
    private _marca: string;
    private _modelo: string;

    public constructor(marca: string, modelo: string) {
        this._marca = marca;
        this._modelo = modelo;
    }

    //Getters
    getMarca(): string {
        return this._marca;
    }

    getModelo(): string {
        return this._modelo;
    }

    //Setters
    setMarca(marca: string){
        this._marca = marca
    }

    setModelo(modelo: string){
        this._modelo = modelo
    }

    // modificarVehiculo(nuevaMarca: string, nuevoModelo: string){
    //     this._marca = nuevaMarca
    //     this._modelo = nuevoModelo
    // }

}