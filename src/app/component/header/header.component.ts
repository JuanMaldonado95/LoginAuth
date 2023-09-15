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

  // items: any;
  //  ngOnInit(){
  //      this.items = [
  //        {name: 'Action', url: 'app/aaa'},
  //        {name: 'Another Action', url: 'app/bbb'},
  //         {name: 'Something else here', url: 'app/ccc'}
  //        ];
  //  }

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
