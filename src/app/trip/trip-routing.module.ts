import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { extract, Route } from '@app/core';

import { LocationListComponent } from './components/location-list/location-list.component';

const routes: Routes = [
  Route.withShell([
    { path: 'trip', component: LocationListComponent, data: { title: extract('LocationListComponent') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TripRoutingModule { }
