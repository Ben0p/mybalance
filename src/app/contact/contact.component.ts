import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: [
    './contact.component.scss',
    '../../assets/css/scrollbar.css'
  ]
})

export class ContactComponent implements OnInit {

  geojson = {
    'type': 'FeatureCollection',
    'features': [
      {
        'type': 'Feature',
        'properties': {
          'name': 'My Balance',
          'message': 'My Balance Aromatheropy',
          'iconSize': [60, 60]
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [
            115.6365187,
            -33.3257109
          ]
        }
      },
    ]
  };


  constructor() {

  }

  ngOnInit() {
  }

}
