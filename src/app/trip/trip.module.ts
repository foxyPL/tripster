import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TripRoutingModule } from '@app/trip/trip-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { NgPipesModule } from 'ngx-pipes';
import { RootStoreModule } from './../root-store/root-store.module';
import { LocationListComponent } from './components/location-list/location-list.component';
import { PlacesService } from './places-service';
import { LocationItemComponent } from '@app/trip/components/location-item/location-item.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RootStoreModule,
    TranslateModule,
    NgbModule,
    TripRoutingModule,
    NgPipesModule,
    FormsModule
  ],
  declarations: [LocationListComponent, LocationItemComponent],
  providers: [PlacesService]
})
export class TripModule {}
