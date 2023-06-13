export class Mail {
    private Tipo: string;
    private Dirección: string; //Esto se podría quitar, (poner lo de string) o hacer otro archivo ts para qu eno coincida con el de dirección. Si le dejo los [] y en el Main.ts lo pongo en el ejemplo, da fallo porque uso un string, así que por eso creo que se debe quitar los [] y poner string, y/o hacer otro archivo apra que no se confunda con el de dirección, podría ser? o Basta con quitar lo de [] y ya o se confunden? o poner _dirección?
    
    constructor(Tipo: string, Dirección: string){
        this.Tipo = Tipo;
        this.Dirección = Dirección;
    }

//Getters//
    public getTipo ():string {
        return this.Tipo;
    }
    public getDirección (): string{
        return this.Dirección
    }
//Setters//
    public setTipo (value: string) {
            this.Tipo = value;
    }
    public setDirección (value: string) {
            this.Dirección = value;
    }

}