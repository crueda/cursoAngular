import { User } from './user';
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



  getUsers(): Observable<User[]> {
    return this.listUsersProxy.getUsers().map(
      response => {
        const data = response.json().data;
        let listUsers: User[] = [];
        console.log(data);
       data.forEach(element => {
          const user: User = {
            login: element.login,
            avatar: element.avatar_url,
            admin: element.site_admin
          };
          // listUsers.push(user);
          listUsers = [...listUsers, user];
        });
        return listUsers;
      })
  }

}


