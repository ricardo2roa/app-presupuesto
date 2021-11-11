import { Component } from '@angular/core';
import {PresupuestoService} from "./presupuesto.service";
import {Activo} from "./presupuesto.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-presupuesto';

  ingresos: Activo[] = [];
  egresos: Activo[] = [];

  constructor(private presupuestoService: PresupuestoService){}

  ngOnInit(): void {
    this.ingresos = this.presupuestoService.ingresos
    this.egresos = this.presupuestoService.egresos
  }



}
