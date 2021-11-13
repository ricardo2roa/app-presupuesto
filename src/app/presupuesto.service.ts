import {Activo} from "./presupuesto.model";
import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export class PresupuestoService{
  ingresos: Activo[] = [];
  egresos: Activo[] = [];
  total:number=0;

  totalIngresos:number;
  totalEgresos:number;

  agregarActivo(activo:Activo,tipo:string){
    if(tipo == "+"){
      this.ingresos.push(activo)
    }else if(tipo == "-"){
      this.egresos.push(activo)
    }
    this.totalPresupuesto()
    //this.imprimir(`Total: ${this.total}`)
  }

  totalIngreso = new EventEmitter<Number>();
  totalEgreso = new EventEmitter<Number>();
  totalActivos = new EventEmitter<Number>();

  imprimir(mensaje:string){
    console.log(mensaje)
  }

  totalPresupuesto(){
    this.totalIngresos = 0;
    this.totalEgresos = 0

    for( let item of this.ingresos ){
      this.totalIngresos += item.valor;
    }
    for( let item of this.egresos ){
      this.totalEgresos += item.valor;
    }

    this.total = this.totalIngresos - this.totalEgresos
    this.imprimir(`Hola ${this.totalIngresos} ${this.totalEgresos}`)
  }

  eliminarIngreso(num:number){
    this.ingresos.splice(num,1);
    this.totalPresupuesto()
  }

  eliminarEgreso(num:number){
    this.egresos.splice(num,1);
    this.totalPresupuesto()
  }
}

