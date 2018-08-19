import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterEffects } from './effects';
import { CustomSerializer } from './route-serializer';


@NgModule({
  imports: [
    CommonModule,
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [RouterEffects, { provide: RouterStateSerializer, useClass: CustomSerializer }],
  declarations: []
})
export class RouterStoreModule { }
