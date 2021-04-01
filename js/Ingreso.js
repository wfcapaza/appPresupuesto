class Ingreso extends Dato{
    static contadorIngresos = 0;

    constructor(descripcion, valor){
        super(descripcion, valor);
        this.Id = ++Ingreso.contadorIngresos;
    }

    get id(){
        return this.Id;
    }
}