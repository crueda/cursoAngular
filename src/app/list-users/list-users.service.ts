import { Injectable, Inject } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { ListUsersProxyService } from './list-users-proxy.service';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {CookieService} from 'angular2-cookie/core';
import {JwtHelper} from 'angular2-jwt';

@Injectable()
export class ListUsersService {


  constructor(
              private listUsersProxy: ListUsersProxyService
              ) {}



  getUsers(): Observable<string> {
    return this.listUsersProxy.getUsers().map(
      response => {
        return response.json().data;
      })
  }

}


