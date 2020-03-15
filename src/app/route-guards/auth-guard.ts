import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Injectable } from "@angular/core";

import { LoginService } from "../login/login.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}
  public test: string = "Ashish";
  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.loginService.getUser()) {
      return true;
    }
    return this.router.createUrlTree(["/login"]);
  }
}
