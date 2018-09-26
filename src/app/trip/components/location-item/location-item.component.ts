import { State } from './../../../root-store/router/router-state';
import { RootState } from './../../../root-store/root-state';
import { Component, OnInit } from '@angular/core';
import { Store, select, } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { LocationModel } from '@app/models/location';
import { getSelectedPlace, SelectPlaceAction, LoadPlacesAction } from '@app/root-store/places';
import { getRouterState } from '@app/root-store/router/router-state';
import { tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-location-item',
  templateUrl: './location-item.component.html',
  styleUrls: ['./location-item.component.scss']
})
export class LocationItemComponent implements OnInit {
  selectedPlace$: Observable<LocationModel>;

  constructor(private store$: Store<RootState>) {
    this.store$.dispatch(new LoadPlacesAction());
    this.selectedPlace$ = this.store$.pipe(
      select(getRouterState),
      tap(paramMap => this.store$.dispatch(new SelectPlaceAction({ id: paramMap.state.params['id']  }))),
      switchMap(() => this.store$.pipe(select(getSelectedPlace)))
      );
  }
  // getRouterState
  ngOnInit(): void {}
}
