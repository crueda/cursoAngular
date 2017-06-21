import { RouterStateSnapshot, ActivatedRouteSnapshot, CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean
}

@Injectable()
export class ConfirmService implements CanDeactivate<CanComponentDeactivate>{

  constructor() { }

  canDeactivate(component: CanComponentDeactivate,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState?: RouterStateSnapshot) {
    // devuelve lo que diga el metodo canDeactivate del componente o sino existe, true
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
