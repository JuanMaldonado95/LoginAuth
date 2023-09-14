import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal.component';
import { ValidationAuthGuard } from 'src/app/guards/validation-auth.guard';
import { AccesoUnoComponent } from '../acceso-uno/acceso-uno.component';

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
        loadChildren:() => import('../acceso-uno/acceso-uno.module').then(m => m.AccesoUnoModule)
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
