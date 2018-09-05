import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators} from '@angular/forms';

import { AngularFirestore } from 'angularfire2/firestore';
import { tap, first } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  myForm: FormGroup;

  // Form state
  loading = false;
  success = false;

  log(x) {
    console.log(x);
  }

  constructor(private fb: FormBuilder, private afs: AngularFirestore) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')],
      name: ['', Validators.required],
      phone: [''],
      message: ['', Validators.required]
    });

  }

  async submitHandler() {
    this.loading = true;

    const formValue = this.myForm.value;

    try {
      await this.afs.collection('contacts').add(formValue);
      this.success = true;
    } catch (err) {
      this.log(err);
    }
    this.loading = false;
  }

}
