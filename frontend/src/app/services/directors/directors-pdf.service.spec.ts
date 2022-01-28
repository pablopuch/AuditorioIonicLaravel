import { TestBed } from '@angular/core/testing';

import { DirectorsPDFService } from './directors-pdf.service';

describe('DirectorsPDFService', () => {
  let service: DirectorsPDFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirectorsPDFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
