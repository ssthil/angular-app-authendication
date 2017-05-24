import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  error: any;
  
  constructor(public afAuth: AngularFireAuth, public db: AngularFireDatabase, private router: Router) { }

  logout() {
     this.afAuth.auth.signOut().then(
        (success) => {
          this.router.navigateByUrl('/login');
        }).catch(
          (err) => {
            this.error = err;
          }
        )
     
  }

  ngOnInit() {
  }

}
