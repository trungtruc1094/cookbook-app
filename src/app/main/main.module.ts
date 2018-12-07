import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";

import { FileUploadModule } from 'ng2-file-upload';

import { DashboardComponent } from "./dashboard/dashboard.component";
import { SharedModule } from "../shared/shared.module";
import { MainComponent } from "./main.component";
import { AuthGuard } from "../shared/auth-guard.service";
import { AppsComponent } from "./apps/apps.component";
import { AppsdetailComponent } from "./apps/appsdetail/appsdetail.component";
import { RecipeDetailComponent } from "./apps/recipedetail/recipedetail.component";
import { RecipeEditComponent } from "./apps/recipeedit/recipeedit.component";
import { AppstartComponent } from "./apps/appstart/appstart.component";
import { SidenavComponent } from "../navigation/sidenav/sidenav.component";
import { NavComponent } from "../navigation/nav/nav.component";
import { RecipeaddnewComponent } from "./apps/recipeaddnew/recipeaddnew.component";
import { DashboardService } from "./dashboard/dashboard.service";
import { RecipeEditService } from "./apps/recipeedit/recipeedit.service";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: "", redirectTo: "/dashboard", pathMatch: "full" },
      { path: "dashboard", component: DashboardComponent },
      {
        path: 'apps', component: AppsComponent, children: [
          { path: '', component: AppstartComponent },
          { path: ':app', component: AppsdetailComponent },
          { path: ':app/new', component: RecipeaddnewComponent },
          { path: ':app/:id', component: RecipeDetailComponent },
          { path: ':app/:id/edit', component: RecipeEditComponent },
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    AppsComponent,
    AppstartComponent,
    AppsdetailComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
    SidenavComponent,
    NavComponent,
    RecipeaddnewComponent
  ],
  imports: [RouterModule.forChild(routes), SharedModule, FileUploadModule],
  providers: [DashboardService, RecipeEditService],
  exports: []
})
export class MainModule { }
