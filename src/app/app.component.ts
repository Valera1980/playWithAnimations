import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, Event, NavigationStart } from '@angular/router';
import { routerTransition } from './animation/one';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent implements OnInit {
  title = 'betweenRouterAnimation';
  start: boolean;
  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData;
  }
  constructor(private activate: Router) {

  }
  ngOnInit(): void {
    this.activate.events
      .subscribe((e: Event) => {
        if (e instanceof NavigationStart) {
          this.start = true;
          setTimeout(() => {
            this.start = false;
          }, 1500);
        }
      })

  }
}
