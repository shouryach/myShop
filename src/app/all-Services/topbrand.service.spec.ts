import { TestBed } from '@angular/core/testing';

import { TopbrandService } from './topbrand.service';

describe('TopbrandService', () => {
  let service: TopbrandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopbrandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
