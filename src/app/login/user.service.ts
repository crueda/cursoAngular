import { Injectable, Inject } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { UserProxyService } from './user-proxy.service';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private userProxy: UserProxyService) {}

  getUsers(token: string): Observable<string> {
    return this.userProxy.getUsers(token).map(
      response => {
        console.log (response.json())
        return response.json().data
      })
  }

}
