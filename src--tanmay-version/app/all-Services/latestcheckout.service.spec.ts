import { TestBed } from '@angular/core/testing';

import { LatestcheckoutService } from './latestcheckout.service';

describe('LatestcheckoutService', () => {
  let service: LatestcheckoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LatestcheckoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
