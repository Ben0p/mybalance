import { NgModule } from '@angular/core';

// Modules
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';

// Components
import { UserLoginComponent } from './user-login/user-login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule
  ],
  declarations: [
    UserLoginComponent,
    UserProfileComponent,
    UserDashboardComponent
  ]
})
export class UserModule { }
