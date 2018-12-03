import { TestBed, inject } from '@angular/core/testing';

import { LoadFilesService } from './load-files.service';

describe('LoadFilesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadFilesService]
    });
  });

  it('should be created', inject([LoadFilesService], (service: LoadFilesService) => {
    expect(service).toBeTruthy();
  }));
});
