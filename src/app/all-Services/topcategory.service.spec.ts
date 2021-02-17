import { TestBed } from '@angular/core/testing';

import { TopcategoryService } from './topcategory.service';

describe('TopcategoryService', () => {
  let service: TopcategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopcategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
