import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './features/login/login';
import { AuthService } from './core/services/auth';

@Component({
  selector: 'app-root',
  imports: [LoginComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('jdr');

  authService = inject(AuthService);
}