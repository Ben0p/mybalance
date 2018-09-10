import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-reserve',
  templateUrl: './booking-reserve.component.html',
  styleUrls: ['./booking-reserve.component.css']
})
export class BookingReserveComponent implements OnInit {

  loadAPI: Promise<any>;

  public loadScript() {
    console.log('preparing to load...');
    const node = document.createElement('script');
    node.src = 'assets/js/bookings.js';
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
