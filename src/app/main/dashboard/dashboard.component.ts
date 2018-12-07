import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UiService } from 'src/app/shared/services/ui.service';
import { AppsService } from '../apps/apps.service';
import { DashboardService } from './dashboard.service';

declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  public appNameVar: string = "";
  public cateNameVar: string = "";

  constructor(private uiService: UiService,
    private appsService: AppsService,
    private dashboardService: DashboardService) { }

  ngOnInit() {
    console.log('Dashboard run');
  }

  // App Modal
  clickAppModal() {
    this.appNameVar = "";
  }

  addApp() {
    this.dashboardService.addNewApp(this.appNameVar);
    $(function () {
      $('#addAppModal').modal('toggle');
    });
  }

  // Category Modal
  clickCateModal() {
    this.cateNameVar = "";
  }

  addCategory() {

    this.dashboardService.addNewCategory(this.cateNameVar, function (resolve) {
      console.log('Callback: ', resolve);
    },
      function (error) {
        console.log('Error: ', error);
      });

    $(function () {
      $('#addCategoryModal').modal('toggle');
    });
  }

  ngAfterViewInit() {
    $(document).ready(function () { })
  }

}
