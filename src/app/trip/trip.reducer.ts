import { Action } from '@ngrx/store';
import * as TripActions from './trip.actions';
import { Location } from '../shared/models/location';

export interface State {
    isLoading: boolean;
    locations: Location[];
}

const initialState: State = {
    isLoading: false,
    locations: new Array<Location>()
};

export function tripReducer(state: State = initialState, action: Action) {
    switch (action.type) {
        case TripActions.TripActionTypes.START_LOADING:
        return {
            ...state,
            isLoading: true
        };
        case TripActions.TripActionTypes.STOP_LOADING:
        return {
            ...state,
            isLoading: false
        };
        default: {
            return state;
        }
    }
}

export const getIsLoading = (state: State) => state.isLoading;
