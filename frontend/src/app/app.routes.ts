import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./features/landing/landing.component'),
        title: 'Zyria — Smart Software. Real Results.',
      },
      {
        path: 'services',
        loadComponent: () => import('./features/services/services.component'),
        title: 'Services — Zyria',
      },
      {
        path: 'about',
        loadComponent: () => import('./features/about/about.component'),
        title: 'About — Zyria',
      },
      {
        path: 'contact',
        loadComponent: () => import('./features/contact/contact.component'),
        title: 'Contact — Zyria',
      },
      { path: '**', redirectTo: '' },
    ],
  },
];
