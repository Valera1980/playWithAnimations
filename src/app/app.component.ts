import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
  state = {open : false};
  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData;
  }
  constructor(
    private activate: Router,
    private _cd: ChangeDetectorRef
    ) {

  }
  ngOnInit(): void {
    this.activate.events
      .subscribe((e: Event) => {
        if (e instanceof NavigationStart) {
          this.state = {open: true};
          this._cd.detectChanges();
          // setTimeout(() => {
          //   this.start = false;
          // }, 1500);
        }
      })

  }
  fff(): void {
    // this.start = 'closed';
  }
}
