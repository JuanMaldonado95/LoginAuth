import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccesoUnoComponent } from './acceso-uno.component';

const routes: Routes = [
  {
    path: '',
    component:AccesoUnoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccesoUnoRoutingModule { }
