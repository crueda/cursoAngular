import { Injectable, Inject } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';


@Injectable()
export class LoginProxyService {

  constructor(private http: Http,
              @Inject('config') private config) {}

  doLogin(username: string, password: string): Observable<Response> {
    const body = `username=${username}&password=${password}`;
    const header: Headers = new Headers()
    header.set('Content-Type', 'application/x-www-form-urlencoded')
    const opts: RequestOptions = new RequestOptions()
    opts.headers = header
    return this.http.post(this.config.api_login, body, opts)

    //otra opcion
    //return this.http.post(`${enviroments.api}/login`, body, opts)


  }

}
