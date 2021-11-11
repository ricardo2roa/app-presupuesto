import {Component, Input, OnInit} from '@angular/core';
import {Activo} from "../presupuesto.model";

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {

  @Input()ingreso:Activo;
  @Input()i:number=0;

  constructor() { }

  ngOnInit(): void {
  }

}
