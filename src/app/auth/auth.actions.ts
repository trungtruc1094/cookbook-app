import { Action } from '@ngrx/store';
import { User } from './model/user.model';

export const IS_AUTHENTICATED = '[Auth] Is Authenticated';
export const IS_UNAUTHENTICATED = '[Auth] Is Unauthenticated';

export class Authenticated implements Action {
    readonly type = IS_AUTHENTICATED

    constructor(public payload: User) { }
}

export class Unauthenticated implements Action {
    readonly type = IS_UNAUTHENTICATED
}

export type AuthActions = Authenticated | Unauthenticated;
