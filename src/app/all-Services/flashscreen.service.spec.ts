import { TestBed } from '@angular/core/testing';

import { FlashscreenService } from './flashscreen.service';

describe('FlashscreenService', () => {
  let service: FlashscreenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlashscreenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
