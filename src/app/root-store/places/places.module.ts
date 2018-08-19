import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromPlaces from './index';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('places', fromPlaces.reducer),
    EffectsModule.forFeature([fromPlaces.PlacesEffects])
  ],
  declarations: []
})
export class PlacesModule { }
