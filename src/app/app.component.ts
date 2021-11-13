import {Component, OnInit} from '@angular/core';
import {PresupuestoService} from "./presupuesto.service";
import {Activo} from "./presupuesto.model";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app-presupuesto';

  ingresos: Activo[] = [];
  egresos: Activo[] = [];

  total: number = 0;

  constructor(public presupuestoService: PresupuestoService){
    this.presupuestoService.totalEgreso.subscribe((total : number) => this.total = total);
  }

  ngOnInit(): void {
    this.ingresos = this.presupuestoService.ingresos
    this.egresos = this.presupuestoService.egresos
  }



}
