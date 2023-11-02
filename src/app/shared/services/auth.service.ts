import { Injectable, NgZone } from '@angular/core';
import { User } from './user';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuth} from '@angular/fire/compat/auth'
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ErrorComponent } from 'src/app/error/error.component';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  $ : any
  userData: any;
  accountErrorMessage: any;

  constructor(
    private dialog:MatDialog,
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router : Router,
    public ngZone : NgZone
  ) { 
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user' , 'null');
        JSON.parse(localStorage.getItem('user')!)
      }
    })
  }


SignIn = (email: string, password : string) => {
  return this.afAuth
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      this.SetUserData(result.user);
      this.afAuth.authState.subscribe((user) => {
        if (user) {
          this.router.navigate(['app'])
        }
      })
    })
    .catch((error) => {
      switch(error.code) {
        case "auth/user-not-found":
        {
          this.accountErrorMessage = "User not Found"
          this.dialog.open(ErrorComponent, {data:{ message :this.accountErrorMessage}, disableClose:true, enterAnimationDuration: 400, exitAnimationDuration: 600})
          break
        }
          default:
        case "auth/invalid-login-credentials":
        {
          this.accountErrorMessage = "Invalid Login Credentials"
          this.dialog.open(ErrorComponent, {data:{ message :this.accountErrorMessage},  disableClose:true, enterAnimationDuration: 400, exitAnimationDuration: 600})
          break
        }
      }
    })
}

SignUp = (username:string, email: string, password :string) => {
  return this.afAuth
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      this.SendVerificationMail() 
      this.SetUserData(result.user)
      this.afAuth.onAuthStateChanged((user) => {
        if (user){
          user.updateProfile({
            displayName : username
          })
        }
      })
      this.afAuth.signOut()
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/weak-password":
             {
              this.accountErrorMessage = "Password needs to be at least 6 characters"
              this.dialog.open(ErrorComponent, {data:{ message :this.accountErrorMessage},  disableClose:true, enterAnimationDuration: 400, exitAnimationDuration: 600})
              break
             }
          case "auth/email-already-in-use": {
            this.accountErrorMessage = "There is a user with the same email address"
            this.dialog.open(ErrorComponent, {data:{ message :this.accountErrorMessage},  disableClose:true, enterAnimationDuration: 400, exitAnimationDuration: 600})
            break
          }
          case "auth/invalid-email":{
            this.accountErrorMessage = "Something is wrong with your email"
            this.dialog.open(ErrorComponent, {data:{ message :this.accountErrorMessage},  disableClose:true, enterAnimationDuration: 400, exitAnimationDuration: 600})
            break
          }
          default:
        
        }
        
      })
}

SendVerificationMail = () => {
  return this.afAuth.currentUser
    .then((u:any) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify'])
      })
    }
  

get isLoggedin() : boolean {
  const user = JSON.parse(localStorage.getItem('user')!)
  return user !== null && user.emailVerified !== false ? true : false;
}

SetUserData = (user: any) => {
  const userRef : AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid})`)
  const userData : User = {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    emailVerified: user.emailVerified
  }
  return userRef.set(userData, {
    merge: false
  })
}

SignOut = () => {
  return this.afAuth.signOut()
    .then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/'])
    })
}


}