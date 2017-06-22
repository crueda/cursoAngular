import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions } from '@angular/http';
import { Inject } from '@angular/core';
import 'rxjs/add/operator/catch';


export class ApiService {

  //users: User[]

  /*private options = new RequestOptions({
    headers: new Headers({'Content-Type': 'application/x-www-form-urlencoded'})
  });*/

  constructor(private http: Http,
              @Inject('config') private config) {}

  login(username, password): Observable<Response>{
    const params: URLSearchParams = new URLSearchParams();
    params.set('username', username);
    params.set('password', password);

    return this.http.get(this.config.api_login, {
      search: params
    })
    .catch(error => Observable.throw(error))
  }



  getUsers(): Observable<Response>{
    return this.http.get(this.config.api_users)
    .catch(error => Observable.throw(error))
  }

  
  
  
  /*searchUsers(){
    this.sub = this.service.getUsers()
    .map(response => response.json()).subscribe(
      results => this.users = results,
      error => console.log(error)
    )
  }*/

}
