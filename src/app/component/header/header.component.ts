import { Component } from '@angular/core';
import { NbAuthService } from '@nebular/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  user = {
    name: "Prueba Nebular Auth"
  };

  constructor(
    private authService: NbAuthService,
    private router: Router) {
  }

  Logout() {
    this.authService.logout('email').subscribe(res => {
      res.isSuccess() && this.router.navigate(['/auth/logout'])
    });
  }

}
