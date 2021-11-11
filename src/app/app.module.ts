import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import {PresupuestoService} from "./presupuesto.service";
import {FormsModule} from "@angular/forms";
import { IngresosComponent } from './ingresos/ingresos.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    IngresosComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [PresupuestoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
