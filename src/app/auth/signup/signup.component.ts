import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';

import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;
  isLoading$: Observable<boolean>;

  constructor(private authService: AuthService, private router: Router, private localService: LocalStorageService, private store: Store<fromRoot.State>) { }

  ngOnInit() {
    // this.isAuthenticatedSubs = this.authService.isAuthenticated.subscribe(result => {
    //   console.log('Login Result', result);
    //   if (result) {
    //     this.router.navigate(["/dashboard"]);
    //   }
    // })
    this.isAuthenticated$ = this.store.select(fromRoot.getIsAuthenticated);
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
    this.isAuthenticated$.subscribe(result => {
      if (result) {
        this.router.navigate(["/dashboard"]);
      }
    })

    if (this.localService.get("isLoggedIn")) {
      console.log('Run login');
      this.authService.current_user = this.localService.get(
        "current_user"
      );
      this.authService.token = this.localService.get("token").toString();
      this.router.navigate(["/dashboard"]);
    }
  }

  onSubmit(form: NgForm) {
    // console.log('password:', form.value.userPassword.pwd);
    this.authService.signUpUser({
      fullName: form.value.fullname,
      email: form.value.email,
      password: form.value.userPassword.pwd
    })
  }

}
