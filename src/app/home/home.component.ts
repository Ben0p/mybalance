import { Component, OnInit, ViewEncapsulation, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss',
    './candle.scss',
]
})


export class HomeComponent implements OnInit {

  public isFixed: boolean;
  rect: any;
  rectTop: number;

  @ViewChild('content') content: ElementRef;

    loadScripts() {
    const dynamicScripts = [
      '../assets/js/parallax01.js'
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('body')[0].appendChild(node);
    }
  }

  constructor() {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset >= this.rectTop) {
      this.isFixed = true;
    } else if (this.isFixed && window.pageYOffset < this.rectTop) {
      this.isFixed = false;
    }

  }

  ngOnInit() {
    this.loadScripts();
    this.rect = this.content.nativeElement.getBoundingClientRect();
    this.rectTop = this.rect.top - 164;
    this.isFixed = false;
  }

}
