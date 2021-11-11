import { Component, OnInit } from '@angular/core';
import {PresupuestoService} from "../presupuesto.service";
import {Activo} from "../presupuesto.model";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(private presupuestoService: PresupuestoService){}

  ngOnInit(): void {
  }

  lista:string[] = ["+","-"]
  tipo:string = ""
  xdescripcion:string = ""
  xvalor:number = 1

  agregar(){this.presupuestoService.agregarActivo(new Activo(this.xdescripcion,this.xvalor),this.tipo)};

}
