import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccesoDosComponent } from './acceso-dos.component';

const routes: Routes = [
  {
    path:'',
    component:AccesoDosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccesoDosRoutingModule { }
