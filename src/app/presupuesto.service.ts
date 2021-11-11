import {Activo} from "./presupuesto.model";
import {Injectable} from "@angular/core";

@Injectable()
export class PresupuestoService{
  ingresos: Activo[] = [];
  egresos: Activo[] = [];

  agregarActivo(activo:Activo,tipo:string){
    if(tipo = "+"){
      this.ingresos.push(activo)
    }else if(tipo = "-"){
      this.egresos.push(activo)
    }
    this.imprimir(`Este es un activo -> Nombre: ${activo.nombre} Valor: ${activo.valor}`)
  }

  imprimir(mensaje:string){
    console.log(mensaje)
  }
}
