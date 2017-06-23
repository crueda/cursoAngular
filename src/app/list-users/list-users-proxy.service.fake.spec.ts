import { LIST_USER_FAKE } from './list-users.fake.spec';
import { environment } from './../../environments/environment';
import { Injectable, Inject } from '@angular/core';
import { Http, Response, RequestOptions, Headers, ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import 'rxjs/add/observable/of';

@Injectable()
export class ListUsersProxyServiceFake {

  constructor() { }

  getUsers(): Observable<Response> {
    const responseOptions = new ResponseOptions();
    responseOptions.status = 200;
    responseOptions.body = LIST_USER_FAKE;
    return Observable.of(new Response(responseOptions));
  }

}
