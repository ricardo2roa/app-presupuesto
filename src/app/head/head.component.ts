import { Component, OnInit } from '@angular/core';
import {PresupuestoService} from "../presupuesto.service";

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  total: number;
  ingresos:number;
  egresos:number;

  constructor(public presupuestoService:PresupuestoService) {
    this.presupuestoService.totalEgreso.subscribe((total : number) => this.egresos = total);
    this.presupuestoService.totalIngreso.subscribe((total : number) => this.ingresos = total);
    this.presupuestoService.totalActivos.subscribe((total : number) => this.total = total);
  }

  ngOnInit(): void {
  }

}
