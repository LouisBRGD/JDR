import { Component, input } from '@angular/core';

@Component({
  selector: 'app-health-bar',
  standalone: true,
  imports: [],
  templateUrl: './health-bar.html',
  styleUrl: './health-bar.css'
})
export class HealthBarComponent {
  currentHp = input.required<number>();
  maxHp = input.required<number>();
}