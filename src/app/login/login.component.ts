import { Component, OnInit, HostBinding  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Observable<firebase.User>;
  error: any;

  constructor(public afAuth: AngularFireAuth, public db: AngularFireDatabase, private router: Router) { 
    this.user = afAuth.authState;
  }

  loginGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
        (success) => {
          this.router.navigate(['/members']);
        }).catch(
          (err) => {
            this.error = err;
          }
        )
  }
  

  ngOnInit() {
  }

}
