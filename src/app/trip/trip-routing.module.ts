import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { extract, Route } from '@app/core';
import { LocationListComponent } from './components/location-list/location-list.component';
import { LocationItemComponent } from '@app/trip/components/location-item/location-item.component';

const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  // Route.withShell([
  //   { path: 'trip', component: LocationListComponent, data: { title: extract('LocationListComponent') } }
  // ])
 // { path: '', redirectTo: '/trip', pathMatch: 'full' },
  { path: '', component: LocationListComponent, data: { title: extract('Trip') }} ,
  { path: ':id', component: LocationItemComponent, data: { title: extract('Trip 1') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule],
  providers: []
})
export class TripRoutingModule {}
