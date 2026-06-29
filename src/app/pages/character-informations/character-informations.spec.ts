import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterInformations } from './character-informations';

describe('CharacterInformations', () => {
  let component: CharacterInformations;
  let fixture: ComponentFixture<CharacterInformations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterInformations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterInformations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
