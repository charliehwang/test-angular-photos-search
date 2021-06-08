import { Component } from '@angular/core';
import { SimpleHttpComponent } from './simple-http/simple-http.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'photos-search';
}
