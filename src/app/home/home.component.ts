import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss',
    './candle.scss',
    '../../assets/css/scrollbar.css'
],
  encapsulation: ViewEncapsulation.None
})

export class HomeComponent implements OnInit {

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

  ngOnInit() {
    this.loadScripts();
  }

}
