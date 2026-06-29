import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth';
import { CharacterService } from '../../core/services/character';
import { CharacterInformationService } from '../../core/services/character-information';

@Component({
  selector: 'app-character-informations',
  imports: [],
  templateUrl: './character-informations.html',
  styleUrl: './character-informations.css'
})
export class CharacterInformations implements OnInit {
  authService = inject(AuthService);
  characterService = inject(CharacterService);
  characterInformationService = inject(CharacterInformationService);

  information: any = null;

  async ngOnInit(): Promise<void> {
    const currentUser = this.authService.currentUser();

    if (!currentUser) {
      return;
    }

    const characters = await this.characterService.getCharactersByProfileId(currentUser.id);
    const character = characters[0];

    if (!character) {
      return;
    }

    this.information =
      await this.characterInformationService.getByCharacterId(character.id);

    console.log(this.information);
  }
}