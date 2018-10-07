import { Component, OnInit } from '@angular/core';
import { RootState } from '@app/root-store/root-state';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LocationModel } from './../../../models/location';
import {
  LoadPlacesAction,
  getAllPlaces,
  getPlacesTotal,
  PlacesState,
  getSelectedPlace
} from './../../../root-store/places';
import * as routerActions from './../../../root-store/router/actions';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit {
  locations$: Observable<LocationModel[]>;
  total$: Observable<number>;
  selectedPlace$: Observable<LocationModel>;

  constructor(private store$: Store<PlacesState>) {}

  ngOnInit() {
    this.store$.dispatch(new LoadPlacesAction());
    this.total$ = this.store$.pipe(select(getPlacesTotal));
    this.locations$ = this.store$.pipe(select(getAllPlaces));
    this.selectedPlace$ = this.store$.pipe(select(getSelectedPlace));
  }

  public goToHome() {
    this.store$.dispatch(new routerActions.Back());

    // this.store$.dispatch(new routerActions.Go({
    //   path: ['/about']
    // }));
  }

  public onClick(id: number) {
    this.store$.dispatch(new routerActions.Go({
      path: ['/trip/' + id]
    }));
  }
}
