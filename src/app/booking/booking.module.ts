import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './booking-routing.module';

import { BookingHomeComponent } from './booking-home/booking-home.component';

@NgModule({
  imports: [
    PostsRoutingModule,
    CommonModule
  ],
  declarations: [BookingHomeComponent]
})
export class BookingModule { }
