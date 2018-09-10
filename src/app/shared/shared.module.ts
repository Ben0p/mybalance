import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material.module';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule,
    NavbarComponent,
    FooterComponent
  ],
  declarations: [
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
