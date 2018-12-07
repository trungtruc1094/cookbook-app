import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppsService } from '../apps.service';
import { Subscription } from 'rxjs';
import { Recipe } from '../../models/recipe.model';
import { HelperService } from 'src/app/shared/services/helper.service';
import { takeUntil, debounceTime } from 'rxjs/operators';

import * as fromRoot from '../../../app.reducer';

import { componentDestroyed } from "@w11k/ngx-componentdestroyed";
import { Store } from '@ngrx/store';
import { FormControl } from '@angular/forms';

declare var $: any;
// declare var $clamp: any;

@Component({
  selector: 'app-appsdetail',
  templateUrl: './appsdetail.component.html',
  styleUrls: ['./appsdetail.component.css']
})
export class AppsdetailComponent implements OnInit, AfterViewInit, OnDestroy {
  appName: String = '';
  recipeList: Recipe[] = [];
  appId: string = '';

  nextKey: any;
  prevKeys: any[];

  // Search Content
  searchContent = '';
  searchContentControl = new FormControl();

  constructor(private route: ActivatedRoute, private router: Router, private appsService: AppsService, private helperService: HelperService, private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.appName = params['app'];
    })

    this.route.queryParams.subscribe(queryParams => {
      this.appId = queryParams['appId'];
      this.appsService.getRecipeListFirst(this.appId);
      // Search recipe
      this.searchContentControl.valueChanges.pipe(
        takeUntil(componentDestroyed(this)),
        debounceTime(500))
        .subscribe(newValue => {
          if (newValue == '') {
            this.appsService.getRecipeListFirst(this.appId);
          } else {
            this.appsService.getRecipeListOnSearch(this.appId, newValue);
          }
        })
    })

    this.appsService.nextKey$.pipe(takeUntil(componentDestroyed(this))).subscribe(res => {
      this.nextKey = res;
    })

    this.appsService.prevKeys$.pipe(takeUntil(componentDestroyed(this))).subscribe(res => {
      this.prevKeys = res;
    })

    this.store.select(fromRoot.getRecipeList).pipe(takeUntil(componentDestroyed(this))).subscribe(res => {
      if (res && res.length == 0) {
        this.recipeList = []
      } else {
        this.recipeList = res;
        if (this.recipeList && this.recipeList.length > 0) {
          this.recipeList.forEach(element => {
            element['isLoadingImage'] = true;
          })
        }
      }
    });

  }

  prevPage() {
    this.appsService.prevPage();
  }

  nextPage() {
    this.appsService.nextPage();
  }

  isLoadingImageFn(i: number) {
    this.recipeList[i]['isLoadingImage'] = false;
  }

  addRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route, preserveQueryParams: true });
  }

  confirmDeleteModal(i: number) {
    this.helperService.confirmDialogComponent('Confirmation Dialog', 'Do you want to delete this recipe?', 'Yes', 'No', 'lg')
      .then(result => {
        if (result) {
          let recipeId = this.recipeList[i].id;
          this.recipeList.splice(i, 1);
          this.appsService.removeRecipe(recipeId, this.appId,
            (resolve) => {
              this.helperService.showPNotify('Success Message', resolve, 'success');
            },
            (error) => {
              this.helperService.showPNotify('Error Message', error, 'error');
            });
        }
      });
  }

  clickRecipeName(id: string) {
    this.router.navigate([id], { relativeTo: this.route, preserveQueryParams: true })
  }


  editRecipe(id: string) {
    this.router.navigate([id, 'edit'], { relativeTo: this.route, preserveQueryParams: true });
  }

  ngAfterViewInit() {
    $(document).ready(function () {

      $('form.form-search #search').focusin(function () {
        $('form.form-search button.icon').addClass('active');
      });

      $('form.form-search #search').focusout(function () {
        $('form.form-search button.icon').removeClass('active');
      });
    })
  }

  ngOnDestroy() {
  }

}
