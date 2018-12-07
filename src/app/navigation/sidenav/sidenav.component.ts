import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { UiService } from '../../shared/services/ui.service';
import { Subscription, Observable, from } from 'rxjs';
import { MoApp } from 'src/app/shared/moapp.model';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../app.reducer';

declare var $: any;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit, OnDestroy, AfterViewInit {
  private appsChangedSubs: Subscription;
  private appList: MoApp[];
  isLoadingApp$: Observable<boolean>;
  appList$: Observable<MoApp[]>;
  private nameApp;

  constructor(private authService: AuthService, private router: Router, private uiService: UiService, private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.uiService.getAppList();
    this.isLoadingApp$ = this.store.select(fromRoot.getIsLoadingApp);

    this.appList$ = this.store.select(fromRoot.getAppList);
  }


  logout() {
    this.router.navigate(["/login"]);
    this.authService.signOutUser();
  }

  ngOnDestroy() {
  }

  ngAfterViewInit() { }

}
