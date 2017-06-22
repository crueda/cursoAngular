import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import {BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class RolService {

  rolSource: BehaviorSubject<number> = new BehaviorSubject(0);

  getRol(): Observable<number> {
    return this.rolSource.asObservable();
  }

  setRol(rol: number) {
    this.rolSource.next(rol);
  }

  constructor() { }

}
