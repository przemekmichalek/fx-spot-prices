import { TestBed } from '@angular/core/testing';

import { SpotStateService } from './spot-state.service';

describe('SpotStateService', () => {
  let service: SpotStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
