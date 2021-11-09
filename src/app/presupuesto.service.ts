import {Activo} from "./presupuesto.model";

export class PresupuestoService{
  presupuesto: Activo[] = [];

  agregarActivo(activo:Activo){
    this.presupuesto.push(activo)
    this.imprimir(`Este es un activo -> Nombre: ${activo.nombre} Valor: ${activo.valor}`)
  }
  imprimir(mensaje:string){
    console.log(mensaje)
  }
}
