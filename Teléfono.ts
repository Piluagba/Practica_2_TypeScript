export class Teléfono {
    private Tipo: string;
    private Numero: number;

constructor(Tipo: string, Numero: number){
    this.Tipo = Tipo;
    this.Numero = Numero;
    }

//Getters//
public getTipo ():string {
    return this.Tipo;
}
public getNumero (): number{
    return this.Numero;
}

//Setters//
    public setTipo (value: string) {
        this.Tipo = value;
    }
    public setNumero (value: number) {
        this.Numero = value;
    }


}