import { Action } from '@ngrx/store';
import { Category } from '../models/category.model';
import { UploadingTask } from '../models/uploadingtask.model';
import { Recipe } from '../models/recipe.model';

export const IS_LOADING_CATE = '[Apps] Is Loading Cate';
export const IS_UNLOADING_CATE = '[Apps] Is Unloading Cate';

export const UPLOADING_RECIPE = '[Apps] Uploading Recipe';
export const UN_UPLOADING_RECIPE = '[Apps] UnUploading Recipe';

export const DOWNLOADING_URLS = '[Apps] Downloading URLs'

export const SENDING_RECIPES = '[Apps] Sending Recipes'

export const SENDING_RECIPE = '[Apps] Sending Recipe'

export class IsloadingCate implements Action {
    readonly type = IS_LOADING_CATE

}

export class IsunloadingCate implements Action {
    readonly type = IS_UNLOADING_CATE

    constructor(public payload: Category[]) { }
}

export class UploadingRecipe implements Action {
    readonly type = UPLOADING_RECIPE

    constructor(public payload: UploadingTask[]) { }
}

export class UnUploadingRecipe implements Action {
    readonly type = UN_UPLOADING_RECIPE
}

export class DownloadingURLs implements Action {
    readonly type = DOWNLOADING_URLS

    constructor(public payload: string[]) { }
}

export class SendingRecipes implements Action {
    readonly type = SENDING_RECIPES

    constructor(public payload: Recipe[]) { }
}

export class SendingRecipe implements Action {
    readonly type = SENDING_RECIPE

    constructor(public payload: Recipe) { }
}

export type AppsActions = IsloadingCate | IsunloadingCate | UploadingRecipe | UnUploadingRecipe | DownloadingURLs | SendingRecipes | SendingRecipe;
