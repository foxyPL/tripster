import * as fromPlaces from './places';
import * as fromRouter from './router/router-state';

export interface RootState {
  places: fromPlaces.PlacesState;
  router: fromRouter.State
}
