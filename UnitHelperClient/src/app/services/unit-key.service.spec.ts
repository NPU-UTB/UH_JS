import { TestBed } from '@angular/core/testing';

import { UnitKeyService } from './unit-key.service';

describe('UnitKeyService', () => {
  let service: UnitKeyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnitKeyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
