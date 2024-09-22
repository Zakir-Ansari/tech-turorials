import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { HomeComponent } from './components/home/home.component';

@Component({
  standalone: true,
  imports: [HomeComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'shell-app';

  env = environment.env;
}
