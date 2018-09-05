import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
export const firebaseConfig = environment.firebase;


// Material
import { MaterialModule } from './material';

// Mapbox
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

// Components
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    FooterComponent,
    NavComponent,
    ContactComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    HttpClientModule,
    HttpModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoiYmVuMCIsImEiOiJjajh1ZDMzNzkweXU5MnJvNmNjOGE1c3UzIn0.lj3vfW_n49fbhc1V46qfUA'
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
