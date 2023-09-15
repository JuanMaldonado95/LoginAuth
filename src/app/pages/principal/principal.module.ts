import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { PrincipalComponent } from './principal.component';
import { HeaderComponent } from 'src/app/component/header/header.component';
import { NbUserModule } from '@nebular/theme';

@NgModule({
  declarations: [PrincipalComponent, HeaderComponent],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    NbUserModule
  ],
  exports: [PrincipalComponent]
})
export class PrincipalModule { }
