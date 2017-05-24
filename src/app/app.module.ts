import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';


import { routes } from './app.routes';

export const firebaseConfig = {
    apiKey: "AIzaSyBAZyMAasU6RzRvRm4A25WRi027499Y1xE",
    authDomain: "angular-app-authendication.firebaseapp.com",
    databaseURL: "https://angular-app-authendication.firebaseio.com",
    projectId: "angular-app-authendication",
    storageBucket: "angular-app-authendication.appspot.com",
    messagingSenderId: "275387549523"
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
