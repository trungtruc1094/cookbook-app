import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeEditService } from '../recipeedit/recipeedit.service';

import * as fromRoot from '../../../app.reducer';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { componentDestroyed } from '@w11k/ngx-componentdestroyed';
import { Recipe } from '../../models/recipe.model';
import { HelperService } from 'src/app/shared/services/helper.service';
import { AppsService } from '../apps.service';

import * as _ from 'lodash';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  recipe: Recipe;

  // Variables for params and query params
  appIdQueryParam: string;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeEditService: RecipeEditService,
    private store: Store<fromRoot.State>,
    private helperService: HelperService,
    private appsService: AppsService) { }

  ngOnInit() {
    console.log('Start Recipe: ', this.recipe);
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.route.queryParams.subscribe(queryParams => {
        this.appIdQueryParam = queryParams['appId'];
        this.recipeEditService.getRecipe(this.appIdQueryParam, this.id);
      })
    })

    // For first init
    if (this.helperService.categories.length > 0 && this.helperService.categories) {
      this.getRecipeDetails();
    } else {
      this.helperService.categoriesList.subscribe(res => {
        if (res && res.length > 0) {
          this.getRecipeDetails();
        }
      })
    }
  }

  getRecipeDetails() {
    this.store.select(fromRoot.getRecipe).pipe(takeUntil(componentDestroyed(this))).subscribe(res => {
      if (res) {
        this.recipe = _.cloneDeep(res);
        this.recipe.recipeCategory = this.helperService.convertCategoryId(this.recipe.recipeCategory);
        this.recipe.recipeLevel = this.helperService.convertLevelId(this.recipe.recipeLevel);
        let newIngredients = [];
        for (let i = 0; i < this.recipe.recipeIngredients.length; i++) {
          let ingredient = this.recipe.recipeIngredients[i];
          if (ingredient.unit !== '') {
            ingredient['unit'] = this.helperService.convertUnitId(ingredient.unit);
            newIngredients.push(ingredient);
          } else {
            newIngredients.push(ingredient);
          }
        }
        this.recipe.recipeIngredients = newIngredients;
      }
    })
  }

  // Click Backbutton
  goBack() {
    this.router.navigate(['../'], { relativeTo: this.route, preserveQueryParams: true });
    console.log('Recipe: ', this.recipe);
  }

  ngOnDestroy() { }

}
