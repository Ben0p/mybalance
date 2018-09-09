import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

import { LandingComponent } from './landing/landing.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [
    LandingComponent,
    NewsComponent,
    ContactComponent,
    AboutComponent,
    IndexComponent
  ]
})
export class HomeModule { }
