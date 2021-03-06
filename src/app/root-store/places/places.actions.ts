import { PlaceModel } from '@app/models/place';
import { Action } from '@ngrx/store';

export enum PlacesActionTypes {
  LoadPlaces = '[Places] Load Places',
  LoadPlacesSuccess = '[Places] Load Places Success',
  LoadPlacesFailure = '[Places] Load Places Failure',
  SelectPlace = '[Places] Select place'
}

export class LoadPlacesAction implements Action {
  readonly type = PlacesActionTypes.LoadPlaces;
}

export class SelectPlaceAction implements Action {
  readonly type = PlacesActionTypes.SelectPlace;
  constructor(public payload: { id: number }) {}
}

export class LoadPlacesSuccessAction implements Action {
  readonly type = PlacesActionTypes.LoadPlacesSuccess;
  constructor(public payload: { items: PlaceModel[] }) {}
}

export class LoadPlacesFailureAction implements Action {
  readonly type = PlacesActionTypes.LoadPlacesFailure;
  constructor(public payload: { error: string }) {}
}

export type PlacesActions = LoadPlacesAction | LoadPlacesSuccessAction | LoadPlacesFailureAction | SelectPlaceAction;
