import { TestBed } from '@angular/core/testing';

import { BestdealService } from './bestdeal.service';

describe('BestdealService', () => {
  let service: BestdealService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BestdealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
