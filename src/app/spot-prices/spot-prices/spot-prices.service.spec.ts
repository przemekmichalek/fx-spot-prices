import { TestBed } from '@angular/core/testing';

import { SpotPricesService } from './spot-prices.service';

describe('SpotPricesService', () => {
  let service: SpotPricesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SpotPricesService
      ]
    });
    service = TestBed.inject(SpotPricesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
