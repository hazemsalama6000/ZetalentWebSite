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
    path: 'blog',
    loadComponent: () => import('./blog-list/blog-list').then((m) => m.BlogList),
  },
  {
    path: 'blog/:slug',
    loadComponent: () => import('./blog-detail/blog-detail').then((m) => m.BlogDetail),
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact').then((m) => m.Contact),
  },
  {
    path: 'privacy-policy',
    loadComponent: () =>
      import('./privacy-policy/privacy-policy').then((m) => m.PrivacyPolicy),
  },
  { path: '**', redirectTo: '' },
];
