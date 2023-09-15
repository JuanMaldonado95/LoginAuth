import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccesoUnoRoutingModule } from './acceso-uno-routing.module';
import { AccesoUnoComponent } from './acceso-uno.component';


@NgModule({
  declarations: [AccesoUnoComponent],
  imports: [
    CommonModule,
    AccesoUnoRoutingModule,
  ]
})
export class AccesoUnoModule { }
