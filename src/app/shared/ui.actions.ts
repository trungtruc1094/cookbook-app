import { Action } from '@ngrx/store';
import { MoApp } from './moapp.model';

export const IS_LOADING = '[Auth] Is Loading';
export const IS_UNLOADING = '[Auth] Is Unloading';

export const IS_LOADING_APP = '[Auth] Is Loading App';
export const IS_UNLOADING_APP = '[Auth] Is Unloading App';

export class Isloading implements Action {
    readonly type = IS_LOADING
}

export class Isunloading implements Action {
    readonly type = IS_UNLOADING
}

export class IsloadingApp implements Action {
    readonly type = IS_LOADING_APP

}

export class IsunloadingApp implements Action {
    readonly type = IS_UNLOADING_APP

    constructor(public payload: MoApp[]) { }
}

export type UiActions = Isloading | Isunloading | IsloadingApp | IsunloadingApp;
