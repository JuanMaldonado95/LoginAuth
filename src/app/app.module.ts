import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilComponent } from './auth/perfil/perfil.component';

import { HttpClientModule } from '@angular/common/http';
import { NbPasswordAuthStrategy, NbAuthModule, NbDummyAuthStrategy, NbAuthSimpleToken } from '@nebular/auth';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AccesoUnoComponent } from './pages/acceso-uno/acceso-uno.component';
import { AccesoDosComponent } from './pages/acceso-dos/acceso-dos.component';
import { NbAlertModule, NbLayoutModule, NbThemeModule, NbUserModule } from '@nebular/theme';
import { LoginComponent } from './auth/login/login.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { HeaderComponent } from './component/header/header.component';
import { NbRoleProvider, NbSecurityModule } from '@nebular/security';
import { RoleProviderService } from './services/role-provider.service';

class PayloadDummy extends NbAuthSimpleToken {
  protected override payload = {
    role: 'test'
  };
}

@NgModule({
  declarations: [
    AppComponent,
    AccesoUnoComponent,
    AccesoDosComponent,
    PrincipalComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NbLayoutModule,
    NbAlertModule,
    NbUserModule,
    NbSecurityModule.forRoot(),
    NbThemeModule.forRoot(),

    NbAuthModule.forRoot({
      strategies: [
        NbDummyAuthStrategy.setup({
          name: 'email',
          token: {
            class:PayloadDummy
          }
        }),
      ],
      forms: {
        login: {
          redirectDelay: 0,
          strategy: 'email',
          rememberMe: true,   // whether to show or not the `rememberMe` checkbox
          showMessages: {     // show/not show success/error messages
            success: true,
            error: true,
          },
          redirect: {
            success: '/auth/perfil', ///// No hace la ruta debido a que se tiene un bug, la redireccion se realiza desde el login
            failure: null, // stay on the same page
          },
        }
      },
    }),
    NbSecurityModule.forRoot({
      accessControl: {
        test: {
          view: ['dashboard', 'logout', 'profile'],
          create: '',
          update: []
        }
      },
    }),

  ],
  providers: [{provide: NbRoleProvider, useClass: RoleProviderService},],
  bootstrap: [AppComponent]
})
export class AppModule { }
