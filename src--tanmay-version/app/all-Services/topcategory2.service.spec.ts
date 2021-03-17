import { TestBed } from '@angular/core/testing';

import { Topcategory2Service } from './topcategory2.service';

describe('Topcategory2Service', () => {
  let service: Topcategory2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Topcategory2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
