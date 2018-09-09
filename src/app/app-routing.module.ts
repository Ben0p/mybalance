import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: '../app/home/home.module#HomeModule'
  },
  {
    path: 'posts',
    loadChildren: '../app/posts/posts.module#PostsModule'
  },
  {
    path: 'book',
    loadChildren: '../app/booking/booking.module#BookingModule'
  },
  {
    path: 'user',
    loadChildren: '../app/user/user.module#UserModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
