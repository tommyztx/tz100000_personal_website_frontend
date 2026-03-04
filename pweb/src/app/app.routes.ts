// app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then((m) => m.HomeComponent),
  },
  {
    path: 'experience',
    loadComponent: () =>
      import('./pages/experience/experience').then(
        (m) => m.ExperienceComponent
      ),
  },
  // { Future implementation maybe
  //   path: 'architecture',
  //   loadComponent: () =>
  //     import('./pages/architecture/architecture').then(
  //       (m) => m.ArchitectureComponent
  //     ),
  // },
  { path: '**', redirectTo: '' },
];
