import { TestBed } from '@angular/core/testing';

import { SearchVagasAPIService } from './search-vagas-api.service';

describe('SearchVagasAPIService', () => {
  let service: SearchVagasAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchVagasAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
