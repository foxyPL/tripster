import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { reducers } from '@app/root-store/router/route-serializer';
import { environment } from '@env/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PlacesModule } from './places/places.module';
// import { LocationsStoreModule } from './locations-store/locations-store.module';
import { RouterEffects } from './router/effects';
import { RouterStoreModule } from './router/router-store.module';

@NgModule({
  imports: [
    CommonModule,
    // LocationsStoreModule,
    PlacesModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([RouterEffects]),
    RouterStoreModule,
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : []
  ],
  declarations: []
})
export class RootStoreModule {}
