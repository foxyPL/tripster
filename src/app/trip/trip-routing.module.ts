import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { extract } from '@app/core';
import { LocationListComponent } from './components/location-list/location-list.component';

const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  // Route.withShell([
  //   { path: 'trip', component: LocationListComponent, data: { title: extract('LocationListComponent') } }
  // ])
  { path: '', component: LocationListComponent, data: { title: extract('About') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule],
  providers: []
})
export class TripRoutingModule {}
