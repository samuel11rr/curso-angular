import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

import { Auth } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private auth:Auth,
    private router:Router
  ) { }

  canActivate(  ){
    if ( this.auth.authenticated() ) {
        console.log("El guard pasó");
        return true;
    } else {
      console.log("Guard Bloqueado");
      this.router.navigate(['/home']);
      return false;
    }
  }

}
