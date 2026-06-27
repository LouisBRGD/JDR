import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../core/services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  private authService = inject(AuthService);

  email = signal('');
  password = signal('');
  errorMessage = signal('');

  async login(): Promise<void> {
    try {
      this.errorMessage.set('');
      await this.authService.login(this.email(), this.password());
    } catch {
      this.errorMessage.set('Email ou mot de passe incorrect.');
    }
  }
}