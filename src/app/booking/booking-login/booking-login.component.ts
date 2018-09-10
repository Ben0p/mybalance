import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-login',
  templateUrl: './booking-login.component.html',
  styleUrls: ['./booking-login.component.css']
})
export class BookingLoginComponent implements OnInit {


  loadAPI: Promise<any>;

  public loadScript() {
    console.log('preparing to load...');
    const node = document.createElement('script');
    node.src = 'assets/js/login.js';
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  constructor() { }

  ngOnInit() {
    this.loadAPI = new Promise((resolve) => {
      console.log('resolving promise...');
      this.loadScript();
    });
  }
}
