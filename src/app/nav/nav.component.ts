import { Component, OnInit, HostListener, Inject, ViewChild, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})



export class NavComponent implements OnInit {

  public isFixed: boolean;
  rect: any;
  rectTop: number;
  router: any;

  @ViewChild('navbar') navbar: ElementRef;


  constructor(private _router: Router) {
    this.router = _router;
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.router.url !== '/') {
      this.isFixed = true;
    } else {

      if (window.pageYOffset >= this.rectTop) {
        this.isFixed = true;
      } else if (this.isFixed && window.pageYOffset < this.rectTop) {
        this.isFixed = false;
      }

    }
  }


  ngOnInit() {
    this.rect = this.navbar.nativeElement.getBoundingClientRect();
    this.rectTop = this.rect.top;
    if (this.router.url === '/') {
      this.isFixed = false;
    } else {
      this.isFixed = true;
    }
  }
}


