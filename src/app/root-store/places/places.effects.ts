import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, switchMap, filter } from 'rxjs/operators';
import { PlacesService } from './../../trip/places-service';
import * as fromPlaceAction from './places.actions';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';

@Injectable()
export class PlacesEffects {

  constructor(private actions$: Actions, private placesService: PlacesService) {}

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

}
