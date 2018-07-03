import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TripRoutingModule } from '@app/trip/trip-routing.module';
import { LocationListComponent } from './components/location-list/location-list.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    NgbModule,
    TripRoutingModule
  ],
  declarations: [LocationListComponent]
})
export class TripModule { }
