export class Vehiculo {
    private _tipo: string;
    private _marca: string;
    private _modelo: string;
    private _anio: number;

    public constructor(tipo:string, marca: string, modelo: string, anio: number) {
        this._tipo = tipo;
        this._marca = marca;
        this._modelo = modelo;
        this._anio = anio;
    }

    //Getters
    getTipo(): string {
        return this._tipo;
    }
    
    getMarca(): string {
        return this._marca;
    }

    getModelo(): string {
        return this._modelo;
    }

    getAnio(): number {
        return this._anio;
    }

    //Setters
    setTipo(tipo: string){
        this._tipo = tipo
    }

    setMarca(marca: string){
        this._marca = marca
    }

    setModelo(modelo: string){
        this._modelo = modelo
    }

    setAnio(anio: number){
        this._anio = anio
    }

    // modificarVehiculo(nuevoTipo:string, nuevaMarca: string, nuevoModelo: string, nuevoAnio: number){
    //     this._tipo = nuevoTipo
    //     this._marca = nuevaMarca
    //     this._modelo = nuevoModelo
    //     this._anio = nuevoAnio
    // }

}