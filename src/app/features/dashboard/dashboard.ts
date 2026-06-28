import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth';
import { CharacterService } from '../../core/services/character';
import { ProfileService } from '../../core/services/profile';
import { HealthBarComponent } from '../../shared/components/health-bar/health-bar';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HealthBarComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit {
  authService = inject(AuthService);
  characterService = inject(CharacterService);
  profileService = inject(ProfileService);

  user = this.authService.currentUser;

  characters: any[] = [];
  profile: any = null;

  async ngOnInit(): Promise<void> {
    const currentUser = this.user();

    if (!currentUser) {
      return;
    }

    this.characters = await this.characterService.getCharactersByProfileId(currentUser.id);
    this.profile = await this.profileService.getProfile(currentUser.id);
    this.characters =
      await this.characterService.getCharactersByProfileId(currentUser.id);
  }

  logout(): void {
    this.authService.logout();
  }
}