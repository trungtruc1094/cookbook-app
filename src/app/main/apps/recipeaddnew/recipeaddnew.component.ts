import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppsService } from '../apps.service';
import { Recipe } from '../../models/recipe.model';


import { Category } from '../../models/category.model';
import { HelperService } from 'src/app/shared/services/helper.service';
import { UploadingTask } from '../../models/uploadingtask.model';
import { takeUntil, map } from 'rxjs/operators';
import { componentDestroyed } from "@w11k/ngx-componentdestroyed";

import * as fromRoot from '../../../app.reducer';
import * as Apps from '../apps.actions';

declare var $: any;

@Component({
  selector: 'app-recipeaddnew',
  templateUrl: './recipeaddnew.component.html',
  styleUrls: ['./recipeaddnew.component.css']
})
export class RecipeaddnewComponent implements OnInit, AfterViewInit, OnDestroy {
  pnotify = undefined;

  uploadedFiles: any[] = [];
  images = [];

  selectImageChecked = false;
  uploadComplete = false;

  // Get value for unit and level
  units = this.helperService.ingredient_unit;
  levels = this.helperService.recipe_level;

  // Insert your form group declaration
  public exampleForm: FormGroup;

  // Variables for params and query params
  appParam: string;
  appIdQueryParam: string;

  // Observables for store
  isLoadingCate$: Observable<boolean>;
  categoryList$: Observable<Category[]>;

  isUploadingRecipe: boolean = false;
  uploadingTasks: UploadingTask[];
  downloadURLs: string[] = [];

  constructor(
    private appsService: AppsService,
    private _fb: FormBuilder,
    private route: ActivatedRoute,
    private store: Store<fromRoot.State>,
    private router: Router,
    private helperService: HelperService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.appParam = params['app'];
    })

    this.route.queryParams.subscribe(queryParams => {
      this.appIdQueryParam = queryParams['appId'];
    })

    // Uploading Recipe
    this.store.select(fromRoot.getIsUploadingRecipe).pipe(takeUntil(componentDestroyed(this))).subscribe(res => {
      this.isUploadingRecipe = res;
    });

    this.store.select(fromRoot.getUploadingTask).pipe(
      takeUntil(componentDestroyed(this))).subscribe(res => {
      this.uploadingTasks = res;
    });

    this.store.select(fromRoot.getDownloadingURLs).pipe(takeUntil(componentDestroyed(this))).subscribe(res => {
      this.downloadURLs = res;
    });

    // Loading Category from Service
    this.appsService.getCategoryList();
    this.isLoadingCate$ = this.store.select(fromRoot.getIsLoadingCate);
    this.categoryList$ = this.store.select(fromRoot.getCategoryList);

    // Initialize form
    this.exampleForm = this._fb.group({
      recipeName: ['', Validators.required],
      recipeCate: ['', Validators.required],
      recipeSubtitle: ['', Validators.required],
      ingredients: this._fb.array([
        this.getIngredientUnit()
      ]),
      duration: ['', Validators.required],
      level: ['', Validators.required],
      prep: ['', Validators.required],
      serving: ['', Validators.required],
      steps: this._fb.array([
        this.getStepUnit()
      ])
    })
  }

  // Select File and show preview before upload
  onSelectFile(event) {
    this.selectImageChecked = true;
    if (event.target.files && event.target.files[0]) {
      this.uploadedFiles = event.target.files;

      for (let i = 0; i < this.uploadedFiles.length; i++) {
        let element = this.uploadedFiles[i];
        var reader = new FileReader();
        reader.readAsDataURL(element);
        reader.onload = (event) => {
          this.images.push(event.target.result);
        }
      }
    }
  }

  // Create new control ingredient
  getIngredientUnit() {
    return this._fb.group({
      name: [''],
      quantity: [''],
      unit: ['']
    });
  }

  // Create new control unit
  getStepUnit() {
    return this._fb.group({
      step: [''],
    });
  }

  removeFile(i: number) {
    this.images.splice(i, 1);
  }

  // Remove or Add ingredient unit
  private addIngredientUnit() {
    const control = <FormArray>this.exampleForm.controls['ingredients'];
    control.push(this.getIngredientUnit());
  }

  private removeIngredientUnit(i: number) {
    const control = <FormArray>this.exampleForm.controls['ingredients'];
    control.removeAt(i);
  }

  // Remove or Add step unit
  private addStepUnit() {
    const control = <FormArray>this.exampleForm.controls['steps'];
    control.push(this.getStepUnit());
  }

  private removeStepUnit(i: number) {
    const control = <FormArray>this.exampleForm.controls['steps'];
    control.removeAt(i);
  }

  // Click Submit form
  onSubmit(model: any, isValid: boolean, e: any) {
    e.preventDefault();
    // Get an array of files
    const fileArr = this.uploadedFiles;
    const recipeObj: Recipe = {
      appId: this.appIdQueryParam,
      recipeName: model.recipeName,
      recipeCategory: model.recipeCate,
      recipeSubtitle: model.recipeSubtitle,
      recipeIngredients: model.ingredients,
      recipeDuration: model.duration,
      recipeLevel: model.level,
      recipePrep: model.prep,
      recipeServing: model.serving,
      recipeSteps: model.steps
    }
    this.appsService.addNewRecipe(fileArr, recipeObj, this.appIdQueryParam, (resolve) => {
      this.store.dispatch(new Apps.DownloadingURLs(null));
      this.helperService.showPNotify('Success Message', 'Upload Recipe successfully', 'success');
      this.router.navigate(['../'], { relativeTo: this.route, preserveQueryParams: true });
    },
      (error) => {
        this.helperService.showPNotify('Error Message', error, 'error');
      });
  }

  // Click Backbutton
  goBack() {
    this.router.navigate(['../'], { relativeTo: this.route, preserveQueryParams: true });
  }

  ngOnDestroy() { }

  ngAfterViewInit() {
    $(document).ready(function () {
      console.log('jQuery dashboard ready');
    });
  }

}
