import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth';
import { CharacterService } from '../../core/services/character';
import { HealthBarComponent } from '../../shared/components/health-bar/health-bar';

@Component({
  selector: 'app-character',
  imports: [HealthBarComponent],
  templateUrl: './character.html',
  styleUrl: './character.css',
})
export class Character implements OnInit {
  authService = inject(AuthService);
  characterService = inject(CharacterService);

  characters: any[] = [];

  async ngOnInit(): Promise<void> {
    const currentUser = this.authService.currentUser();

    if (!currentUser) {
      return;
    }

    this.characters = await this.characterService.getCharactersByProfileId(currentUser.id);
  }
}