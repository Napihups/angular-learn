import { TestBed, inject } from '@angular/core/testing';

import { EmpdetailGuardServiceService } from './empdetail-guard-service.service';

describe('EmpdetailGuardServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmpdetailGuardServiceService]
    });
  });

  it('should be created', inject([EmpdetailGuardServiceService], (service: EmpdetailGuardServiceService) => {
    expect(service).toBeTruthy();
  }));
});
