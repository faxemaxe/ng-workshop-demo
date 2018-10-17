import { TestBed, inject } from '@angular/core/testing';

import { ProductRestService } from './product-rest.service';

describe('ProductRestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductRestService]
    });
  });

  it('should be created', inject([ProductRestService], (service: ProductRestService) => {
    expect(service).toBeTruthy();
  }));
});
