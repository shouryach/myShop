import { TestBed } from '@angular/core/testing';

import { BannertopcarouselService } from './bannertopcarousel.service';

describe('BannertopcarouselService', () => {
  let service: BannertopcarouselService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BannertopcarouselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
