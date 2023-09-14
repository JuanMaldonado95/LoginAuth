import { Injectable } from '@angular/core';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { NbRoleProvider } from '@nebular/security';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleProviderService implements NbRoleProvider {

  constructor(private authService: NbAuthService) { }

  getRole(): Observable<string | string[]> { // No valida que el token este valido, solo devuelve el rol, si no tiene solo el invitado devuleve

    return this.authService.onTokenChange()
      .pipe(
        map((token: NbAuthJWTToken | any) => {
          return token.getPayload()['role'] || 'guest';
        }),
      );
  }

}
