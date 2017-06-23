import { ListUsersProxyServiceFake } from './list-users-proxy.service.fake.spec';
import { TestBed, inject } from '@angular/core/testing';

import { ListUsersService } from './list-users.service';
import { ListUsersProxyService } from 'app/list-users/list-users-proxy.service';

describe('ListUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListUsersService,
      {provide: ListUsersProxyService, useClass: ListUsersProxyServiceFake}]
    });
  });

  it('should be created', inject([ListUsersService], (service: ListUsersService) => {
    expect(service).toBeTruthy();
  }));

  it('should get list users', ()  => {
    const service:  ListUsersService = TestBed.get(ListUsersService);
    service.getUsers().subscribe(
      users => {
        expect(users[0].login).toEqual('mojombo')
      }
    )
  });
});
