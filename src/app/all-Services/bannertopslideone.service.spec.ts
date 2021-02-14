import { TestBed } from '@angular/core/testing';

import { BannertopslideoneService } from './bannertopslideone.service';

describe('BannertopslideoneService', () => {
  let service: BannertopslideoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BannertopslideoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
