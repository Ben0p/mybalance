import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  favoriteColor?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState: any = null;
  user: Observable<User>;

  constructor(
    public afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {

    this.afAuth.authState.subscribe(data => this.authState = data);

    //// Get auth data, then get firestore user document || null
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

    googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider();
      return this.oAuthLogin(provider);
    }

    facebookLogin() {
      const provider = new firebase.auth.FacebookAuthProvider();
      return this.oAuthLogin(provider);
    }

    private oAuthLogin(provider) {
      return this.afAuth.auth.signInWithPopup(provider)
        .then((credential) => {
          this.updateUserData(credential.user);
        });
    }

    private updateUserData(user) {
      // Sets user data to firestore on login
      const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
      const data: User = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL
      };

      return userRef.set(data, { merge: true });

    }

    signOut() {
      this.afAuth.auth.signOut().then(() => {
          this.router.navigate(['/user/login']);
      });
    }

    get authenticated(): boolean {
      return this.authState !== null;
    }

    get currentUserId(): string {
      return this.authenticated ? this.authState.uid : null;
    }

    login() {
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    logout() {
      this.afAuth.auth.signOut();
    }

  }
