import { TestBed } from '@angular/core/testing';

import { EpicdiscountService } from './epicdiscount.service';

describe('EpicdiscountService', () => {
  let service: EpicdiscountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpicdiscountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
