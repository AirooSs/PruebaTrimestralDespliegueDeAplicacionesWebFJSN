import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //home por defecto
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  { path: 'new', loadComponent: () => import('./pages/new/new.component').then(m => m.NewComponent) },

]
