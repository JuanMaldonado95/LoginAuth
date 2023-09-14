import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {

  selectPerfil: any;
  selectEstado: any;

  array = ['PERFIL A', 'PERFIL B', 'PERFIL C'];
  arrayE = ['ESTADO A', 'ESTADO B', 'ESTADO C'];

  constructor(private router: Router) { }

  selectDDLPerfil(){
    if(this.selectEstado && this.selectPerfil){
      this.router.navigate(['/dashboard']);
    }
  }
}
