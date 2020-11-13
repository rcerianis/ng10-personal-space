import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  result;
  currentUser: firebase.User;

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit(): void {
    this.afAuth.authState.subscribe(user => {
      this.currentUser = user;
      console.log(this.currentUser);
    });
  }

  async loginWithGoogle() {
    try {
      this.result = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      console.log(this.result);
      
    } catch(err) {
      console.log(err);
    }
  }

  async signOut() {
    await this.afAuth.signOut();
  }
}
