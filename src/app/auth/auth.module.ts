import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { NbIconModule } from '@nebular/theme';
import { NbThemeModule } from '@nebular/theme';
import { NbPasswordAuthStrategy, NbAuthModule, NbDummyAuthStrategy } from '@nebular/auth';
import { NbEvaIconsModule } from '@nebular/eva-icons';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    NbThemeModule.forRoot(),
    NbIconModule,
    NbEvaIconsModule,

    NbAuthModule.forRoot({
      strategies: [
        NbDummyAuthStrategy.setup({
          name: 'login',
        }),
      ],
      forms: {},
    }),
  ]
})
export class AuthModule { }
