import { AuthActions, IS_AUTHENTICATED, IS_UNAUTHENTICATED } from './auth.actions';
import { User } from './model/user.model';

export interface State {
    isAuthenticated: boolean;
    currentUser: User;
}

const initialState: State = {
    isAuthenticated: false,
    currentUser: null
}

export function AuthReducer(state = initialState, actions: AuthActions) {
    switch (actions.type) {
        case IS_AUTHENTICATED:
            return {
                isAuthenticated: true,
                currentUser: actions.payload
            }
        case IS_UNAUTHENTICATED:
            return {
                ...state,
                isAuthenticated: false
                // currentUser: null
            }
        default:
            return state
    }
}

export const getIsAuthenticated = (state: State) => state.isAuthenticated;
export const getCurrentUser = (state: State) => state.currentUser;