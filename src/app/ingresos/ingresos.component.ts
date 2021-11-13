import {Component, Input, OnInit} from '@angular/core';
import {Activo} from "../presupuesto.model";
import {PresupuestoService} from "../presupuesto.service";

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {

  @Input()ingreso:Activo;
  @Input()i:number=0;

  constructor(public presupuestoService:PresupuestoService) { }

  ngOnInit(): void {
  }

  eliminar(num:number){
    this.presupuestoService.eliminarIngreso(num);
    this.presupuestoService.totalIngreso.emit(this.presupuestoService.totalIngresos)
    this.presupuestoService.totalEgreso.emit(this.presupuestoService.totalEgresos)
    this.presupuestoService.totalActivos.emit(this.presupuestoService.total)
  }
}
