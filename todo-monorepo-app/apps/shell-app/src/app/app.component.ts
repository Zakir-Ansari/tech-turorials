import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'shell-app';

  env = environment.env;

  navRoutes = [
    {
      title: 'Create TODO',
      bxIcon: 'bx-edit-alt',
      route: 'createTodo',
      isDisabled: false,
    },
    {
      title: 'About',
      bxIcon: 'bxs-info-circle',
      route: 'about',
      isDisabled: false,
    },
  ];
}
