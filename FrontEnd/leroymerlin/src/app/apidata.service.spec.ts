import { TestBed } from '@angular/core/testing';

import { ApidataService } from './apidata.service';

describe('ApidataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApidataService = TestBed.get(ApidataService);
    expect(service).toBeTruthy();
  });
});
