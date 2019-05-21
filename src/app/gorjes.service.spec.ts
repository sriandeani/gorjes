import { TestBed } from '@angular/core/testing';

import { GorjesService } from './gorjes.service';

describe('GorjesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GorjesService = TestBed.get(GorjesService);
    expect(service).toBeTruthy();
  });
});
