import { TestBed } from '@angular/core/testing';

import { BannertopService } from './bannertop.service';

describe('BannertopService', () => {
  let service: BannertopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BannertopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
