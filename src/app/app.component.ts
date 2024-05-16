// app.component.ts

// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'fyle-frontend-challenge';
  githubUsername: string = '';

  onSearch(username: string) {
    this.githubUsername = username;
  }
}
