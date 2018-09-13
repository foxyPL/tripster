import { Action } from '@ngrx/store';

export enum TripActionTypes {
  START_LOADING = '[TRIP] Start loading',
  STOP_LOADING = '[TRIP] Stop loading'
}

export class StartLoading implements Action {
  readonly type = TripActionTypes.START_LOADING;
}

export class StopLoading implements Action {
  readonly type = TripActionTypes.STOP_LOADING;
}

export type TripActions = StartLoading | StopLoading;
