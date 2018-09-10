import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componenets
import { BookingHomeComponent } from './booking-home/booking-home.component';
import { BookingReserveComponent } from './booking-reserve/booking-reserve.component';
import { BookingLoginComponent } from './booking-login/booking-login.component';

const routes: Routes = [
    { path: '', component: BookingHomeComponent },
    { path: 'reserve', component: BookingReserveComponent},
    { path: 'login', component: BookingLoginComponent}
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PostsRoutingModule { }
