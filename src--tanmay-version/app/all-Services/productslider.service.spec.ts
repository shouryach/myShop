import { TestBed } from '@angular/core/testing';

import { ProductsliderService } from './productslider.service';

describe('ProductsliderService', () => {
  let service: ProductsliderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsliderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
