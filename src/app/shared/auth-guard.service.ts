import { Injectable } from "@angular/core";
import { CanActivate, CanLoad, Router, ActivatedRouteSnapshot, RouterStateSnapshot, Route, CanActivateChild } from "@angular/router";

import { AuthService } from "../auth/auth.service";

@Injectable()
export class AuthGuard implements CanActivate, CanLoad, CanActivateChild {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.isAuth()) {
          return true;
        } else {
          this.router.navigate(["/login"]);
          // return false;
        }
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      return this.canActivate(route, state);
    }

    canLoad(route: Route) {
        if (this.authService.isAuth()) {
          return true;
        } else {
          this.router.navigate(["/login"]);
          // return false;
        }
    }
}
