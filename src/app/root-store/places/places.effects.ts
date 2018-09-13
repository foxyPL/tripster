import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, switchMap } from 'rxjs/operators';
import { PlacesService } from './../../trip/places-service';
import * as fromPlaceAction from './places.actions';

@Injectable()
export class PlacesEffects {
  @Effect()
  loadPlacesEffect$: Observable<Action> = this.actions$.pipe(
    ofType(fromPlaceAction.PlacesActionTypes.LoadPlaces),
    switchMap(action => {
      return this.placesService.getPlaces().pipe(
        map(result => {
          return new fromPlaceAction.LoadPlacesSuccessAction({ items: result });
        })
      );
    }),
    catchError(error => of(new fromPlaceAction.LoadPlacesFailureAction({ error })))
  );

  constructor(private actions$: Actions, private placesService: PlacesService) {}
}
