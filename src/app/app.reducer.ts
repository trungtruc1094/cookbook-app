import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromAuth from './auth/auth.reducer';
import * as fromUi from './shared/ui.reducer';
import * as fromApps from './main/apps/apps.reducer';


export interface State {
    auth: fromAuth.State,
    ui: fromUi.State,
    apps: fromApps.State
}

export const reducers: ActionReducerMap<State> = {
    auth: fromAuth.AuthReducer,
    ui: fromUi.UiReducer,
    apps: fromApps.AppsReducer
}

// Get Auth State
const getAuthState = createFeatureSelector<fromAuth.State>('auth');
export const getIsAuthenticated = createSelector(getAuthState, fromAuth.getIsAuthenticated);
export const getCurrentUser = createSelector(getAuthState, fromAuth.getCurrentUser);

// Get Ui State
const getUiState = createFeatureSelector<fromUi.State>('ui');
export const getIsLoading = createSelector(getUiState, fromUi.getIsLoading);
export const getIsLoadingApp = createSelector(getUiState, fromUi.getIsLoadingApp);
export const getAppList = createSelector(getUiState, fromUi.getAppList);

// Get Apps State
const getAppsState = createFeatureSelector<fromApps.State>('apps');
export const getIsLoadingCate = createSelector(getAppsState, fromApps.getIsLoadingCate);
export const getCategoryList = createSelector(getAppsState, fromApps.getCategoryList);

export const getIsUploadingRecipe = createSelector(getAppsState, fromApps.getIsUploadingRecipe);
export const getUploadingTask = createSelector(getAppsState, fromApps.getUploadingTask);

export const getDownloadingURLs = createSelector(getAppsState, fromApps.getDownloadingURLs);

export const getRecipeList = createSelector(getAppsState, fromApps.getRecipeList);

export const getRecipe = createSelector(getAppsState, fromApps.getRecipe);





