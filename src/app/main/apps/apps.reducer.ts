import { Category } from "../models/category.model";
import { AppsActions, IS_LOADING_CATE, IS_UNLOADING_CATE, UPLOADING_RECIPE, UN_UPLOADING_RECIPE, DOWNLOADING_URLS, SENDING_RECIPES, SENDING_RECIPE } from "./apps.actions";
import { UploadingTask } from "../models/uploadingtask.model";
import { Recipe } from "../models/recipe.model";

export interface State {
    isLoadingCate: boolean;
    categoryList: Category[];
    isUploadingRecipe: boolean;
    uploadingTask: UploadingTask[];
    recipeImages: string[];
    recipeList: Recipe[];
    recipe: Recipe;
}

const initialState: State = {
    isLoadingCate: false,
    categoryList: null,
    isUploadingRecipe: false,
    uploadingTask: null,
    recipeImages: null,
    recipeList: null,
    recipe: null
}

export function AppsReducer(state = initialState, actions: AppsActions) {
    switch (actions.type) {
        case IS_LOADING_CATE:
            return {
                ...state,
                isLoadingCate: true,
                categoryList: null
            }
        case IS_UNLOADING_CATE:
            return {
                ...state,
                categoryList: actions.payload
            }
        case UPLOADING_RECIPE:
            return {
                ...state,
                isUploadingRecipe: true,
                uploadingTask: actions.payload
            }
        case UN_UPLOADING_RECIPE:
            return {
                ...state,
                isUploadingRecipe: false
            }
        case DOWNLOADING_URLS:
            return {
                ...state,
                recipeImages: actions.payload
            }
        case SENDING_RECIPES:
            return {
                ...state,
                recipeList: actions.payload
            }
        case SENDING_RECIPE:
            return {
                ...state,
                recipe: actions.payload
            }
        default:
            return state;
    }
}

export const getIsLoadingCate = (state: State) => state.isLoadingCate;
export const getCategoryList = (state: State) => state.categoryList;

export const getIsUploadingRecipe = (state: State) => state.isUploadingRecipe;
export const getUploadingTask = (state: State) => state.uploadingTask;

export const getDownloadingURLs = (state: State) => state.recipeImages;

export const getRecipeList = (state: State) => state.recipeList;

export const getRecipe = (state: State) => state.recipe;