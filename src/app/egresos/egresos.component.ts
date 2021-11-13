import {Component, Input, OnInit} from '@angular/core';
import {Activo} from "../presupuesto.model";

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {

  @Input()egresos:Activo;
  @Input()i:number=0;
  @Input()total:number=0;

  constructor() { }


  ngOnInit(): void {
  }

}
