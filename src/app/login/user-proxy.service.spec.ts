import { TestBed, inject } from '@angular/core/testing';

import { UserProxyService } from './user-proxy.service';

describe('UserProxyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserProxyService]
    });
  });

  it('should be created', inject([UserProxyService], (service: UserProxyService) => {
    expect(service).toBeTruthy();
  }));
});
