import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeEditService } from './recipeedit.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

import * as fromRoot from '../../../app.reducer';
import * as Apps from '../apps.actions';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { componentDestroyed } from '@w11k/ngx-componentdestroyed';
import { Recipe } from '../../models/recipe.model';
import { Observable } from 'rxjs';
import { Category } from '../../models/category.model';
import { AppsService } from '../apps.service';
import { HelperService } from 'src/app/shared/services/helper.service';
import { UploadingTask } from '../../models/uploadingtask.model';
import * as _ from 'lodash';

@Component({
  selector: 'app-recipeedit',
  templateUrl: './recipeedit.component.html',
  styleUrls: ['./recipeedit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  recipe: Recipe;
  uploadedFiles: any[] = [];
  images = [];

  // Get value for unit and level
  units = this.helperService.ingredient_unit;
  levels = this.helperService.recipe_level;

  // Variables for params and query params
  appParam: string;
  appIdQueryParam: string;
  id: string;

  // Insert your form group declaration
  public exampleForm: FormGroup;

  // Observables for store
  isLoadingCate$: Observable<boolean>;
  categoryList$: Observable<Category[]>;

  isUploadingRecipe: boolean = false;
  uploadingTasks: UploadingTask[];
  downloadURLs: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private recipeEditService: RecipeEditService,
    private _fb: FormBuilder,
    private router: Router,
    private store: Store<fromRoot.State>,
    private appsService: AppsService,
    private helperService: HelperService) { }

  ngOnInit() {
    this.store.select(fromRoot.getRecipe).pipe(takeUntil(componentDestroyed(this))).subscribe(res => {
      if (res) {
        this.recipe = res;
        this.updateValues(res);
      }
    })

    this.route.params.subscribe(params => {
      this.appParam = params['app'];
    })

    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.route.queryParams.subscribe(queryParams => {
        this.appIdQueryParam = queryParams['appId'];
        this.recipeEditService.getRecipe(this.appIdQueryParam, this.id);
      })
    })

    // Uploading Recipe
    this.store.select(fromRoot.getIsUploadingRecipe).pipe(takeUntil(componentDestroyed(this))).subscribe(res => {
      this.isUploadingRecipe = res;
    });

    this.store.select(fromRoot.getUploadingTask).pipe(takeUntil(componentDestroyed(this))).subscribe(res => {
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
      ingredients: this._fb.array([]),
      duration: ['', Validators.required],
      level: ['', Validators.required],
      prep: ['', Validators.required],
      serving: ['', Validators.required],
      steps: this._fb.array([])
    })
  }

  // Select File and show preview before upload
  onSelectFile(event) {
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

  updateValues(recipe: Recipe) {
    if (this.exampleForm) {
      this.exampleForm.patchValue({
        recipeName: recipe.recipeName,
        recipeCate: recipe.recipeCategory,
        recipeSubtitle: recipe.recipeSubtitle,
        ingredients: recipe.recipeIngredients,
        duration: recipe.recipeDuration,
        level: recipe.recipeLevel,
        prep: recipe.recipePrep,
        serving: recipe.recipeServing
      });
      this.initIngredient();
      this.initStep();
    }
  }

  // Init ingredient
  private initIngredient() {
    const control = <FormArray>this.exampleForm.controls['ingredients'];
    this.recipe.recipeIngredients.forEach(element => {
      control.push(this._fb.group({
        name: [element.name],
        quantity: [element.quantity],
        unit: [element.unit]
      }));
    })
  }
  // Init step
  private initStep() {
    const control = <FormArray>this.exampleForm.controls['steps'];
    this.recipe.recipeSteps.forEach(element => {
      control.push(this._fb.group({
        step: [element.step]
      }));
    })
  }

  getIngredientUnit() {
    return this._fb.group({
      name: [''],
      quantity: [''],
      unit: ['']
    });
  }

  getStepUnit() {
    return this._fb.group({
      step: [''],
    });
  }

  // Remove or Add ingredient unit
  addIngredientUnit() {
    const control = <FormArray>this.exampleForm.controls['ingredients'];
    control.push(this.getIngredientUnit());
  }

  removeIngredientUnit(i: number) {
    const control = <FormArray>this.exampleForm.controls['ingredients'];
    control.removeAt(i);
  }

  // Remove or Add step unit
  addStepUnit() {
    const control = <FormArray>this.exampleForm.controls['steps'];
    control.push(this.getStepUnit());
  }

  removeStepUnit(i: number) {
    const control = <FormArray>this.exampleForm.controls['steps'];
    control.removeAt(i);
  }

  removeFile(i: number) {
    _.pullAt(this.images, [i]);
  }

  removeImage(i: number) {
    _.pullAt(this.recipe.recipeImages, [i]);
  }

  onSubmit(model: any, isValid: boolean, e: any) {
    e.preventDefault();
    // Get an array of files
    const fileArr = this.uploadedFiles;
    const recipeObj: Recipe = {
      id: this.recipe.id,
      appId: this.appIdQueryParam,
      recipeName: model.recipeName,
      recipeCategory: model.recipeCate,
      recipeSubtitle: model.recipeSubtitle,
      recipeIngredients: model.ingredients,
      recipeDuration: model.duration,
      recipeLevel: model.level,
      recipeSteps: model.steps,
      recipePrep: model.prep,
      recipeServing: model.serving,
      recipeImages: this.recipe.recipeImages
    }
    this.recipeEditService.updateRecipe(fileArr, recipeObj, this.appIdQueryParam, (resolve) => {
      this.store.dispatch(new Apps.DownloadingURLs(null));
      this.helperService.showPNotify('Success Message', 'Updating Recipe successfully', 'success');
      this.router.navigate(['../../'], { relativeTo: this.route, preserveQueryParams: true });
    },
      (error) => {
        this.helperService.showPNotify('Error Message', error, 'error');
      });
  }

  // Click Backbutton
  goBack() {
    this.router.navigate(['../../'], { relativeTo: this.route, preserveQueryParams: true });
  }

  ngOnDestroy() { }
}
