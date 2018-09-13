import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTrip from './trip/trip.reducer';

export interface State {
  trip: fromTrip.State;
}

export const reducers: ActionReducerMap<State> = {
  trip: fromTrip.tripReducer
};

export const getTripState = createFeatureSelector<fromTrip.State>('trip');
export const getIsLoading = createSelector(getTripState, fromTrip.getIsLoading);
