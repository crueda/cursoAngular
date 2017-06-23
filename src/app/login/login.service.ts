import { Injectable, Inject } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { LoginProxyService } from './login-proxy.service';
import { RolService } from './rol.service';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {CookieService} from 'angular2-cookie/core';
import {JwtHelper} from 'angular2-jwt';


@Injectable()
export class LoginService {
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private cookieService: CookieService,
              private loginProxy: LoginProxyService,
              private rolService: RolService
              ) {}

  dologin(username: string, password: string): Observable<string> {
    return this.loginProxy.doLogin(username, password).map(
      response => {
        const token = response.json().token;
        this.cookieService.put('access_token', token);
        const decode = this.jwtHelper.decodeToken(token);
        const rol = decode.permissions; 
        //console.log('permission: ' + decode.permissions);
        //sessionStorage.setItem('rol', decode.permissions);
        this.rolService.setRol(rol);
        return token;
      })
  }

  // para el tratamiento de error, aqui podria tener un catch y lanzar u error con throw hacia el componente

}
