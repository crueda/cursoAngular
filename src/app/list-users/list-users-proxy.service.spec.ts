import { HttpModule } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';

import { ListUsersProxyService } from './list-users-proxy.service';

fdescribe('ListUsersProxyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListUsersProxyService],
      imports: [HttpModule]
    });
  });

  it('should be created', inject([ListUsersProxyService], (service: ListUsersProxyService) => {
    expect(service).toBeTruthy();
  }));

  it('should get users', inject([ListUsersProxyService], (service: ListUsersProxyService) => {
    expect(service.getUsers()).toBeTruthy();
  }));
});
