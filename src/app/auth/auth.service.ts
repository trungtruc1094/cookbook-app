import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from "@angular/router";

import { LocalStorageService } from "angular-2-local-storage";

import { User } from "./model/user.model";
import { AuthUser } from "./model/auth-user.model";

// Store
import { Store } from "@ngrx/store";
import * as fromRoot from '../app.reducer';

// Actions
import * as Auth from './auth.actions';
import * as Ui from '../shared/ui.actions';
import { AppsService } from "../main/apps/apps.service";

@Injectable()
export class AuthService {
  current_user: any;
  af_current_user: User;
  token: String;

  constructor(
    private afAuth: AngularFireAuth,
    private afStore: AngularFirestore,
    private router: Router,
    private localService: LocalStorageService,
    private store: Store<fromRoot.State>,
    private appsService: AppsService
  ) { }

  initAuthListener() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        console.log('User Authenticate: ', user);
        // this.authChange.next(true);
        this.store.dispatch(new Auth.Authenticated(this.af_current_user));
        // Loading Category from Service
        this.appsService.getCategoryList();
      } else {
        console.log('User Unauthenicate');
        this.store.dispatch(new Auth.Unauthenticated());
        this.router.navigate(["/login"]);
      }
    });
  }

  signUpUser(signedUpUser: User) {
    this.store.dispatch(new Ui.Isloading());
    let currentUserId;
    this.afAuth.auth
      .createUserWithEmailAndPassword(signedUpUser.email, signedUpUser.password)
      .then(result => {
        console.log("Sign Up successfully");
        this.setUserToLocal();
        currentUserId = this.afAuth.auth.currentUser.uid;
        // Return true if login success
        return currentUserId;
      })
      .then(result => {
        if (result) {
          this.afStore.collection("signedUpUsers").doc(result).set({
            id: currentUserId,
            email: signedUpUser.email,
            fullName: signedUpUser.fullName,
            createdDate: new Date()
          });
          this.store.dispatch(new Ui.Isunloading());
          this.af_current_user = {
            userId: currentUserId,
            fullName: signedUpUser.fullName,
            email: signedUpUser.email,
            password: signedUpUser.password
          };
          this.store.dispatch(new Auth.Authenticated(this.af_current_user));
          this.localService.set("af_current_user", this.af_current_user);
        } else {
          throw new Error("Failed save to database");
        }
      })
      .catch(error => {
        this.store.dispatch(new Ui.Isunloading());
        console.log("Sign Up failed");
        this.store.dispatch(new Auth.Unauthenticated());
      });
  }

  signInUser(authUser: AuthUser) {
    let currentUserId;
    this.store.dispatch(new Ui.Isloading());
    this.afAuth.auth
      .signInWithEmailAndPassword(authUser.email, authUser.password)
      .then(result => {
        console.log("Login successfully");
        this.setUserToLocal();
        currentUserId = this.afAuth.auth.currentUser.uid;
        // Return true if login success
        return currentUserId;
      })
      .then(result => {
        if (result) {
          this.afStore.doc('signedUpUsers/' + result).valueChanges().subscribe(user => {
            this.store.dispatch(new Ui.Isunloading());
            this.af_current_user = {
              userId: result,
              fullName: user['fullName'],
              email: user['email']
            }
            this.store.dispatch(new Auth.Authenticated(this.af_current_user));
            this.localService.set("af_current_user", this.af_current_user);
          });
        } else {
          throw new Error("Failed to get user info");
        }
      })
      .catch(error => {
        this.store.dispatch(new Ui.Isunloading());
        console.log("Login failed 1");
        this.store.dispatch(new Auth.Unauthenticated());
      });
  }

  signOutUser() {
    this.afAuth.auth.signOut();
    this.current_user = "";
    this.token = "";

    console.log('Set unauthenticate');
    this.store.dispatch(new Auth.Unauthenticated());

    // Remove current user & token from local
    this.localService.set("isLoggedIn", false);
    this.localService.remove("token", "current_user");
  }

  isAuth() {
    if (this.localService.get("isLoggedIn") && this.localService.get("token")) {
      this.token = this.localService.get("token").toString();
      if (this.localService.get("current_user")) {
        this.current_user = this.localService.get("current_user");
      }
      return true;
    } else {
      return false;
    }
  }

  // Helper Functions
  setUserToLocal() {
    const currentToken = JSON.parse(
      JSON.stringify(this.afAuth.auth.currentUser)
    ).stsTokenManager.accessToken;
    console.log("Set User To Local", currentToken);
    this.localService.set("isLoggedIn", true);
    this.localService.set("token", currentToken);
    this.localService.set("current_user", this.afAuth.auth.currentUser);
  }
}
