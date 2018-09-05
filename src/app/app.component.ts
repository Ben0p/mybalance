import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

declare var jquery: any;
declare var $: any;

interface Note {
  content: string;
  earts: number;
  id?: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  notesCollection: AngularFirestoreCollection<Note>;
  notes: Observable<Note[]>;

  constructor (private afs: AngularFirestore) {}

  ngOnInit () {
    this.notesCollection = this.afs.collection('notes');
    this.notes = this.notesCollection.valueChanges();
  }
}
