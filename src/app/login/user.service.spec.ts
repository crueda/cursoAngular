import { ListUsersProxyServiceFake } from './../list-users/list-users-proxy.service.fake.spec';
import { UserProxyService } from './user-proxy.service';
import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
