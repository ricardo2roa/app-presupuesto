import { Component, OnInit } from '@angular/core';
import {PresupuestoService} from "../presupuesto.service";
import {Activo} from "../presupuesto.model";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(public presupuestoService:PresupuestoService){}

  ngOnInit(): void {
  }

  lista:string[] = ["+","-"];
  tipo:string = "+";
  xdescripcion:string = "";
  xvalor:number = 0;


  agregar(){
    this.presupuestoService.agregarActivo(new Activo(this.xdescripcion,this.xvalor),this.tipo)
    this.xdescripcion = "";
    this.xvalor = 0;
    this.presupuestoService.totalIngreso.emit(this.presupuestoService.totalIngresos)
    this.presupuestoService.totalEgreso.emit(this.presupuestoService.totalEgresos)
    this.presupuestoService.totalActivos.emit(this.presupuestoService.total)
  }

}
