import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule, Router } from "@angular/router";

// Third party Module
import { LocalStorageModule } from "angular-2-local-storage";
import { StoreModule } from '@ngrx/store';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

// Firebase Module
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from '@angular/fire/storage';

// Components
import { AppComponent } from "./app.component";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";


// Feature Module

// Service
import { AuthService } from "./auth/auth.service";
import { AuthGuard } from "./shared/auth-guard.service";
import { UiService } from "./shared/services/ui.service";
import { AppsService } from "./main/apps/apps.service";
import { HelperService } from "src/app/shared/services/helper.service";

// Others
import { environment } from "../environments/environment";
// import { SharedModule } from "./shared/shared.module";
import { reducers } from './app.reducer';
import { ConfirmationDialogComponent } from "./shared/shared-components/confirmation-dialog/confirmation-dialog.component";
import { FirebaseService } from "./shared/services/firebase.service";

const routes: Routes = [
  {
    path: "",
    loadChildren: "./main/main.module#MainModule"
  },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent }
  //   { path: "dashboard", component: DashboardComponent }
];

@NgModule({
  declarations: [AppComponent, LoginComponent, SignupComponent, ConfirmationDialogComponent],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    FormsModule,
    // SharedModule,
    AngularFirestoreModule,
    LocalStorageModule.withConfig({
      prefix: "cookbook",
      storageType: "localStorage"
    }),
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers)
  ],
  providers: [
    AuthService,
    AuthGuard,
    UiService,
    AppsService,
    HelperService,
    FirebaseService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationDialogComponent]
})
export class AppModule { }
