import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componenets
import { LandingComponent } from './landing/landing.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'news', component: NewsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRoutingModule { }
