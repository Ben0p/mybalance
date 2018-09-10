import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { PostsRoutingModule } from './booking-routing.module';

import { BookingHomeComponent } from './booking-home/booking-home.component';
import { BookingReserveComponent } from './booking-reserve/booking-reserve.component';
import { BookingLoginComponent } from './booking-login/booking-login.component';

@NgModule({
  imports: [
    PostsRoutingModule,
    CommonModule,
    SharedModule
  ],
  declarations: [BookingHomeComponent, BookingReserveComponent, BookingLoginComponent]
})
export class BookingModule { }
