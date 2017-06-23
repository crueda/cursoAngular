import { CookieService } from 'angular2-cookie/core';
import { LoginProxyService } from './../login/login-proxy.service';
import { RolService } from './../login/rol.service';
import { LoginService } from './../login/login.service';
import { HttpModule } from '@angular/http';
import { TestBed, inject, async } from '@angular/core/testing';

import { ListUsersProxyService } from './list-users-proxy.service';

const config = {
                api_users: 'http://localhost:3033/restricted/1/list/users'
             };


fdescribe('ListUsersProxyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListUsersProxyService,
      LoginService,
      LoginProxyService,
      CookieService,
      RolService,
      {provide: 'config', useValue: config}],
      imports: [HttpModule]
    });
  });

  it('should be created', inject([ListUsersProxyService], (service: ListUsersProxyService) => {
    expect(service).toBeTruthy();
  }));

  /*it('should get users', inject([ListUsersProxyService], (service: ListUsersProxyService) => {
    expect(service.getUsers()).toBeTruthy();
  }));*/

   it ('should get users', async(() => {
    const service: ListUsersProxyService = TestBed.get(ListUsersProxyService);
    const loginService: LoginService = TestBed.get(LoginService);
    loginService.dologin('admin', 'admin').subscribe(
      token => {
        service.getUsers().subscribe(
          //response => console.log(response)
          (response) => expect(response.json()).not.toBeNull(),
          (error) => fail(error)
        );
      }
    )

  }));

});
