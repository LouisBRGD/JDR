import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth';
import { CharacterService } from '../../core/services/character';
import { CharacterInformationService } from '../../core/services/character-information';

@Component({
  selector: 'app-character-informations',
  imports: [FormsModule],
  templateUrl: './character-informations.html',
  styleUrl: './character-informations.css'
})
export class CharacterInformations implements OnInit {
  authService = inject(AuthService);
  characterService = inject(CharacterService);
  characterInformationService = inject(CharacterInformationService);

  character: any = null;
  information: any = null;
  isSaving = false;

  async ngOnInit(): Promise<void> {
    const currentUser = this.authService.currentUser();

    if (!currentUser) return;

    const characters = await this.characterService.getCharactersByProfileId(currentUser.id);
    const character = characters[0];

    if (!character) return;

    this.character = character;

    this.information =
      await this.characterInformationService.getByCharacterId(character.id);
  }

  async save(): Promise<void> {
    if (!this.character || !this.information) return;

    this.isSaving = true;

    try {
      this.information =
        await this.characterInformationService.updateByCharacterId(
          this.character.id,
          this.information
        );
    } finally {
      this.isSaving = false;
    }
  }
}