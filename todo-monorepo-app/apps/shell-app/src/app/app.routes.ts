import { loadRemoteModule } from '@nx/angular/mf';
import { Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'createTodo',
    loadChildren: () =>
      loadRemoteModule('create-todo', './Routes').then((m) => m.remoteRoutes),
  },
];
