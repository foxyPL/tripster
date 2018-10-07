import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPlaces from './places.reducer';

export * from './places.actions';
export * from './places.effects';
export * from './places.reducer';

const getPlacesState = createFeatureSelector<fromPlaces.PlacesState>('places');
const getSelectedPowerId = createSelector(getPlacesState, fromPlaces.getSelectedPowerId);

export const {
  selectIds: getPlacesIds,
  selectEntities: getPlacesEntities,
  selectAll: getAllPlaces,
  selectTotal: getPlacesTotal
} = fromPlaces.adapter.getSelectors(getPlacesState);

export const getSelectedPlace = createSelector(
  getPlacesEntities,
  getSelectedPowerId,
  (entities, selectedPowerId) => selectedPowerId && entities[selectedPowerId]
);
