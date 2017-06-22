import { TestBed, inject } from '@angular/core/testing';

import { LoginProxyService } from './login-proxy.service';

describe('LoginProxyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginProxyService]
    });
  });

  it('should be created', inject([LoginProxyService], (service: LoginProxyService) => {
    expect(service).toBeTruthy();
  }));
});
