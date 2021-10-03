import { TestBed } from '@angular/core/testing';

import { DancingManService } from './dancing-man.service';

describe('DancingManService', () => {
  let service: DancingManService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DancingManService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
