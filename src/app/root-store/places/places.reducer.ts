import { PlaceModel } from '@app/models/place';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { PlacesActions, PlacesActionTypes, SelectPlaceAction } from './places.actions';

export interface PlacesState extends EntityState<PlaceModel> {
  isLoading: boolean;
  error: string;
  selectedPlaceId: number | null;
}

export const adapter: EntityAdapter<PlaceModel> = createEntityAdapter<PlaceModel>({
  selectId: (place: PlaceModel) => place.id,
  sortComparer: false
});

export const initialState: PlacesState = adapter.getInitialState({
  isLoading: false,
  error: null,
  selectedPlaceId: null
});

export function reducer(state: PlacesState = initialState, action: PlacesActions): PlacesState {
  switch (action.type) {
    case PlacesActionTypes.LoadPlaces:
      return {
        ...state,
        error: null,
        isLoading: true
      };

    case PlacesActionTypes.LoadPlacesSuccess:
      return adapter.addAll(action.payload.items, { ...state, error: null, isLoading: false });

    case PlacesActionTypes.LoadPlacesFailure:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false
      };

    case PlacesActionTypes.SelectPlace:
      return {
        ...state,
        selectedPlaceId: action.payload.id
      };

    default:
      return state;
  }
}

export const getSelectedPowerId = (state: PlacesState) => state.selectedPlaceId;