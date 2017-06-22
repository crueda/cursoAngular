import { environment } from './../../environments/environment';
import { Injectable, Inject } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class ListUsersProxyService {

  constructor(private http: Http) { }

  getUsers(): Observable<Response> {
    const ops: RequestOptions = new RequestOptions();
    ops.withCredentials = true;
    return this.http.get(`${environment.api}/restricted/1/list/users`, ops)
  }

}
