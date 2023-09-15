import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccesoDosRoutingModule } from './acceso-dos-routing.module';
import { AccesoDosComponent } from './acceso-dos.component';


@NgModule({
  declarations: [AccesoDosComponent],
  imports: [
    CommonModule,
    AccesoDosRoutingModule
  ]
})
export class AccesoDosModule { }
