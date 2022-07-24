import { TestBed } from '@angular/core/testing';

import { IlearningService } from './ilearning.service';

describe('IlearningService', () => {
  let service: IlearningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IlearningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
