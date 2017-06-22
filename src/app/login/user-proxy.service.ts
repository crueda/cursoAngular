import { Injectable, Inject } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';


@Injectable()
export class UserProxyService {

  constructor(private http: Http,
              @Inject('config') private config) {}

  getUsers(token: string): Observable<Response> {
    const header: Headers = new Headers()
    console.log('token:' + token);
    header.set('x-access-token', token)
    const opts: RequestOptions = new RequestOptions()
    opts.headers = header
    return this.http.post(this.config.api_users, opts)
  }

}
