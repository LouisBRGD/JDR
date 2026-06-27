import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth';
import { CharacterService } from '../../core/services/character';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit {
  authService = inject(AuthService);
  characterService = inject(CharacterService);

  user = this.authService.currentUser;

  characters: any[] = [];

  async ngOnInit(): Promise<void> {
    const currentUser = this.user();

    if (!currentUser) {
      return;
    }

    this.characters = await this.characterService.getCharactersByProfileId(currentUser.id);
  }

  logout(): void {
    this.authService.logout();
  }
}