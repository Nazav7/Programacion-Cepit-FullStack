export class Camion {
    private marca: string;
    private modelo: string;
    private anio: number;

    constructor(marca: string, modelo: string, anio: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }

    getMarca(): string {
        return this.marca;
    }

    setMarca(marca: string): void {
        this.marca = marca;
    }

    getModelo(): string {
        return this.modelo;
    }

    setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    getAnio(): number {
        return this.anio;
    }

    setAnio(anio: number): void {
        this.anio = anio;
    }
}