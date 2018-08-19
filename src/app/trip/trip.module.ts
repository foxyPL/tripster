import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TripRoutingModule } from '@app/trip/trip-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { NgPipesModule } from 'ngx-pipes';
import { RootStoreModule } from './../root-store/root-store.module';
import { LocationListComponent } from './components/location-list/location-list.component';
import { PlacesService } from './places-service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RootStoreModule,
    TranslateModule,
    NgbModule,
    TripRoutingModule,
    NgPipesModule
  ],
  declarations: [LocationListComponent],
  providers: [
    PlacesService
  ]
})
export class TripModule { }
