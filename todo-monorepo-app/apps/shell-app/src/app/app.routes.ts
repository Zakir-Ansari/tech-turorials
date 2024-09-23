import { loadRemoteModule } from '@nx/angular/mf';
import { Route } from '@angular/router';
import { AboutComponent } from './components/about/about.component';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'createTodo',
    pathMatch: 'full',
  },
  {
    path: 'createTodo',
    loadChildren: () =>
      loadRemoteModule('create-todo', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];
