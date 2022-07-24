import { Injectable, NgZone } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Route, Router } from '@angular/router';
import { User } from './user';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: any;

  constructor(public afs: AngularFirestore, 
    public afAuth: AngularFireAuth,
    public router: Router,  
    public ngZone: NgZone){
      //this.user = this.afAuth.authState;
      this.afAuth.authState.subscribe(user => {
        if (user){
          this.user = user;
          //console.log('user - ',this.user.displayName)
        }
      })
    }

    async login(email: string, password: string) {
      var result = await this.afAuth.signInWithEmailAndPassword(email, password)
      this.router.navigate(['admin/list']);
  } 

  async register(email: string, password: string) {
    var result = await this.afAuth.createUserWithEmailAndPassword(email, password)
    //var result = await this.afAuth.updateCurrentUser((email, password)
    //this.sendEmailVerification();
  }
  

  async updateUserInfo(name:string|null,photoUrl:string|null){
    //firebaseUser:firebase.User=<firebase.User>this.user;
    //await this.afAuth.updateCurrentUser({...this.afAuth.currentUser,displayName:"abc"})
    var userNow = firebase.auth().currentUser;
    userNow?.updateProfile({
      displayName: name,
      photoURL: photoUrl,
    });
  }

  async sendEmailVerification() {
    //await this.afAuth.currentUser.sendEmailVerification()
    this.router.navigate(['admin/verify-email']);
  }

  async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this.afAuth.sendPasswordResetEmail(passwordResetEmail);
  }

  async logout(){
    await this.afAuth.signOut();
    this.user=null;
    this.router.navigate(['/']);
  }
 signInWithGoogle(){
  this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
 }
 signInWithFacebiik(){
  this.afAuth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
 }
 signInWithTwitter(){
  this.afAuth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
 }
  get isLoggedIn(): boolean {
    return !!this.user;
  }

  get userDisplayName(): any {
    console.log('userDiaplyNameMetod', this.user)
    return this.user.displayName;
  }

  async  loginWithGoogle(){
    //await  this.afAuth.signInWithPopup(new auth.GoogleAuthProvider())
    this.router.navigate(['admin/list']);
  }

}
