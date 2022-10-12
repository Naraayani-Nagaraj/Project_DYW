import { TestBed } from '@angular/core/testing';

import { ShortlistedService } from './shortlisted.service';

describe('ShortlistedService', () => {
  let service: ShortlistedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShortlistedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
