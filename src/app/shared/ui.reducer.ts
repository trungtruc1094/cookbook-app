import { UiActions, IS_LOADING, IS_UNLOADING, IS_LOADING_APP, IS_UNLOADING_APP } from './ui.actions';
import { MoApp } from './moapp.model';

export interface State {
    isLoading: boolean;
    isLoadingApp: boolean;
    appList: MoApp[];
}

const initialState: State = {
    isLoading: false,
    isLoadingApp: false,
    appList: null
}

export function UiReducer(state = initialState, actions: UiActions) {
    switch (actions.type) {
        case IS_LOADING:
            return {
                ...state,
                isLoading: true
                // isLoadingApp: false
            }
        case IS_UNLOADING:
            return {
                ...state,
                isLoading: false
                // isLoadingApp: false
            }
        case IS_LOADING_APP:
            return {
                ...state,
                isLoadingApp: true
                // isLoading: false
            }
        case IS_UNLOADING_APP:
            return {
                ...state,
                isLoadingApp: false,
                appList: actions.payload
                // isLoading: false
            }
        default:
            return state
    }
}

export const getIsLoading = (state: State) => state.isLoading;

export const getIsLoadingApp = (state: State) => state.isLoadingApp;

export const getAppList = (state: State) => state.appList;