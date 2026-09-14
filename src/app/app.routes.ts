import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home').then((m) => m.Home),
  },
  {
    path: 'modules/:slug',
    loadComponent: () => import('./module-detail/module-detail').then((m) => m.ModuleDetail),
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact').then((m) => m.Contact),
  },
  { path: '**', redirectTo: '' },
];
