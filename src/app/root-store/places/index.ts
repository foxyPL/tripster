import { createFeatureSelector } from '@ngrx/store';
import { adapter, PlacesState } from './places.reducer';

export * from './places.actions';
export * from './places.effects';
export * from './places.reducer';

export const getPlacesState = createFeatureSelector<PlacesState>('places');

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors(getPlacesState);
