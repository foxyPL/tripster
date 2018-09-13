import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlaceModel } from '@app/models/place';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable()
export class PlacesService {
  constructor(private httpClient: HttpClient) {}

  getPlaces(): Observable<PlaceModel[]> {
    return this.httpClient
      .disableApiPrefix()
      .get<PlaceModel[]>('/backend/places')
      .pipe(catchError(() => throwError('Error, could not load joke :-(')));
  }
}
