import { TestBed } from '@angular/core/testing';

import { CharacterInformation } from '../../services/character-information';

describe('CharacterInformation', () => {
  let service: CharacterInformation;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterInformation);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
