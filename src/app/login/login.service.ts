import { Injectable, Inject } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { LoginProxyService } from './login-proxy.service';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor(private loginProxy: LoginProxyService) {}

  dologin(username, password): Observable<string> {
    return this.loginProxy.doLogin(username, password).map(
      response => {
        return response.json().token
      })
  }



}
