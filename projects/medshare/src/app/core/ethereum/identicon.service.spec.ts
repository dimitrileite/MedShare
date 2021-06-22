import { TestBed } from '@angular/core/testing';

import { IdenticonService } from './identicon.service';

describe('IdenticonService', () => {
  let service: IdenticonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdenticonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
