import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Auth Guard
import { AuthGuard } from '../core/auth.guard';

// Componenets
import {  UserLoginComponent } from './user-login/user-login.component';
import {  UserProfileComponent } from './user-profile/user-profile.component';
import {  UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
    { path: 'login', component: UserLoginComponent },
    { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard] },
    { path: 'dashboard', component: UserDashboardComponent, canActivate: [AuthGuard] }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserRoutingModule { }
