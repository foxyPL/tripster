import { PlaceModel } from './../../../models/place';
import { LoadPlacesSuccessAction } from './../../../root-store/places/places.actions';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { reducer, LoadPlacesAction } from '@app/root-store/places';
import { RootState } from '@app/root-store/root-state';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { NgPipesModule } from 'ngx-pipes';
import { LocationListComponent } from './location-list.component';

describe('LocationListComponent', () => {
  let component: LocationListComponent;
  let fixture: ComponentFixture<LocationListComponent>;
  let store: Store<RootState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgPipesModule,
        StoreModule.forRoot({
        }),
        StoreModule.forFeature('places', reducer)
      ],
      declarations: [LocationListComponent],
      providers: [],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(LocationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('store to be defined', async(() => {
    expect(store).toBeDefined();
  }));

  it('should dispatch an action to load data when created', () => {
    const action = new LoadPlacesAction();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should display a list of items after the data is loaded', () => {
    const result = new Array();
    result.push(
      {
        id: 113536,
        name: 'Old Town Square',
        legalName: 'old-town-square',
        description: 'Take a trip back in',
        descriptionNoHtml: 'Take a trip b',
        rating: 5.0,
        contactInformation: 'Address: rynek Starego Miasta, 00-001 Warszawa, Poland',
        longitude: 52.2497413,
        latitude: 21.012241700000004,
        siteTypeList: [
          {
            id: 110424,
            name: 'All Attractions',
            no: 1,
            legalName: 'all-attractions',
            imageOpt: {
              id: 361438,
              name: 'old-town-square_horizontal_small'
            },
            hasMenuItem: true,
            shortTitle: 'All Attractions',
            cityId: 673
          },
          {
            id: 110425,
            name: 'Top Attractions',
            no: 2,
            legalName: 'top-attractions',
            imageOpt: {
              id: 361932,
              name: '_small',
              creditTo: 'VanWiel',
              creditLink: 'https://commons.wikimedia.org/wiki/File:Wilan%C3%B3w_Palace.jpg'
            },
            hasMenuItem: true,
            shortTitle: 'Top Attractions',
            cityId: 673
          },
          {
            id: 110426,
            name: 'Squares',
            no: 1000,
            legalName: 'squares',
            hasMenuItem: false,
            shortTitle: 'Squares',
            cityId: 673
          },
          {
            id: 110427,
            name: 'Kids Attractions',
            no: 5,
            legalName: 'kids-attractions',
            imageOpt: {
              id: 361446,
              name: 'palace-of-culture-and-science_horizontal_small'
            },
            hasMenuItem: true,
            shortTitle: 'Kids Attractions',
            cityId: 673
          }
        ],
        shortTitle: 'Old Town Square',
        subTitle: '',
        shortDescription:
          'Close to some great dining options, inspiring museums, and many of the city’s beautiful houses and palaces',
        imageOpt: {
          id: 361262,
          name: 'old-town-square_horizontal_small'
        },
        imageMid: {
          id: 361261,
          name: 'old-town-square_horizontal_mid'
        },
        sqrImageOpt: {
          id: 361259,
          name: 'old-town-square_sqr_small'
        },
        mainType: {
          id: 110426,
          name: 'Squares',
          no: 1000,
          legalName: 'squares',
          hasMenuItem: false,
          shortTitle: 'Squares',
          cityId: 673
        },
        no: 2,
        mainPaidActivity: {
          id: 10544216,
          vendor: 'Viator',
          vendorProductId: '64610P12',
          title: 'PACKAGE TOUR: Royal Castle, Warsaw Old Town Square Market, Palace of Culture',
          description:
            'daasd',
          descriptionNoHtml:
            'dasasddasads',
          price: '58.05',
          link:
            'dasasd',
          paidActivityCatergoryList: [
            {
              id: 109130,
              name: 'Tours \u0026 Sightseeing',
              legalName: 'tours--sightseeing',
              cityId: 673,
              no: 3,
              externalImageUrl:
                'asddasasdasd',
              vendor: 'Viator'
            },
            {
              id: 112324,
              name: 'All Activities',
              legalName: 'all-activities',
              cityId: 673,
              no: 1,
              externalImageUrl:
                'adsadsdas',
              vendor: 'Viator'
            },
            {
              id: 235198,
              name: 'City Packages',
              legalName: 'city-packages',
              cityId: 673,
              no: 1000,
              vendor: 'Viator'
            }
          ],
          no: 0,
          cityId: 673,
          averageRating: 0.0,
          reviewersNum: 0,
          externalImageUrl:
            'adsdasads'
        },
        parisPassSave: false,
        parisPassSkipLine: false,
        cityId: 673,
        userItinerariesCount: 1081,
        averageVisitDuration: 61,
        noPerUsers: 1,
        calculatedRating: 5.0,
        googlePlaceId: 'ChIJM_a7C2bMHkcRsoH4Y3isoR8',
        openHoursList: []
      }
    );

    const action = new LoadPlacesSuccessAction({ items: result });

    store.dispatch(action);

    fixture.detectChanges();

    component.locations$.subscribe(data => {
      expect(data.length).toBe(result.length);
    });

    component.total$.subscribe(data => {
      expect(data).toBe(result.length);
    });
  });
});
