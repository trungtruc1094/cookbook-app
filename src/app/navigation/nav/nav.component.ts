import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer';
import { User } from 'src/app/auth/model/user.model';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'angular-2-local-storage';

declare var $: any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, AfterViewInit {
  user$: Observable<User>;
  userName: String = '';
  userEmail: String = ''

  constructor(private authService: AuthService, private store: Store<fromRoot.State>, private localService: LocalStorageService) { }

  ngOnInit() {
    this.user$ = this.store.select(fromRoot.getCurrentUser);
    this.user$.subscribe(result => {
      if (result) {
        this.userEmail = result.email;
        this.userName = result.fullName;
      }
    });

    if (this.authService.isAuth) {
      this.userEmail = this.localService.get("af_current_user")['email'];
      this.userName = this.localService.get("af_current_user")['fullName'];
    }
  }

  ngAfterViewInit() {
    $(document).ready(function () {
      $('#sidebarCollapse').click(function () {
        $("i.fa", this).toggleClass("fa-bars fa-times");
      });
    })
  }
}
