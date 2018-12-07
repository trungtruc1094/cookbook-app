import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer';
import { Observable } from 'rxjs';

// private authService: AuthService

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);

    this.isAuthenticated$ = this.store.select(fromRoot.getIsAuthenticated);
    this.isAuthenticated$.subscribe(result => {
      console.log('Result Authenticate: ', result);
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
    this.authService.signInUser({
      email: form.value.email,
      password: form.value.password
    });
  }

  onSignUp() {
    this.router.navigate['/signup'];
  }

}
