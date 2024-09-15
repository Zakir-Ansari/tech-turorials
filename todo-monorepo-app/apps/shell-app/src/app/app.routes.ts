import { loadRemoteModule } from '@nx/angular/mf';
import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
  },
  {
    path: 'createTodo',
    loadChildren: () =>
      loadRemoteModule('create-todo', './Routes').then((m) => m.remoteRoutes),
  },
];
