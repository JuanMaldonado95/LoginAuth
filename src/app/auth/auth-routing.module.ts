import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ContainerComponent } from './container/container.component';
import { ValidationLoginGuard } from '../guards/validation-login.guard';
import { LogoutComponent } from './logout/logout.component';
import { patch } from '@nebular/theme';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'prefix'
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'perfil',
        component: PerfilComponent,
        canActivate: [ValidationLoginGuard],
      },
      {
        path: 'logout',
        component: LogoutComponent,
        canActivate: [ValidationLoginGuard]
      },
      // {
      //   path: 'request-password',
      //   component: NbRequestPasswordComponent,
      // },
      // {
      //   path: 'reset-password',
      //   component: NbResetPasswordComponent,
      // },
    ],
  },
  {
    path:'**',
    redirectTo:'auth'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
