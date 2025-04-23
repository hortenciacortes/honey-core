import { TestBed } from '@angular/core/testing';

import { HoneyCoreService } from './honey-core.service';

describe('HoneyCoreService', () => {
  let service: HoneyCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoneyCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
