import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { NbAlertModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbIconModule, NbInputModule, NbLayoutModule, NbUserModule } from '@nebular/theme';
import { NbThemeModule } from '@nebular/theme';
import { NbAuthModule } from '@nebular/auth';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { PerfilComponent } from './perfil/perfil.component';
import { ContainerComponent } from './container/container.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [LoginComponent, PerfilComponent, ContainerComponent, LogoutComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    RouterModule,
    NbThemeModule.forRoot(),
    NbIconModule,
    NbEvaIconsModule,
    NbAuthModule,
    NbAlertModule,
    FormsModule,
    FormsModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NbLayoutModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule
  ]
})
export class AuthModule { }
