import { TestBed } from '@angular/core/testing';

import { HutangService } from './hutang.service';

describe('HutangService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HutangService = TestBed.get(HutangService);
    expect(service).toBeTruthy();
  });
});
