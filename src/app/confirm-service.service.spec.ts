import { TestBed, inject } from '@angular/core/testing';

import { ConfirmServiceService } from './confirm-service.service';

describe('ConfirmServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfirmServiceService]
    });
  });

  it('should be created', inject([ConfirmServiceService], (service: ConfirmServiceService) => {
    expect(service).toBeTruthy();
  }));
});
