import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-complete';
  constructor(private router: Router) {}

  onNavigate(feature: string) {
    if (feature === 'recipes') {
      this.router.navigate(['/recipes']);
    } else if (feature === 'shopping-list') {
      this.router.navigate(['/shopping-list']);
    }
    // Add other navigation cases based on your app's structure
  }
}
