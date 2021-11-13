import {Component, Input, OnInit} from '@angular/core';
import {Activo} from "../presupuesto.model";
import {PresupuestoService} from "../presupuesto.service";

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {

  @Input()egresos:Activo;
  @Input()i:number=0;
  @Input()total:number=0;

  constructor(public presupuestoService:PresupuestoService){ }


  ngOnInit(): void {
  }

  eliminar(num:number){
    this.presupuestoService.eliminarEgreso(num);
    this.presupuestoService.totalIngreso.emit(this.presupuestoService.totalIngresos)
    this.presupuestoService.totalEgreso.emit(this.presupuestoService.totalEgresos)
    this.presupuestoService.totalActivos.emit(this.presupuestoService.total)
  }

}
