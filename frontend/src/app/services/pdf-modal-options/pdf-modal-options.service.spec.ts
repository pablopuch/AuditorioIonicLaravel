import { TestBed } from '@angular/core/testing';

import { PdfModalOptionsService } from './pdf-modal-options.service';

describe('PdfModalOptionsService', () => {
  let service: PdfModalOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdfModalOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
