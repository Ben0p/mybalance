import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../core/auth.service';

import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';


import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  loading = true;
  hidden: boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(['(max-width: 500px)'])
    .pipe(
      map(result => result.matches)
    );

  constructor(
    public auth: AuthService,
    public breakpointObserver: BreakpointObserver,
    private router: Router
  ) {

    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });

  }

  navigate(url) {
    window.open(url, '_blank');
  }

  ngOnInit() {
  }

}
