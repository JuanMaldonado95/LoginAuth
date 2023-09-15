import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal.component';

const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent,
    children: [
      {
        path: 'dashboard',
        component: PrincipalComponent,
      },
      {
        path: 'page1',
        loadChildren: () => import('../acceso-uno/acceso-uno.module').then(m => m.AccesoUnoModule)
      },
      {
        path: 'page2',
        loadChildren: () => import('../acceso-dos/acceso-dos.module').then(m => m.AccesoDosModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
