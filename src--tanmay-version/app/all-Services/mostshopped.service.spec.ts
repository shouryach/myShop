import { TestBed } from '@angular/core/testing';

import { MostshoppedService } from './mostshopped.service';

describe('MostshoppedService', () => {
  let service: MostshoppedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MostshoppedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
