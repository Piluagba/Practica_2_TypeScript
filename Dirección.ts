export class Dirección {
    private Calle: string;
    private Número: number;
    private Piso: number;
    private Letra: string; 
    private CodigoPostal: number;
    private Población: string;
    private Provincia: string;

    constructor(Calle: string, Número: number, Piso: number, Letra: string, CodigoPostal: number, Población: string, Provincia: string) {
        this.Calle = Calle;
        this.Número = Número;
        this.Piso = Piso; 
        this.Letra = Letra;
        this.CodigoPostal = CodigoPostal;
        this.Población = Población;
        this.Provincia = Provincia;
    }

//Getters//
public getCalle (): string {
    return this.Calle;
}
public getNúmero (): number {
    return this.Número;
}
public getPiso (): number {
    return this.Piso;
}
public getLetra (): string {
    return this.Letra;
}
public getCodigoPostal (): number {
    return this.CodigoPostal;
}
public getPoblación (): string {
    return this.Población;
}
public getProvincia (): string {
    return this.Provincia;
}

//Setters//
    public setCalle (value: string) {
        this.Calle = value;
    }
    public setNúmero (value: number) {
        this.Número = value;
    }
    public setPiso (value: number) {
        this.Piso = value;
    }
    public setLetra (value: string) {
        this.Letra = value;
    }
    public setCodigoPostal (value : number) {
        this.CodigoPostal = value;
    }
    public setPoblación (value: string) {
        this.Población = value;
    }
    public setProvincia (value: string) {
        this.Provincia = value;
    }

}