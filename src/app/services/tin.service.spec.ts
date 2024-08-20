import { TestBed } from '@angular/core/testing';

import { TinService } from './tin.service';

describe('TinService', () => {
  let service: TinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
