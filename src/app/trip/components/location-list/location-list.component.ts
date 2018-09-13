import { Component, OnInit } from '@angular/core';
import { RootState } from '@app/root-store/root-state';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LocationModel } from './../../../models/location';
import { LoadPlacesAction, selectAll, selectTotal, PlacesState } from './../../../root-store/places';
import * as routerActions from './../../../root-store/router/actions';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit {
  locations$: Observable<LocationModel[]>;
  total$: Observable<number>;

  constructor(private store$: Store<PlacesState>) {}

  ngOnInit() {
    this.store$.dispatch(new LoadPlacesAction());
    this.total$ = this.store$.pipe(select(selectTotal));
    this.locations$ = this.store$.pipe(select(selectAll));
  }

  public goToHome() {
    this.store$.dispatch(new routerActions.Back());

    // this.store$.dispatch(new routerActions.Go({
    //   path: ['/about']
    // }));
  }
}
