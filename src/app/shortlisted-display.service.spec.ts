import { TestBed } from '@angular/core/testing';

import { ShortlistedDisplayService } from './shortlisted-display.service';

describe('ShortlistedDisplayService', () => {
  let service: ShortlistedDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShortlistedDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
