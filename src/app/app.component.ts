import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { routes } from './app-routing.module';
// import { ROUTES } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';

  validRoute = true;

  constructor(private router: Router) {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // Check if the navigation is to a valid route.
        this.validRoute = this.isValidRoute(event.url);
      }
    });
  }

  // Check if the current route matches any valid route.
  isValidRoute(url: string): boolean {
    url = url.replace("/", "");
    const isValid = routes.some(route => (url === route.path));
    return isValid;
  }

  // Function to check if the route is an error route (i.e., not defined)
  isErrorRoute(url: string): boolean {
    // You can add more complex logic here to check for valid routes
    return url === '/404' || url === '/some-other-error-path';
  }
}
