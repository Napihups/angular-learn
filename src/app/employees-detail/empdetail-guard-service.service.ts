import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class EmpdetailGuardServiceService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot): boolean {
    let id = route.url[1].path;
    if(id == "hello"){
      alert("Invalid Employee name");
      this._router.navigate(['/attendances']);
      return false;
    };
    return true;

  }

  constructor(private _router: Router) { }

}
