import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidationLoginGuard } from './guards/validation-login.guard';
import { ValidationAuthGuard } from './guards/validation-auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/principal/principal.module').then(m=>m.PrincipalModule),
    canActivate: [ValidationLoginGuard, ValidationAuthGuard],
  },
  {
    path: '**',
    redirectTo: '/auth/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
