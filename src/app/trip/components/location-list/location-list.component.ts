import { Component, OnInit } from '@angular/core';
import { RootState } from '@app/root-store/root-state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LocationModel } from './../../../models/location';
import { LoadPlacesAction, selectAll, selectTotal } from './../../../root-store/places';
import * as routerActions from './../../../root-store/router/actions';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit {

  locations$: Observable<LocationModel[]>;
  total$: Observable<number>;

  constructor(private store$: Store<RootState>) { }

  ngOnInit() {
    this.total$ = this.store$.select(selectTotal);
    this.locations$ = this.store$.select(selectAll);

    this.store$.dispatch(
      new LoadPlacesAction()
    );

  }

  public goToHome() {
    this.store$.dispatch(new routerActions.Back());

    // this.store$.dispatch(new routerActions.Go({
    //   path: ['/about']
    // }));
  }

}
