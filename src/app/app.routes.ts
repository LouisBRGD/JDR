import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard';
import { Character } from './pages/character/character';
import { CharacterInformations } from './pages/character-informations/character-informations';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'personnage',
        pathMatch: 'full'
      },
      {
        path: 'personnage',
        component: Character
      },
      {
        path: 'informations',
        component: CharacterInformations
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];