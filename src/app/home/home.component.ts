import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { QuoteService } from './quote.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quote: string;
  isLoading: boolean;
  public locations: any[];

  ngOnInit() {
    this.isLoading = true;
    this.quoteService.getRandomQuote({ category: 'dev' })
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((quote: string) => { this.quote = quote; });
  }

  constructor(private quoteService: QuoteService) {
    this.locations = [
      {
        "id": 113536,
        "name": "Old Town Square",
        "legalName": "old-town-square",
        "description": "Take a trip back in time with a stroll through Warsaw’s Old Town Square. The square was built with the founding of the city, in the 13th century. Although mostly destroyed during Warsaw Uprising of 1944, the square has been rebuilt in its original architectural styles including Renaissance, Gothic, Baroque, and neoclassical. Today it serves the public as a testament to Warsaw\u0027s rich history, and is filled with cafes, shops, street vendors, and galleries. \u003cbr\u003eAppreciate the 19th century water pumps, and colorful burgher houses, once lived in by the bourgeois of Warsaw, that give a glimpse into the history of the square and its people. Surrounding the square you will find dozens of souvenir and boutique shops as well as some of Warsaw’s top restaurants.\u003cbr\u003eLocated in the eastern side of the square is the Adam Michkiewicz Museum, honoring the 19th century Polish poet. The northern side houses the award winning Museum of Warsaw, which tells the story of Warsaw and beyond through thousands of original artifacts, some dating back to the 14th century. In the center of Old Town Square is Warsaw’s most iconic monument, the Syrenka. Erected in 1855, the bronze mermaid has continued as the city’s symbol to this day. In the winter, an ice skating rink is built, and visitors can rent skates and glide around the statue.  The square is easily accessible by most of the city’s main bus lines.\u003cbr\u003e",
        "descriptionNoHtml": "Take a trip back in time with a stroll through Warsaw’s Old Town Square. The square was built with the founding of the city, in the 13th century. Although mostly destroyed during Warsaw Uprising of 1944, the square has been rebuilt in its original architectural styles including Renaissance, Gothic, Baroque, and neoclassical. Today it serves the public as a testament to Warsaw\u0027s rich history, and is filled with cafes, shops, street vendors, and galleries. Appreciate the 19th century water pumps, and colorful burgher houses, once lived in by the bourgeois of Warsaw, that give a glimpse into the history of the square and its people. Surrounding the square you will find dozens of souvenir and boutique shops as well as some of Warsaw’s top restaurants. Located in the eastern side of the square is the Adam Michkiewicz Museum, honoring the 19th century Polish poet. The northern side houses the award winning Museum of Warsaw, which tells the story of Warsaw and beyond through thousands of original artifacts, some dating back to the 14th century. In the center of Old Town Square is Warsaw’s most iconic monument, the Syrenka. Erected in 1855, the bronze mermaid has continued as the city’s symbol to this day. In the winter, an ice skating rink is built, and visitors can rent skates and glide around the statue. The square is easily accessible by most of the city’s main bus lines.",
        "rating": 5.0,
        "contactInformation": "Address: rynek Starego Miasta, 00-001 Warszawa, Poland",
        "longitude": 52.2497413,
        "latitude": 21.012241700000004,
        "siteTypeList": [
          {
            "id": 110424,
            "name": "All Attractions",
            "no": 1,
            "legalName": "all-attractions",
            "imageOpt": {
              "id": 361438,
              "name": "old-town-square_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "All Attractions",
            "cityId": 673
          },
          {
            "id": 110425,
            "name": "Top Attractions",
            "no": 2,
            "legalName": "top-attractions",
            "imageOpt": {
              "id": 361932,
              "name": "_small",
              "creditTo": "VanWiel",
              "creditLink": "https://commons.wikimedia.org/wiki/File:Wilan%C3%B3w_Palace.jpg"
            },
            "hasMenuItem": true,
            "shortTitle": "Top Attractions",
            "cityId": 673
          },
          {
            "id": 110426,
            "name": "Squares",
            "no": 1000,
            "legalName": "squares",
            "hasMenuItem": false,
            "shortTitle": "Squares",
            "cityId": 673
          },
          {
            "id": 110427,
            "name": "Kids Attractions",
            "no": 5,
            "legalName": "kids-attractions",
            "imageOpt": {
              "id": 361446,
              "name": "palace-of-culture-and-science_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "Kids Attractions",
            "cityId": 673
          }
        ],
        "shortTitle": "Old Town Square",
        "subTitle": "",
        "shortDescription": "Close to some great dining options, inspiring museums, and many of the city’s beautiful houses and palaces",
        "imageOpt": {
          "id": 361262,
          "name": "old-town-square_horizontal_small"
        },
        "imageMid": {
          "id": 361261,
          "name": "old-town-square_horizontal_mid"
        },
        "sqrImageOpt": {
          "id": 361259,
          "name": "old-town-square_sqr_small"
        },
        "mainType": {
          "id": 110426,
          "name": "Squares",
          "no": 1000,
          "legalName": "squares",
          "hasMenuItem": false,
          "shortTitle": "Squares",
          "cityId": 673
        },
        "no": 2,
        "mainPaidActivity": {
          "id": 10544216,
          "vendor": "Viator",
          "vendorProductId": "64610P12",
          "title": "PACKAGE TOUR: Royal Castle, Warsaw Old Town Square Market, Palace of Culture",
          "description": "\u003cp\u003eThe package is aimed at people who in a single day would like to see the three most recognizable places in Warsaw:\u003c/p\u003e \n\u003cul\u003e \n \u003cli\u003eRoyal Castle,\u003c/li\u003e \n \u003cli\u003eOld Town inc. Old Town Market Square\u003c/li\u003e \n \u003cli\u003ePalace of Culture and Science\u003c/li\u003e \n\u003c/ul\u003e",
          "descriptionNoHtml": "The package is aimed at people who in a single day would like to see the three most recognizable places in Warsaw: Royal Castle, Old Town inc. Old Town Market Square Palace of Culture and Science",
          "price": "59.33",
          "link": "http://www.viator.com/tours/Warsaw/PACKAGE-TOUR-Royal-Castle-Warsaw-Old-Town-Square-Market-Palace-of-Culture/d528-64610P12?eap\u003dvisitacity-\u003cSUBBRANDEDCODE\u003e-14055\u0026aid\u003dvba14055en",
          "paidActivityCatergoryList": [
            {
              "id": 109130,
              "name": "Tours \u0026 Sightseeing",
              "legalName": "tours--sightseeing",
              "cityId": 673,
              "no": 3,
              "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/6875/SITours/private-tour-warsaw-city-sightseeing-by-retro-fiat-in-warsaw-172304.jpg",
              "vendor": "Viator"
            },
            {
              "id": 112324,
              "name": "All Activities",
              "legalName": "all-activities",
              "cityId": 673,
              "no": 1,
              "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/2916/SITours/city-sightseeing-warsaw-hop-on-hop-off-tour-in-warsaw-534049.jpg",
              "vendor": "Viator"
            },
            {
              "id": 235198,
              "name": "City Packages",
              "legalName": "city-packages",
              "cityId": 673,
              "no": 1000,
              "vendor": "Viator"
            }
          ],
          "no": 1,
          "cityId": 673,
          "averageRating": 0.0,
          "reviewersNum": 0,
          "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/64610/SITours/package-tour-royal-castle-warsaw-old-town-square-market-palace-of-in-warsaw-569617.jpg"
        },
        "parisPassSave": false,
        "parisPassSkipLine": false,
        "cityId": 673,
        "userItinerariesCount": 673,
        "averageVisitDuration": 62,
        "noPerUsers": 1,
        "calculatedRating": 5.0,
        "googlePlaceId": "ChIJM_a7C2bMHkcRsoH4Y3isoR8",
        "openHoursList": []
      },
      {
        "id": 113537,
        "name": "Royal Castle",
        "legalName": "royal-castle",
        "description": "Beginning as a mere tower and several wooden buildings, the Royal Castle has existed in Warsaw since the 14th century. It has been the residence of kings, presidents, and members of parliament. The castle that exists today was built mostly in the 16th century by King Sigismund III, and underwent several renovations under subsequent kings. During World War II, an enormous portion of the castle was completely destroyed but has since been replicated. Visitors can view certain rooms in the castle facilitated by the Castle Museum.\u003cbr/\u003eThe castle tour begins with the kings’ chambers. Opulent furnishings adorn the apartments and paintings of famous Polish moments, as well as maps cover the brightly painted walls.  Further on is the small yet impressive Throne Room. Decorated in regal red and gold, the Throne Room contains hundreds of fragments of the original paneling and stucco work from before its destruction. From there you will be taken to the Houses of Parliament, and then the Great Assembly Hall, which has been restored to its 18th century decor, complete with golden columns, gilded stucco, and crystal chandeliers. “The Disentanglement of Chaos” by Marcello Bacciarelli spans the enormous ceiling.  To learn more about the castle’s restoration visit the exhibition “From Destruction to Reconstruction.” The exhibition follows the resurrection after WWII, from a pile of rubble to the grand palace that stands today.\u003cbr/\u003eThe Royal Castle is located in the southern part of the Old Town in the heart of Warsaw and is easily accessible by bus or tram.\u003cbr/\u003e",
        "descriptionNoHtml": "Beginning as a mere tower and several wooden buildings, the Royal Castle has existed in Warsaw since the 14th century. It has been the residence of kings, presidents, and members of parliament. The castle that exists today was built mostly in the 16th century by King Sigismund III, and underwent several renovations under subsequent kings. During World War II, an enormous portion of the castle was completely destroyed but has since been replicated. Visitors can view certain rooms in the castle facilitated by the Castle Museum. The castle tour begins with the kings’ chambers. Opulent furnishings adorn the apartments and paintings of famous Polish moments, as well as maps cover the brightly painted walls. Further on is the small yet impressive Throne Room. Decorated in regal red and gold, the Throne Room contains hundreds of fragments of the original paneling and stucco work from before its destruction. From there you will be taken to the Houses of Parliament, and then the Great Assembly Hall, which has been restored to its 18th century decor, complete with golden columns, gilded stucco, and crystal chandeliers. “The Disentanglement of Chaos” by Marcello Bacciarelli spans the enormous ceiling. To learn more about the castle’s restoration visit the exhibition “From Destruction to Reconstruction.” The exhibition follows the resurrection after WWII, from a pile of rubble to the grand palace that stands today. The Royal Castle is located in the southern part of the Old Town in the heart of Warsaw and is easily accessible by bus or tram.",
        "rating": 5.0,
        "contactInformation": "Address: plac Zamkowy 4, 00-277 Warszawa, Poland\nPhone Number: 22 355 51 70\nAdmission: 30 Pln\nOpening Hours: Oct-Apr Tue-Sat 10am-4pm, Sun 11am-4pm / May-Sept Mon-Wed 10am-6pm, Thu 10am-8pm, Fri-Sat 10am-6pm, Sun 11am-6pm\nWeb: http://www.zamek-krolewski.pl/",
        "longitude": 52.24797599999999,
        "latitude": 21.015256,
        "siteTypeList": [
          {
            "id": 110424,
            "name": "All Attractions",
            "no": 1,
            "legalName": "all-attractions",
            "imageOpt": {
              "id": 361438,
              "name": "old-town-square_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "All Attractions",
            "cityId": 673
          },
          {
            "id": 110425,
            "name": "Top Attractions",
            "no": 2,
            "legalName": "top-attractions",
            "imageOpt": {
              "id": 361932,
              "name": "_small",
              "creditTo": "VanWiel",
              "creditLink": "https://commons.wikimedia.org/wiki/File:Wilan%C3%B3w_Palace.jpg"
            },
            "hasMenuItem": true,
            "shortTitle": "Top Attractions",
            "cityId": 673
          },
          {
            "id": 110428,
            "name": "Museums",
            "no": 3,
            "legalName": "museums",
            "imageOpt": {
              "id": 361442,
              "name": "royal-castle_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "Museums",
            "cityId": 673
          }
        ],
        "shortTitle": "Royal Castle",
        "subTitle": "",
        "shortDescription": "Home to a museum that showcases Poland’s greatest days including heavily adorned paintings and an impressive throne room",
        "imageOpt": {
          "id": 361267,
          "name": "royal-castle_horizontal_small"
        },
        "imageMid": {
          "id": 361266,
          "name": "royal-castle_horizontal_mid"
        },
        "sqrImageOpt": {
          "id": 361264,
          "name": "royal-castle_sqr_small"
        },
        "mainType": {
          "id": 110428,
          "name": "Museums",
          "no": 3,
          "legalName": "museums",
          "imageOpt": {
            "id": 361442,
            "name": "royal-castle_horizontal_small"
          },
          "hasMenuItem": true,
          "shortTitle": "Museums",
          "cityId": 673
        },
        "no": 3,
        "mainPaidActivity": {
          "id": 10510178,
          "vendor": "Viator",
          "vendorProductId": "64610P2",
          "title": "PACKAGE TOUR: Royal Castle, Old Town, Palace of Culture and Science - Warsaw",
          "description": "\u003cp\u003eThe package is aimed at people who in a single day would like to see the three most recognizable places in Warsaw:\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003eRoyal Castle,\u003c/li\u003e\n\u003cli\u003eOld Town inc. Old Town Market Square \u003c/li\u003e\n\u003cli\u003ePalace of Culture and Science\u003c/li\u003e\n\u003c/ul\u003e",
          "descriptionNoHtml": "The package is aimed at people who in a single day would like to see the three most recognizable places in Warsaw: Royal Castle, Old Town inc. Old Town Market Square  Palace of Culture and Science",
          "price": "85.43",
          "link": "http://www.viator.com/tours/Warsaw/PACKAGE-TOUR-Royal-Castle-Old-Town-Palace-of-Culture-and-Science-Warsaw/d528-64610P2?eap\u003dvisitacity-\u003cSUBBRANDEDCODE\u003e-14055\u0026aid\u003dvba14055en",
          "paidActivityCatergoryList": [
            {
              "id": 112324,
              "name": "All Activities",
              "legalName": "all-activities",
              "cityId": 673,
              "no": 1,
              "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/2916/SITours/city-sightseeing-warsaw-hop-on-hop-off-tour-in-warsaw-534049.jpg",
              "vendor": "Viator"
            },
            {
              "id": 230114,
              "name": "Sightseeing Tickets \u0026 Passes",
              "legalName": "sightseeing-tickets--passes",
              "shortName": "Tickets \u0026 Passes",
              "cityId": 673,
              "no": 50,
              "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/64610/SITours/package-tour-royal-castle-old-town-palace-of-culture-and-science-in-warsaw-556435.jpg",
              "vendor": "Viator"
            },
            {
              "id": 230115,
              "name": "Attraction Tickets",
              "legalName": "attraction-tickets",
              "cityId": 673,
              "no": 51,
              "vendor": "Viator"
            }
          ],
          "no": 1,
          "cityId": 673,
          "averageRating": 0.0,
          "reviewersNum": 0,
          "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/64610/SITours/package-tour-royal-castle-old-town-palace-of-culture-and-science-in-warsaw-556435.jpg"
        },
        "parisPassSave": false,
        "parisPassSkipLine": false,
        "cityId": 673,
        "userItinerariesCount": 666,
        "averageVisitDuration": 79,
        "noPerUsers": 2,
        "calculatedRating": 5.0,
        "googlePlaceId": "ChIJB1RFG2bMHkcRvslJ-0ahGSA",
        "openHoursList": [
          {
            "id": 134108,
            "day": 0,
            "startTime": "Jan 1, 1970 11:00:00 AM",
            "endTime": "Jan 1, 1970 6:00:00 PM"
          },
          {
            "id": 134109,
            "day": 2,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 6:00:00 PM"
          },
          {
            "id": 134110,
            "day": 3,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 6:00:00 PM"
          },
          {
            "id": 134111,
            "day": 4,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 6:00:00 PM"
          },
          {
            "id": 134112,
            "day": 5,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 8:00:00 PM"
          },
          {
            "id": 134113,
            "day": 6,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 6:00:00 PM"
          }
        ],
        "openingHoursText": "Monday: Closed,Tuesday: 10:00 AM – 6:00 PM,Wednesday: 10:00 AM – 6:00 PM,Thursday: 10:00 AM – 6:00 PM,Friday: 10:00 AM – 8:00 PM,Saturday: 10:00 AM – 6:00 PM,Sunday: 11:00 AM – 6:00 PM,"
      },
      {
        "id": 113542,
        "name": "Lazienki Park",
        "legalName": "lazienki-park",
        "description": "Located in the center of Warsaw, Lazienki Park is the city’s largest public park covering 76 hectares. The park was originally built as a bath park in the 17th century, and later it was revamped into the summer residence of King Stanislaw August. Today it serves the public as a venue for music, culture, iconic and historical architecture, and enjoying nature. No matter if you visit during Poland’s snowy winter, or in the blossoming spring, Lazienki Park has something to offer.\u003cbr\u003eLocated within the park are several museums and buildings that are open year round. Begin with a visit to the Palace on the Isle. The palace was once a Baroque bathhouse pavilion before being transformed into the beautiful neoclassical palace it is today. Visitors can walk through the palace’s rooms and enjoy a collection of over 140 Flemish School paintings. Walking south alongside the lake will bring you to the park’s amphitheatre. Built in 1791, on behalf of the anniversary of King Stanislaw August’s coronation, it is an excellent place to relax and appreciate the park\u0027s scenic views. Continue onto Myślewicki Palace, King Stanislaw August’s secondary residence. Visitors can enjoy a variety of statues and paintings placed throughout the well preserved parlor rooms. In the spring, the park is filled with blossoming multicolored tulips and a variety of wildlife including squirrels, ducks, deer, and even peacocks.\u003cbr\u003eEnjoy a cup of tea and a light lunch at Trou Madame, located near the Palace on the Isle, or bring your own food and blanket and enjoy any of the grassy shaded areas the park has to offer.\u003cbr\u003e",
        "descriptionNoHtml": "Located in the center of Warsaw, Lazienki Park is the city’s largest public park covering 76 hectares. The park was originally built as a bath park in the 17th century, and later it was revamped into the summer residence of King Stanislaw August. Today it serves the public as a venue for music, culture, iconic and historical architecture, and enjoying nature. No matter if you visit during Poland’s snowy winter, or in the blossoming spring, Lazienki Park has something to offer. Located within the park are several museums and buildings that are open year round. Begin with a visit to the Palace on the Isle. The palace was once a Baroque bathhouse pavilion before being transformed into the beautiful neoclassical palace it is today. Visitors can walk through the palace’s rooms and enjoy a collection of over 140 Flemish School paintings. Walking south alongside the lake will bring you to the park’s amphitheatre. Built in 1791, on behalf of the anniversary of King Stanislaw August’s coronation, it is an excellent place to relax and appreciate the park\u0027s scenic views. Continue onto Myślewicki Palace, King Stanislaw August’s secondary residence. Visitors can enjoy a variety of statues and paintings placed throughout the well preserved parlor rooms. In the spring, the park is filled with blossoming multicolored tulips and a variety of wildlife including squirrels, ducks, deer, and even peacocks. Enjoy a cup of tea and a light lunch at Trou Madame, located near the Palace on the Isle, or bring your own food and blanket and enjoy any of the grassy shaded areas the park has to offer.",
        "rating": 5.0,
        "contactInformation": "Address: 01-999 Warsaw, Poland\nPhone Number: \nAdmission: \nOpening Hours: \nWeb: http://www.lazienki-krolewskie.pl/",
        "longitude": 52.2151532,
        "latitude": 21.0349992,
        "siteTypeList": [
          {
            "id": 110424,
            "name": "All Attractions",
            "no": 1,
            "legalName": "all-attractions",
            "imageOpt": {
              "id": 361438,
              "name": "old-town-square_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "All Attractions",
            "cityId": 673
          },
          {
            "id": 110425,
            "name": "Top Attractions",
            "no": 2,
            "legalName": "top-attractions",
            "imageOpt": {
              "id": 361932,
              "name": "_small",
              "creditTo": "VanWiel",
              "creditLink": "https://commons.wikimedia.org/wiki/File:Wilan%C3%B3w_Palace.jpg"
            },
            "hasMenuItem": true,
            "shortTitle": "Top Attractions",
            "cityId": 673
          },
          {
            "id": 110427,
            "name": "Kids Attractions",
            "no": 5,
            "legalName": "kids-attractions",
            "imageOpt": {
              "id": 361446,
              "name": "palace-of-culture-and-science_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "Kids Attractions",
            "cityId": 673
          },
          {
            "id": 110430,
            "name": "Parks \u0026 Gardens",
            "no": 1000,
            "legalName": "parks--gardens",
            "hasMenuItem": false,
            "shortTitle": "Parks \u0026 Gardens",
            "cityId": 673
          }
        ],
        "shortTitle": "Lazienki Park",
        "subTitle": "",
        "shortDescription": "Warsaw’s largest park that is dotted with many palaces, pavilions, mansions, lakes, cafes, a classicist amphitheatre, and monuments",
        "imageOpt": {
          "id": 361456,
          "name": "Lazienki Park.jpg_small",
          "creditTo": "",
          "creditLink": ""
        },
        "imageMid": {
          "id": 361455,
          "name": "Lazienki Park.jpg_mid",
          "creditTo": "",
          "creditLink": ""
        },
        "sqrImageOpt": {
          "id": 361458,
          "name": "_small",
          "creditTo": "",
          "creditLink": ""
        },
        "mainType": {
          "id": 110430,
          "name": "Parks \u0026 Gardens",
          "no": 1000,
          "legalName": "parks--gardens",
          "hasMenuItem": false,
          "shortTitle": "Parks \u0026 Gardens",
          "cityId": 673
        },
        "no": 8,
        "mainPaidActivity": {
          "id": 10510180,
          "vendor": "Viator",
          "vendorProductId": "64610P1",
          "title": "PACKAGE TOUR: Lazienki Park, Konstytucji Square, Warsaw Rising Museum - Warsaw",
          "description": "\u003cp\u003eThe package is aimed at people who in a single day would like to see the three most recognizable places in Warsaw:\u003c/p\u003e \n\u003cul\u003e \n \u003cli\u003e \u003cp\u003ethe Łazienki Park,\u003c/p\u003e \u003c/li\u003e \n \u003cli\u003e \u003cp\u003ethe Konstytucji Square,\u003c/p\u003e \u003c/li\u003e \n \u003cli\u003e \u003cp\u003ethe Warsaw Rising Museum.\u003c/p\u003e \u003c/li\u003e \n\u003c/ul\u003e",
          "descriptionNoHtml": "The package is aimed at people who in a single day would like to see the three most recognizable places in Warsaw: the Łazienki Park, the Konstytucji Square, the Warsaw Rising Museum.",
          "price": "85.43",
          "link": "http://www.viator.com/tours/Warsaw/PACKAGE-TOUR-Lazienki-Park-Konstytucji-Square-Warsaw-Rising-Museum-Warsaw/d528-64610P1?eap\u003dvisitacity-\u003cSUBBRANDEDCODE\u003e-14055\u0026aid\u003dvba14055en",
          "paidActivityCatergoryList": [
            {
              "id": 109138,
              "name": "Cultural \u0026 Theme Tours",
              "legalName": "cultural--theme-tours",
              "cityId": 673,
              "no": 4,
              "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/6875/SITours/private-tour-warsaw-s-jewish-heritage-by-retro-fiat-in-warsaw-172308.jpg",
              "vendor": "Viator"
            },
            {
              "id": 109147,
              "name": "Cultural Tours",
              "legalName": "cultural-tours",
              "cityId": 673,
              "no": 6,
              "vendor": "Viator"
            },
            {
              "id": 112324,
              "name": "All Activities",
              "legalName": "all-activities",
              "cityId": 673,
              "no": 1,
              "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/2916/SITours/city-sightseeing-warsaw-hop-on-hop-off-tour-in-warsaw-534049.jpg",
              "vendor": "Viator"
            }
          ],
          "no": 1,
          "cityId": 673,
          "averageRating": 0.0,
          "reviewersNum": 0,
          "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/64610/SITours/package-tour-lazienki-park-konstytucji-square-warsaw-rising-museum-in-warsaw-556399.jpg"
        },
        "parisPassSave": false,
        "parisPassSkipLine": false,
        "cityId": 673,
        "userItinerariesCount": 619,
        "averageVisitDuration": 55,
        "noPerUsers": 3,
        "calculatedRating": 5.0,
        "googlePlaceId": "ChIJ435ebh7NHkcRcaqhXGG2Vow",
        "openHoursList": []
      },
      {
        "id": 113539,
        "name": "Palac Lazienkowski",
        "legalName": "palac-lazienkowski",
        "description": "Palac Lazienkowski is one of Warsaw’s more significant historical sites. Colloquially known as Palace on the Isle, it is located on an artificial island in the lake of the Royal Baths Park. The palace was once a bathhouse before being converted into a royal dwelling in the late 1700s.\u003cbr/\u003eThe palace is an excellent example of Polish Baroque architecture and design. The palace’s two floors are linked by towering Corinthian columns, crowned with statues of mythical figures. Its interior has been maintained in the opulent style once enjoyed by the royalty that once lived here.\u003cbr/\u003eTo view the palace’s interior, visit the Palac Lazienkowski museum. The museum allows you access through most of the palace, including King Stanisław Augustus’ personal Chambers and private apartments. Visitors will get to see the King’s main reception room, the royal family’s chapel, bathhouse, and library, all designed and decorated in the neoclassical style. The Picture Gallery includes 6 paintings by the famed Dutch painter Rembrandt, as well as over 140 Flemish style paintings. The museum houses a particularly famous series of portraits portraying the history of King Solomon, with King Stanisław Augustus depicted as the biblical king himself. To get the most out of the museum, take a guided tour with one of the knowledgeable docents. Just be sure to book in advance.\u003cbr/\u003eSpend the rest of your day exploring the picturesque park including the nearby Amphitheatre, Orangery and pavilions. Stop for lunch at the nearby Trou Madame cafe, or enjoy a packed picnic on the grass.\u003cbr/\u003e",
        "descriptionNoHtml": "Palac Lazienkowski is one of Warsaw’s more significant historical sites. Colloquially known as Palace on the Isle, it is located on an artificial island in the lake of the Royal Baths Park. The palace was once a bathhouse before being converted into a royal dwelling in the late 1700s. The palace is an excellent example of Polish Baroque architecture and design. The palace’s two floors are linked by towering Corinthian columns, crowned with statues of mythical figures. Its interior has been maintained in the opulent style once enjoyed by the royalty that once lived here. To view the palace’s interior, visit the Palac Lazienkowski museum. The museum allows you access through most of the palace, including King Stanisław Augustus’ personal Chambers and private apartments. Visitors will get to see the King’s main reception room, the royal family’s chapel, bathhouse, and library, all designed and decorated in the neoclassical style. The Picture Gallery includes 6 paintings by the famed Dutch painter Rembrandt, as well as over 140 Flemish style paintings. The museum houses a particularly famous series of portraits portraying the history of King Solomon, with King Stanisław Augustus depicted as the biblical king himself. To get the most out of the museum, take a guided tour with one of the knowledgeable docents. Just be sure to book in advance. Spend the rest of your day exploring the picturesque park including the nearby Amphitheatre, Orangery and pavilions. Stop for lunch at the nearby Trou Madame cafe, or enjoy a packed picnic on the grass.",
        "rating": 5.0,
        "contactInformation": "Address: Agrykoli 1, 00-460 Warszawa, Poland\nPhone Number: 22 506 00 28\nAdmission: 25 Pln\nOpening Hours: Mon 10am-2pm, Tue-SUn 10am-6pm\nWeb: http://www.lazienki-krolewskie.pl/",
        "longitude": 52.2150475,
        "latitude": 21.035814,
        "siteTypeList": [
          {
            "id": 110424,
            "name": "All Attractions",
            "no": 1,
            "legalName": "all-attractions",
            "imageOpt": {
              "id": 361438,
              "name": "old-town-square_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "All Attractions",
            "cityId": 673
          },
          {
            "id": 110425,
            "name": "Top Attractions",
            "no": 2,
            "legalName": "top-attractions",
            "imageOpt": {
              "id": 361932,
              "name": "_small",
              "creditTo": "VanWiel",
              "creditLink": "https://commons.wikimedia.org/wiki/File:Wilan%C3%B3w_Palace.jpg"
            },
            "hasMenuItem": true,
            "shortTitle": "Top Attractions",
            "cityId": 673
          },
          {
            "id": 110428,
            "name": "Museums",
            "no": 3,
            "legalName": "museums",
            "imageOpt": {
              "id": 361442,
              "name": "royal-castle_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "Museums",
            "cityId": 673
          }
        ],
        "shortTitle": "Palac Lazienkowski",
        "subTitle": "",
        "shortDescription": "A museum that allows visitors to travel back in time to the period of the Saxon kings",
        "imageOpt": {
          "id": 361277,
          "name": "palac-lazienkowski_horizontal_small"
        },
        "imageMid": {
          "id": 361276,
          "name": "palac-lazienkowski_horizontal_mid"
        },
        "sqrImageOpt": {
          "id": 361274,
          "name": "palac-lazienkowski_sqr_small"
        },
        "mainType": {
          "id": 110428,
          "name": "Museums",
          "no": 3,
          "legalName": "museums",
          "imageOpt": {
            "id": 361442,
            "name": "royal-castle_horizontal_small"
          },
          "hasMenuItem": true,
          "shortTitle": "Museums",
          "cityId": 673
        },
        "no": 5,
        "parisPassSave": false,
        "parisPassSkipLine": false,
        "cityId": 673,
        "userItinerariesCount": 607,
        "averageVisitDuration": 92,
        "noPerUsers": 4,
        "calculatedRating": 5.0,
        "googlePlaceId": "ChIJP37zjB7NHkcR873Uas0o4bo",
        "openHoursList": [
          {
            "id": 122977,
            "day": 0,
            "startTime": "Jan 1, 1970 9:00:00 AM",
            "endTime": "Jan 1, 1970 5:30:00 PM"
          },
          {
            "id": 122978,
            "day": 1,
            "startTime": "Jan 1, 1970 11:00:00 AM",
            "endTime": "Jan 1, 1970 5:30:00 PM"
          },
          {
            "id": 122979,
            "day": 2,
            "startTime": "Jan 1, 1970 9:00:00 AM",
            "endTime": "Jan 1, 1970 5:30:00 PM"
          },
          {
            "id": 122980,
            "day": 3,
            "startTime": "Jan 1, 1970 9:00:00 AM",
            "endTime": "Jan 1, 1970 5:30:00 PM"
          },
          {
            "id": 122981,
            "day": 4,
            "startTime": "Jan 1, 1970 9:00:00 AM",
            "endTime": "Jan 1, 1970 5:30:00 PM"
          },
          {
            "id": 122982,
            "day": 5,
            "startTime": "Jan 1, 1970 9:00:00 AM",
            "endTime": "Jan 1, 1970 5:30:00 PM"
          },
          {
            "id": 122983,
            "day": 6,
            "startTime": "Jan 1, 1970 9:00:00 AM",
            "endTime": "Jan 1, 1970 5:30:00 PM"
          }
        ],
        "openingHoursText": "Monday: 11:00 AM – 5:30 PM,Tuesday: 9:00 AM – 5:30 PM,Wednesday: 9:00 AM – 5:30 PM,Thursday: 9:00 AM – 5:30 PM,Friday: 9:00 AM – 5:30 PM,Saturday: 9:00 AM – 5:30 PM,Sunday: 9:00 AM – 5:30 PM,"
      },
      {
        "id": 113540,
        "name": "Warsaw Uprising Museum",
        "legalName": "warsaw-uprising-museum",
        "description": "Considered to be one of Warsaw’s most popular museums, the Warsaw Uprising Museum connects visitors to the history of those who died defending their beloved city against the German occupation in 1944. Visitors will leave with a deeper understanding of the desperate and difficult decision to resist German occupation, and learn about the consequences of such actions. Experience several floors of interactive and educational exhibits, filled with photographs, films, and personal accounts of the heroic insurgents. \u003cbr\u003eBegin your journey on the ground floor and learn about life in Warsaw under Nazi occupation. With background audio of dive bombers, machine guns, and a thumping heartbeat, you will feel as though you have been transported back to Poland of 1939. View an exact replica of a B24 Liberator bomber, once used to make supply drops to insurgents. Move through the major events of the war while experiencing an interactive covert printing press, and a replica radio station used by the people of Warsaw during the uprising. Continue to the second floor through a mock sewer, and imagine yourself sneaking across German held territory. Reflect upon the striking before and after photographs of iconic Warsaw landmarks after their systematic destruction by the Nazis, and take a moment of quiet reflection in the hall of remembrance. The exhibition ends with “City of Ruins,” a 5 minute film recreating the desolation of Warsaw before its liberation in 1945. \u003cbr\u003eThere are QR-code triggered videos for the hearing impaired at every exhibition, as well as audio guides available upon request. \u003cbr\u003e",
        "descriptionNoHtml": "Considered to be one of Warsaw’s most popular museums, the Warsaw Uprising Museum connects visitors to the history of those who died defending their beloved city against the German occupation in 1944. Visitors will leave with a deeper understanding of the desperate and difficult decision to resist German occupation, and learn about the consequences of such actions. Experience several floors of interactive and educational exhibits, filled with photographs, films, and personal accounts of the heroic insurgents. Begin your journey on the ground floor and learn about life in Warsaw under Nazi occupation. With background audio of dive bombers, machine guns, and a thumping heartbeat, you will feel as though you have been transported back to Poland of 1939. View an exact replica of a B24 Liberator bomber, once used to make supply drops to insurgents. Move through the major events of the war while experiencing an interactive covert printing press, and a replica radio station used by the people of Warsaw during the uprising. Continue to the second floor through a mock sewer, and imagine yourself sneaking across German held territory. Reflect upon the striking before and after photographs of iconic Warsaw landmarks after their systematic destruction by the Nazis, and take a moment of quiet reflection in the hall of remembrance. The exhibition ends with “City of Ruins,” a 5 minute film recreating the desolation of Warsaw before its liberation in 1945. There are QR-code triggered videos for the hearing impaired at every exhibition, as well as audio guides available upon request.",
        "rating": 5.0,
        "contactInformation": "Address: Grzybowska 79, 00-844 Warszawa, Poland\nPhone Number: 22 539 79 05\nWebsite: http://1944.pl/\nOpening Hours: Mon, Wed, Fri 8am-6pm, Thurs 8am-8pm,  Sat-Sun 10am-6pm\nAdmission: 20 PLN",
        "longitude": 52.232324,
        "latitude": 20.98115400000006,
        "siteTypeList": [
          {
            "id": 110424,
            "name": "All Attractions",
            "no": 1,
            "legalName": "all-attractions",
            "imageOpt": {
              "id": 361438,
              "name": "old-town-square_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "All Attractions",
            "cityId": 673
          },
          {
            "id": 110425,
            "name": "Top Attractions",
            "no": 2,
            "legalName": "top-attractions",
            "imageOpt": {
              "id": 361932,
              "name": "_small",
              "creditTo": "VanWiel",
              "creditLink": "https://commons.wikimedia.org/wiki/File:Wilan%C3%B3w_Palace.jpg"
            },
            "hasMenuItem": true,
            "shortTitle": "Top Attractions",
            "cityId": 673
          },
          {
            "id": 110428,
            "name": "Museums",
            "no": 3,
            "legalName": "museums",
            "imageOpt": {
              "id": 361442,
              "name": "royal-castle_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "Museums",
            "cityId": 673
          }
        ],
        "shortTitle": "Warsaw Uprising Museum",
        "subTitle": "",
        "shortDescription": "Delve deeper into the history of the 1944 uprising through interactive displays",
        "imageOpt": {
          "id": 361481,
          "name": "_small",
          "creditTo": "Halibutt",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Warsaw_Rising_Museum.JPG"
        },
        "imageMid": {
          "id": 361480,
          "name": "_mid",
          "creditTo": "Halibutt",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Warsaw_Rising_Museum.JPG"
        },
        "sqrImageOpt": {
          "id": 361483,
          "name": "_small",
          "creditTo": "Halibutt",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Warsaw_Rising_Museum.JPG"
        },
        "mainType": {
          "id": 110428,
          "name": "Museums",
          "no": 3,
          "legalName": "museums",
          "imageOpt": {
            "id": 361442,
            "name": "royal-castle_horizontal_small"
          },
          "hasMenuItem": true,
          "shortTitle": "Museums",
          "cityId": 673
        },
        "no": 6,
        "mainPaidActivity": {
          "id": 10544217,
          "vendor": "Viator",
          "vendorProductId": "64610P11",
          "title": "Tour Package: Lazienki Park and Warsaw Uprising Museum",
          "description": "\u003cp\u003eThe package is aimed at people who in a single day would like to see the two most recognizable places in Warsaw:\u003c/p\u003e \n\u003cul\u003e \n \u003cli\u003e \u003cp\u003ethe Łazienki Park,\u003c/p\u003e \u003c/li\u003e \n \u003cli\u003e \u003cp\u003ethe Warsaw Uprising Museum.\u003c/p\u003e \u003c/li\u003e \n\u003c/ul\u003e",
          "descriptionNoHtml": "The package is aimed at people who in a single day would like to see the two most recognizable places in Warsaw: the Łazienki Park, the Warsaw Uprising Museum.",
          "price": "59.33",
          "link": "http://www.viator.com/tours/Warsaw/Tour-Package-Lazienki-Park-and-Warsaw-Uprising-Museum/d528-64610P11?eap\u003dvisitacity-\u003cSUBBRANDEDCODE\u003e-14055\u0026aid\u003dvba14055en",
          "paidActivityCatergoryList": [
            {
              "id": 109138,
              "name": "Cultural \u0026 Theme Tours",
              "legalName": "cultural--theme-tours",
              "cityId": 673,
              "no": 4,
              "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/6875/SITours/private-tour-warsaw-s-jewish-heritage-by-retro-fiat-in-warsaw-172308.jpg",
              "vendor": "Viator"
            },
            {
              "id": 109147,
              "name": "Cultural Tours",
              "legalName": "cultural-tours",
              "cityId": 673,
              "no": 6,
              "vendor": "Viator"
            },
            {
              "id": 112324,
              "name": "All Activities",
              "legalName": "all-activities",
              "cityId": 673,
              "no": 1,
              "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/2916/SITours/city-sightseeing-warsaw-hop-on-hop-off-tour-in-warsaw-534049.jpg",
              "vendor": "Viator"
            }
          ],
          "no": 1,
          "cityId": 673,
          "averageRating": 0.0,
          "reviewersNum": 0,
          "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/64610/SITours/tour-package-lazienki-park-and-warsaw-uprising-museum-in-warsaw-569597.jpg"
        },
        "parisPassSave": false,
        "parisPassSkipLine": false,
        "cityId": 673,
        "userItinerariesCount": 569,
        "averageVisitDuration": 91,
        "noPerUsers": 5,
        "calculatedRating": 5.0,
        "googlePlaceId": "ChIJiaL1OYPMHkcRJcZiOrY2hqk",
        "openHoursList": [
          {
            "id": 122984,
            "day": 0,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 6:00:00 PM"
          },
          {
            "id": 122985,
            "day": 1,
            "startTime": "Jan 1, 1970 8:00:00 AM",
            "endTime": "Jan 1, 1970 6:00:00 PM"
          },
          {
            "id": 122986,
            "day": 3,
            "startTime": "Jan 1, 1970 8:00:00 AM",
            "endTime": "Jan 1, 1970 6:00:00 PM"
          },
          {
            "id": 122987,
            "day": 4,
            "startTime": "Jan 1, 1970 8:00:00 AM",
            "endTime": "Jan 1, 1970 8:00:00 PM"
          },
          {
            "id": 122988,
            "day": 5,
            "startTime": "Jan 1, 1970 8:00:00 AM",
            "endTime": "Jan 1, 1970 6:00:00 PM"
          },
          {
            "id": 122989,
            "day": 6,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 6:00:00 PM"
          }
        ],
        "openingHoursText": "Monday: 8:00 AM – 6:00 PM,Tuesday: Closed,Wednesday: 8:00 AM – 6:00 PM,Thursday: 8:00 AM – 8:00 PM,Friday: 8:00 AM – 6:00 PM,Saturday: 10:00 AM – 6:00 PM,Sunday: 10:00 AM – 6:00 PM,"
      },
      {
        "id": 113541,
        "name": "Palace of Culture and Science",
        "legalName": "palace-of-culture-and-science",
        "description": "Commissioned by Joseph Stalin as a “gift of the Soviet people to the Polish nation,” the Palace of Culture and Science is an architectural icon of Warsaw. Built by architect Lew Rudniew, at 778 ft. tall, the tower is the tallest building in Poland. The art-deco style palace services hundreds of companies and institutions including, cinemas, libraries, Collegium Civitas University, swimming pools, and a Congress Hall auditorium, used for conferences and concerts.\u003cbr/\u003eThe most popular tourist attraction of the Palace of Culture and Science is the viewing terrace. Step into an authentic old-style lift, complete with a uniformed lift attendant, and climb 374 ft to the 30th floor. Take a walk around and enjoy the expansive panoramic views of Poland’s capital. From here you can spot some Warsaw landmarks such as the Vistula River and National Stadium. While you are up there, take advantage of the quaint cafe and gift shop. Take a trip back down to the 2nd floor to experience “History Horizon,” a 3D virtual reality tour guide. The application takes you on a 360° virtual tour of Warsaw through the centuries, from the 11th century all the way through until the Warsaw Uprising. \u003cbr/\u003eEnd your day with a visit to one of the many bars, shops, and cinemas located on the ground level. The building is within walking distance of the metro, as well as many more shopping and dining options.\u003cbr/\u003e",
        "descriptionNoHtml": "Commissioned by Joseph Stalin as a “gift of the Soviet people to the Polish nation,” the Palace of Culture and Science is an architectural icon of Warsaw. Built by architect Lew Rudniew, at 778 ft. tall, the tower is the tallest building in Poland. The art-deco style palace services hundreds of companies and institutions including, cinemas, libraries, Collegium Civitas University, swimming pools, and a Congress Hall auditorium, used for conferences and concerts. The most popular tourist attraction of the Palace of Culture and Science is the viewing terrace. Step into an authentic old-style lift, complete with a uniformed lift attendant, and climb 374 ft to the 30th floor. Take a walk around and enjoy the expansive panoramic views of Poland’s capital. From here you can spot some Warsaw landmarks such as the Vistula River and National Stadium. While you are up there, take advantage of the quaint cafe and gift shop. Take a trip back down to the 2nd floor to experience “History Horizon,” a 3D virtual reality tour guide. The application takes you on a 360° virtual tour of Warsaw through the centuries, from the 11th century all the way through until the Warsaw Uprising. End your day with a visit to one of the many bars, shops, and cinemas located on the ground level. The building is within walking distance of the metro, as well as many more shopping and dining options.",
        "rating": 5.0,
        "contactInformation": "Address: plac Defilad 1, 00-901 Warszawa, Poland\nPhone Number: 22 656 76 00\nAdmission: 20 Pln\nOpening Hours: Mon-Thu 10am-8pm, Fri-Sun 10am-11:30pm\nWeb: http://www.pkin.pl/",
        "longitude": 52.231838,
        "latitude": 21.005995,
        "siteTypeList": [
          {
            "id": 110424,
            "name": "All Attractions",
            "no": 1,
            "legalName": "all-attractions",
            "imageOpt": {
              "id": 361438,
              "name": "old-town-square_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "All Attractions",
            "cityId": 673
          },
          {
            "id": 110427,
            "name": "Kids Attractions",
            "no": 5,
            "legalName": "kids-attractions",
            "imageOpt": {
              "id": 361446,
              "name": "palace-of-culture-and-science_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "Kids Attractions",
            "cityId": 673
          },
          {
            "id": 110429,
            "name": "Historic Sites",
            "no": 1000,
            "legalName": "historic-sites",
            "hasMenuItem": false,
            "shortTitle": "Historic Sites",
            "cityId": 673
          }
        ],
        "shortTitle": "Palace of Culture and Science",
        "subTitle": "",
        "shortDescription": "The tallest building in Poland and a center for various offices, scientific institutions, theatres, bars, pubs, museums, and more",
        "imageOpt": {
          "id": 361287,
          "name": "palace-of-culture-and-science_horizontal_small"
        },
        "imageMid": {
          "id": 361286,
          "name": "palace-of-culture-and-science_horizontal_mid"
        },
        "sqrImageOpt": {
          "id": 361284,
          "name": "palace-of-culture-and-science_sqr_small"
        },
        "mainType": {
          "id": 110429,
          "name": "Historic Sites",
          "no": 1000,
          "legalName": "historic-sites",
          "hasMenuItem": false,
          "shortTitle": "Historic Sites",
          "cityId": 673
        },
        "no": 7,
        "mainPaidActivity": {
          "id": 10298722,
          "vendor": "Viator",
          "vendorProductId": "25651P1",
          "title": "Warsaw Palace of Culture and Science Tour",
          "description": "Visit one of the most iconic buildings of Warsaw - the impressive Palace of Culture and Science. You will take a live-guided tour with a young professional who will present you the history of this amazing structure donated to the Poles by the Soviets. Find out more about its architecture, history, check if there are any inhabitants and enjoy the view from the viewing platform on the 30th floor!",
          "descriptionNoHtml": "Visit one of the most iconic buildings of Warsaw - the impressive Palace of Culture and Science. You will take a live-guided tour with a young professional who will present you the history of this amazing structure donated to the Poles by the Soviets. Find out more about its architecture, history, check if there are any inhabitants and enjoy the view from the viewing platform on the 30th floor!",
          "price": "94.92",
          "link": "http://www.viator.com/tours/Warsaw/Warsaw-Palace-of-Culture-and-Science-Tour/d528-25651P1?eap\u003dvisitacity-\u003cSUBBRANDEDCODE\u003e-14055\u0026aid\u003dvba14055en",
          "paidActivityCatergoryList": [
            {
              "id": 109138,
              "name": "Cultural \u0026 Theme Tours",
              "legalName": "cultural--theme-tours",
              "cityId": 673,
              "no": 4,
              "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/6875/SITours/private-tour-warsaw-s-jewish-heritage-by-retro-fiat-in-warsaw-172308.jpg",
              "vendor": "Viator"
            },
            {
              "id": 109147,
              "name": "Cultural Tours",
              "legalName": "cultural-tours",
              "cityId": 673,
              "no": 6,
              "vendor": "Viator"
            },
            {
              "id": 112323,
              "name": "Top Activities",
              "legalName": "top-activities",
              "cityId": 673,
              "no": 2,
              "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/2275/SITours/half-day-city-sightseeing-tour-of-warsaw-in-warsaw-138641.jpg",
              "vendor": "Viator"
            },
            {
              "id": 112324,
              "name": "All Activities",
              "legalName": "all-activities",
              "cityId": 673,
              "no": 1,
              "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/2916/SITours/city-sightseeing-warsaw-hop-on-hop-off-tour-in-warsaw-534049.jpg",
              "vendor": "Viator"
            }
          ],
          "no": 1,
          "cityId": 673,
          "averageRating": 5.0,
          "reviewersNum": 8,
          "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/25651/SITours/warsaw-palace-of-culture-and-science-tour-in-warsaw-560895.jpg"
        },
        "parisPassSave": false,
        "parisPassSkipLine": false,
        "cityId": 673,
        "userItinerariesCount": 541,
        "averageVisitDuration": 61,
        "noPerUsers": 6,
        "calculatedRating": 4.5,
        "googlePlaceId": "ChIJSS5pkozMHkcRwi0fMeV66cI",
        "openHoursList": []
      },
      {
        "id": 113546,
        "name": "St. John\u0027s Archcathedral, Warsaw",
        "legalName": "st-johns-archcathedral-warsaw",
        "description": "Since its construction in the 14th century, St John’s Archcathedral has been a site of paramount historical significance. Many royal coronations, as well as burials have taken place here throughout the centuries. A visit to this historical church engages visitors with Warsaw’s religious past and present.\u003cbr\u003eThe enormous cathedral is a landmark in the narrow and winding streets of Old Town. Although having been destroyed during WWII, the cathedral has since been reconstructed to its full glory. Architects chose to recreate the church’s earlier Gothic style architecture, as opposed to the Baroque style which had existed before its destruction. Begin your experience here by appreciating the cathedral’s towering brick facade. On the outer wall facing Kanonia Street is a piece of the tank that was sent to destroy church with explosives during WWII. Although the interior was almost completely destroyed, several valuable artifacts managed to survive, including the 16th-century wooden crucifix still hangs there today. Stained glass windows line the interior, depicting significant events in Polish history. \u003cbr\u003eVisit the tombs of Poland’s last king, Stanisław August Poniatowski, the country’s first president, Gabriel Narutowicz, as well as several Mazovian knights who have all been laid to rest in the cathedral’s crypts. A covered walkway connects the church to the Royal Castle. Organ recitals are often held on the church’s huge pipe organ, filling the cathedral with stirring music.\u003cbr\u003eOpen daily, St. John’s Archcathedral is still an active place of worship for Warsaw Catholics, so please be respectful when visiting. Entrance is not permitted while mass is in session. \u003cbr\u003e",
        "descriptionNoHtml": "Since its construction in the 14th century, St John’s Archcathedral has been a site of paramount historical significance. Many royal coronations, as well as burials have taken place here throughout the centuries. A visit to this historical church engages visitors with Warsaw’s religious past and present. The enormous cathedral is a landmark in the narrow and winding streets of Old Town. Although having been destroyed during WWII, the cathedral has since been reconstructed to its full glory. Architects chose to recreate the church’s earlier Gothic style architecture, as opposed to the Baroque style which had existed before its destruction. Begin your experience here by appreciating the cathedral’s towering brick facade. On the outer wall facing Kanonia Street is a piece of the tank that was sent to destroy church with explosives during WWII. Although the interior was almost completely destroyed, several valuable artifacts managed to survive, including the 16th-century wooden crucifix still hangs there today. Stained glass windows line the interior, depicting significant events in Polish history. Visit the tombs of Poland’s last king, Stanisław August Poniatowski, the country’s first president, Gabriel Narutowicz, as well as several Mazovian knights who have all been laid to rest in the cathedral’s crypts. A covered walkway connects the church to the Royal Castle. Organ recitals are often held on the church’s huge pipe organ, filling the cathedral with stirring music. Open daily, St. John’s Archcathedral is still an active place of worship for Warsaw Catholics, so please be respectful when visiting. Entrance is not permitted while mass is in session.",
        "rating": 5.0,
        "contactInformation": "Address: Kanonia 6, 00-278 Warszawa, Poland\nPhone Number: 22 831 02 89\nAdmission: 5 Pln\nOpening Hours: Mon-Sat 10am-5pm, Sun 3pm-5pm\nWeb: http://www.katedra.mkw.pl/",
        "longitude": 52.2488475,
        "latitude": 21.0136217,
        "siteTypeList": [
          {
            "id": 110424,
            "name": "All Attractions",
            "no": 1,
            "legalName": "all-attractions",
            "imageOpt": {
              "id": 361438,
              "name": "old-town-square_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "All Attractions",
            "cityId": 673
          },
          {
            "id": 110431,
            "name": "Religious Sites",
            "no": 6,
            "legalName": "religious-sites",
            "imageOpt": {
              "id": 361448,
              "name": "st-johns-archcathedral-warsaw_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "Religious Sites",
            "cityId": 673
          }
        ],
        "shortTitle": "St. John\u0027s Archcathedral",
        "subTitle": "",
        "shortDescription": "One of three cathedrals in Warsaw and the mother church of the archdiocese of Warsaw",
        "imageOpt": {
          "id": 361307,
          "name": "st-johns-archcathedral-warsaw_horizontal_small"
        },
        "imageMid": {
          "id": 361306,
          "name": "st-johns-archcathedral-warsaw_horizontal_mid"
        },
        "sqrImageOpt": {
          "id": 361304,
          "name": "st-johns-archcathedral-warsaw_sqr_small"
        },
        "mainType": {
          "id": 110431,
          "name": "Religious Sites",
          "no": 6,
          "legalName": "religious-sites",
          "imageOpt": {
            "id": 361448,
            "name": "st-johns-archcathedral-warsaw_horizontal_small"
          },
          "hasMenuItem": true,
          "shortTitle": "Religious Sites",
          "cityId": 673
        },
        "no": 12,
        "parisPassSave": false,
        "parisPassSkipLine": false,
        "cityId": 673,
        "userItinerariesCount": 529,
        "averageVisitDuration": 42,
        "noPerUsers": 7,
        "calculatedRating": 4.5,
        "googlePlaceId": "ChIJ2xzwsmjMHkcRes5q1ZmuQL0",
        "openHoursList": [
          {
            "id": 123008,
            "day": 0,
            "startTime": "Jan 1, 1970 8:00:00 AM",
            "endTime": "Jan 1, 1970 10:00:00 PM"
          },
          {
            "id": 123009,
            "day": 1,
            "startTime": "Jan 1, 1970 7:00:00 AM",
            "endTime": "Jan 1, 1970 8:00:00 PM"
          },
          {
            "id": 123010,
            "day": 2,
            "startTime": "Jan 1, 1970 7:00:00 AM",
            "endTime": "Jan 1, 1970 8:00:00 PM"
          },
          {
            "id": 123011,
            "day": 3,
            "startTime": "Jan 1, 1970 7:00:00 AM",
            "endTime": "Jan 1, 1970 8:00:00 PM"
          },
          {
            "id": 123012,
            "day": 4,
            "startTime": "Jan 1, 1970 7:00:00 AM",
            "endTime": "Jan 1, 1970 8:00:00 PM"
          },
          {
            "id": 123013,
            "day": 5,
            "startTime": "Jan 1, 1970 7:00:00 AM",
            "endTime": "Jan 1, 1970 8:00:00 PM"
          },
          {
            "id": 123014,
            "day": 6,
            "startTime": "Jan 1, 1970 7:00:00 AM",
            "endTime": "Jan 1, 1970 8:00:00 PM"
          }
        ],
        "openingHoursText": "Monday: 7:00 AM – 8:00 PM,Tuesday: 7:00 AM – 8:00 PM,Wednesday: 7:00 AM – 8:00 PM,Thursday: 7:00 AM – 8:00 PM,Friday: 7:00 AM – 8:00 PM,Saturday: 7:00 AM – 8:00 PM,Sunday: 8:00 AM – 10:00 PM,"
      },
      {
        "id": 113545,
        "name": "Fryderyk Chopin Museum",
        "legalName": "fryderyk-chopin-museum",
        "description": "Created to celebrate the life and legacy of Poland’s most famous composer, the Fryderyk Chopin Museum is an absolute must with any visit to Warsaw. The museum is located in the Ostrogski Palace which in and of itself is a Warsaw landmark. With a mix of classical artifacts as well as interactive digital displays, the museum is the perfect combination between music, high tech, and history.\u003cbr\u003eWith four floors and over 5,000 exhibits, the museum documents Chopin’s life and work extensively. Artifacts range from a lock of hair, the maestro’s elementary school books, and the passport that he used when he entered England. So considerable is the museum\u0027s collection that it even includes the last letter he addressed to his family and flowers from his deathbed. The museum also features a recreation of his Paris apartment, many paintings and sculptures, and an intriguing exhibition on the women in his life.\u003cbr\u003eThe museum implements touchscreens, music games, ebooks, and interactive audio visual displays in a way that really sets it apart. Each visitor is given a micro chipped ticket that they can use to access different exhibits, watch films, hear Chopin’s masterpieces, or read stories all in their native language. With everything you have learned about Chopin in mind, head toward the listening booths on the lower ground level where you can simply close your eyes and enjoy the virtuoso’s symphonies in peace. \u003cbr\u003eThe museum also hosts a quaint cafe and a gift shop which sells music themed books, bags, and CDs of Chopin’s greatest pieces.\u003cbr\u003e",
        "descriptionNoHtml": "Created to celebrate the life and legacy of Poland’s most famous composer, the Fryderyk Chopin Museum is an absolute must with any visit to Warsaw. The museum is located in the Ostrogski Palace which in and of itself is a Warsaw landmark. With a mix of classical artifacts as well as interactive digital displays, the museum is the perfect combination between music, high tech, and history. With four floors and over 5,000 exhibits, the museum documents Chopin’s life and work extensively. Artifacts range from a lock of hair, the maestro’s elementary school books, and the passport that he used when he entered England. So considerable is the museum\u0027s collection that it even includes the last letter he addressed to his family and flowers from his deathbed. The museum also features a recreation of his Paris apartment, many paintings and sculptures, and an intriguing exhibition on the women in his life. The museum implements touchscreens, music games, ebooks, and interactive audio visual displays in a way that really sets it apart. Each visitor is given a micro chipped ticket that they can use to access different exhibits, watch films, hear Chopin’s masterpieces, or read stories all in their native language. With everything you have learned about Chopin in mind, head toward the listening booths on the lower ground level where you can simply close your eyes and enjoy the virtuoso’s symphonies in peace. The museum also hosts a quaint cafe and a gift shop which sells music themed books, bags, and CDs of Chopin’s greatest pieces.",
        "rating": 5.0,
        "contactInformation": "Address: 00-368, Pałac Gnińskich, Okólnik 1, 00-368 Warszawa, Poland\nPhone Number: 22 441 62 51\nAdmission: 22 Pln\nOpening Hours: Tue-Sun 11am-8pm \nWeb: http://chopin.museum/",
        "longitude": 52.23653969999999,
        "latitude": 21.0229345,
        "siteTypeList": [
          {
            "id": 110424,
            "name": "All Attractions",
            "no": 1,
            "legalName": "all-attractions",
            "imageOpt": {
              "id": 361438,
              "name": "old-town-square_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "All Attractions",
            "cityId": 673
          },
          {
            "id": 110428,
            "name": "Museums",
            "no": 3,
            "legalName": "museums",
            "imageOpt": {
              "id": 361442,
              "name": "royal-castle_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "Museums",
            "cityId": 673
          }
        ],
        "shortTitle": "Fryderyk Chopin Museum",
        "subTitle": "",
        "shortDescription": "A high tech museum in Warsaw detailing the life of the classical maestro",
        "imageOpt": {
          "id": 361302,
          "name": "fryderyk-chopin-museum_horizontal_small",
          "creditTo": "Boston9",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Chopin_Museum_in_Warsaw_03.JPG"
        },
        "imageMid": {
          "id": 361301,
          "name": "fryderyk-chopin-museum_horizontal_mid",
          "creditTo": "Boston9",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Chopin_Museum_in_Warsaw_03.JPG"
        },
        "sqrImageOpt": {
          "id": 361299,
          "name": "fryderyk-chopin-museum_sqr_small",
          "creditTo": "Boston9",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Chopin_Museum_in_Warsaw_03.JPG"
        },
        "mainType": {
          "id": 110428,
          "name": "Museums",
          "no": 3,
          "legalName": "museums",
          "imageOpt": {
            "id": 361442,
            "name": "royal-castle_horizontal_small"
          },
          "hasMenuItem": true,
          "shortTitle": "Museums",
          "cityId": 673
        },
        "no": 11,
        "mainPaidActivity": {
          "id": 10298786,
          "vendor": "Viator",
          "vendorProductId": "7785P2",
          "title": "Warsaw 2-Night Heritage Sightseeing Tour",
          "description": "Enjoy this 2-night tour of Warsaw and enjoy visits to the museums of Madame Marie Sklodowska Curie and Fryderyk Chopin.",
          "descriptionNoHtml": "Enjoy this 2-night tour of Warsaw and enjoy visits to the museums of Madame Marie Sklodowska Curie and Fryderyk Chopin.",
          "price": "160.18",
          "link": "http://www.viator.com/tours/Warsaw/Warsaw-2-Night-Heritage-Sightseeing-Tour/d528-7785P2?eap\u003dvisitacity-\u003cSUBBRANDEDCODE\u003e-14055\u0026aid\u003dvba14055en",
          "paidActivityCatergoryList": [
            {
              "id": 109143,
              "name": "Multi-day \u0026 Extended Tours",
              "legalName": "multiday--extended-tours",
              "shortName": "Multi-day Tours",
              "cityId": 673,
              "no": 37,
              "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/7785/SITours/warsaw-2-night-heritage-sightseeing-tour-in-warsaw-236443.jpg",
              "vendor": "Viator"
            },
            {
              "id": 109144,
              "name": "Overnight Tours",
              "legalName": "overnight-tours",
              "cityId": 673,
              "no": 38,
              "vendor": "Viator"
            },
            {
              "id": 112324,
              "name": "All Activities",
              "legalName": "all-activities",
              "cityId": 673,
              "no": 1,
              "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/2916/SITours/city-sightseeing-warsaw-hop-on-hop-off-tour-in-warsaw-534049.jpg",
              "vendor": "Viator"
            }
          ],
          "no": 1,
          "cityId": 673,
          "averageRating": 0.0,
          "reviewersNum": 0,
          "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/7785/SITours/warsaw-2-night-heritage-sightseeing-tour-in-warsaw-236443.jpg"
        },
        "parisPassSave": false,
        "parisPassSkipLine": false,
        "cityId": 673,
        "userItinerariesCount": 440,
        "averageVisitDuration": 86,
        "noPerUsers": 8,
        "calculatedRating": 4.5,
        "googlePlaceId": "ChIJKbVhrFjMHkcRdbMJyIdXC34",
        "openHoursList": [
          {
            "id": 123002,
            "day": 0,
            "startTime": "Jan 1, 1970 11:00:00 AM",
            "endTime": "Jan 1, 1970 8:00:00 PM"
          },
          {
            "id": 123003,
            "day": 2,
            "startTime": "Jan 1, 1970 11:00:00 AM",
            "endTime": "Jan 1, 1970 8:00:00 PM"
          },
          {
            "id": 123004,
            "day": 3,
            "startTime": "Jan 1, 1970 11:00:00 AM",
            "endTime": "Jan 1, 1970 8:00:00 PM"
          },
          {
            "id": 123005,
            "day": 4,
            "startTime": "Jan 1, 1970 11:00:00 AM",
            "endTime": "Jan 1, 1970 8:00:00 PM"
          },
          {
            "id": 123006,
            "day": 5,
            "startTime": "Jan 1, 1970 11:00:00 AM",
            "endTime": "Jan 1, 1970 8:00:00 PM"
          },
          {
            "id": 123007,
            "day": 6,
            "startTime": "Jan 1, 1970 11:00:00 AM",
            "endTime": "Jan 1, 1970 8:00:00 PM"
          }
        ],
        "openingHoursText": "Monday: Closed,Tuesday: 11:00 AM – 8:00 PM,Wednesday: 11:00 AM – 8:00 PM,Thursday: 11:00 AM – 8:00 PM,Friday: 11:00 AM – 8:00 PM,Saturday: 11:00 AM – 8:00 PM,Sunday: 11:00 AM – 8:00 PM,"
      },
      {
        "id": 113547,
        "name": "Museum of the History of Polish Jews",
        "legalName": "museum-of-the-history-of-polish-jews",
        "description": "The Museum of the History of Polish Jews explains a millennium of Polish Jewish history through interesting exhibits, restorations, artifacts, and photographs. Although only recently opened in October 2014, the museum has already received the prestigious European Museum of the Year award. The museum is appropriately located in the Muranów district, which for many years was occupied mainly by the Jewish community, until later becoming the site of the Warsaw Ghetto during WWII. Aside from its exhibitions, the museum also hosts concerts and films.\u003cbr\u003eThe museum tells the story of Polish Jewry beginning in 960, during the reign of King Mieszko. The exhibition charts the arrival of early Jewish traders and diplomats who experienced social and religious freedoms that were not granted to them anywhere else in Europe. The story continues all the way through WWII, when the Jewish people of Poland were wiped out. Although the museum does cover the Holocaust era, that is not its main focus. The museum emphasizes the overarching history of Polish Jewry and their Christian neighbors, and the country that they share. \u003cbr\u003eOne of the more famous exhibits in the museum is an extraordinary reconstruction of the painted ceiling of the lost Gwoździec synagogue. Reconstructed with traditional materials and painted with the signs of zodiac and messianic animals, the ceiling is a call to the culture and art of Eastern European Jewry. \u003cbr\u003eTake advantage of the audio-guides offered, or join one of the museum’s guided tours. Stop for lunch at the kosher cafe.\u003cbr\u003e",
        "descriptionNoHtml": "The Museum of the History of Polish Jews explains a millennium of Polish Jewish history through interesting exhibits, restorations, artifacts, and photographs. Although only recently opened in October 2014, the museum has already received the prestigious European Museum of the Year award. The museum is appropriately located in the Muranów district, which for many years was occupied mainly by the Jewish community, until later becoming the site of the Warsaw Ghetto during WWII. Aside from its exhibitions, the museum also hosts concerts and films. The museum tells the story of Polish Jewry beginning in 960, during the reign of King Mieszko. The exhibition charts the arrival of early Jewish traders and diplomats who experienced social and religious freedoms that were not granted to them anywhere else in Europe. The story continues all the way through WWII, when the Jewish people of Poland were wiped out. Although the museum does cover the Holocaust era, that is not its main focus. The museum emphasizes the overarching history of Polish Jewry and their Christian neighbors, and the country that they share. One of the more famous exhibits in the museum is an extraordinary reconstruction of the painted ceiling of the lost Gwoździec synagogue. Reconstructed with traditional materials and painted with the signs of zodiac and messianic animals, the ceiling is a call to the culture and art of Eastern European Jewry. Take advantage of the audio-guides offered, or join one of the museum’s guided tours. Stop for lunch at the kosher cafe.",
        "rating": 5.0,
        "contactInformation": "Address: Anielewicza 6, 00-157 Warszawa, Poland\nPhone Number: 22 471 03 00\nAdmission: 25 Pln\nOpening Hours: Mon 10am-6pm, Wed 10am-8pm, Thu-Fri 10am-6pm, Sat-Sun 10am-8pm \nWeb: http://www.polin.pl/",
        "longitude": 52.2493743,
        "latitude": 20.993184,
        "siteTypeList": [
          {
            "id": 110424,
            "name": "All Attractions",
            "no": 1,
            "legalName": "all-attractions",
            "imageOpt": {
              "id": 361438,
              "name": "old-town-square_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "All Attractions",
            "cityId": 673
          },
          {
            "id": 110428,
            "name": "Museums",
            "no": 3,
            "legalName": "museums",
            "imageOpt": {
              "id": 361442,
              "name": "royal-castle_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "Museums",
            "cityId": 673
          }
        ],
        "shortTitle": "Museum of the History of Polish Jews",
        "subTitle": "",
        "shortDescription": "Documents the life of the Jewish community for a thousand years leading up to the Holocaust",
        "imageOpt": {
          "id": 361312,
          "name": "museum-of-the-history-of-polish-jews_horizontal_small",
          "creditTo": "Boston9",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Museum_of_the_History_of_Polish_Jews_in_Warsaw_Main_exhibition_Street_03.jpg"
        },
        "imageMid": {
          "id": 361311,
          "name": "museum-of-the-history-of-polish-jews_horizontal_mid",
          "creditTo": "Boston9",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Museum_of_the_History_of_Polish_Jews_in_Warsaw_Main_exhibition_Street_03.jpg"
        },
        "sqrImageOpt": {
          "id": 361309,
          "name": "museum-of-the-history-of-polish-jews_sqr_small",
          "creditTo": "Boston9",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Museum_of_the_History_of_Polish_Jews_in_Warsaw_Main_exhibition_Street_03.jpg"
        },
        "mainType": {
          "id": 110428,
          "name": "Museums",
          "no": 3,
          "legalName": "museums",
          "imageOpt": {
            "id": 361442,
            "name": "royal-castle_horizontal_small"
          },
          "hasMenuItem": true,
          "shortTitle": "Museums",
          "cityId": 673
        },
        "no": 13,
        "mainPaidActivity": {
          "id": 10527437,
          "vendor": "Viator",
          "vendorProductId": "64610P6",
          "title": "TOUR PACKAGE:The Wilanów Royal Palace and The POLIN Museum of the History of Polish Jews",
          "description": "\u003cp\u003eThe package is aimed at people who in a single day would like to see the dwo most recognizable places in Warsaw:\u003c/p\u003e \n\u003cul\u003e \n \u003cli\u003ethe Royal Palace in Wilan\u0026oacute;w and\u003c/li\u003e \n \u003cli\u003ethe POLIN Museum of the History of Polish Jews\u003c/li\u003e \n\u003c/ul\u003e",
          "descriptionNoHtml": "The package is aimed at people who in a single day would like to see the dwo most recognizable places in Warsaw: the Royal Palace in Wilanów and the POLIN Museum of the History of Polish Jews",
          "price": "62.89",
          "link": "http://www.viator.com/tours/Warsaw/TOUR-PACKAGEThe-Wilanow-Royal-Palace-and-The-POLIN-Museum-of-the-History-of-Polish-Jews/d528-64610P6?eap\u003dvisitacity-\u003cSUBBRANDEDCODE\u003e-14055\u0026aid\u003dvba14055en",
          "paidActivityCatergoryList": [
            {
              "id": 109138,
              "name": "Cultural \u0026 Theme Tours",
              "legalName": "cultural--theme-tours",
              "cityId": 673,
              "no": 4,
              "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/6875/SITours/private-tour-warsaw-s-jewish-heritage-by-retro-fiat-in-warsaw-172308.jpg",
              "vendor": "Viator"
            },
            {
              "id": 109139,
              "name": "Historical \u0026 Heritage Tours",
              "legalName": "historical--heritage-tours",
              "cityId": 673,
              "no": 11,
              "vendor": "Viator"
            },
            {
              "id": 112324,
              "name": "All Activities",
              "legalName": "all-activities",
              "cityId": 673,
              "no": 1,
              "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/2916/SITours/city-sightseeing-warsaw-hop-on-hop-off-tour-in-warsaw-534049.jpg",
              "vendor": "Viator"
            }
          ],
          "no": 1,
          "cityId": 673,
          "averageRating": 0.0,
          "reviewersNum": 0,
          "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/64610/SITours/tour-package-the-wilan-w-royal-palace-and-the-polin-museum-of-the-in-warsaw-562323.jpg"
        },
        "parisPassSave": false,
        "parisPassSkipLine": false,
        "cityId": 673,
        "userItinerariesCount": 410,
        "averageVisitDuration": 78,
        "noPerUsers": 9,
        "calculatedRating": 4.5,
        "googlePlaceId": "ChIJc7iVqXnMHkcRsDBEUEPaGuI",
        "openHoursList": [
          {
            "id": 123015,
            "day": 0,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 8:00:00 PM"
          },
          {
            "id": 123016,
            "day": 1,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 6:00:00 PM"
          },
          {
            "id": 123017,
            "day": 3,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 8:00:00 PM"
          },
          {
            "id": 123018,
            "day": 4,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 6:00:00 PM"
          },
          {
            "id": 123019,
            "day": 5,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 6:00:00 PM"
          },
          {
            "id": 123020,
            "day": 6,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 8:00:00 PM"
          }
        ],
        "openingHoursText": "Monday: 10:00 AM – 6:00 PM,Tuesday: Closed,Wednesday: 10:00 AM – 8:00 PM,Thursday: 10:00 AM – 6:00 PM,Friday: 10:00 AM – 6:00 PM,Saturday: 10:00 AM – 8:00 PM,Sunday: 10:00 AM – 8:00 PM,"
      },
      {
        "id": 113538,
        "name": "Wilanów Palace",
        "legalName": "wilanw-palace",
        "description": "Wilanów Palace stands as a testament to the Warsaw’s rich and long standing pre-War history as Poland’s capital. The national Historic Monument which includes the palace, park, and several surrounding buildings represents the height of Polish Baroque and is one of the country\u0027s greatest examples of 17th century architecture. With sprawling gardens, a museum, and a lake with boat rentals, it is easy to spend an entire day exploring and enjoying all that Wilanów Palace has to offer.\u003cbr\u003eBegin with a tour of the Wilanów Palace Museum which will lead you through a majority of the palace’s interior. The right wing of the palace features Baroque furniture and chattels of Poland’s royalty, as well as the Polish Portrait Gallery. Wander through rooms of portraits portraying Poland’s rich and powerful ancestors dating to the 16th through 19th century. Downstairs is the Wilanów Palace Residence which includes a private chapel, residential rooms, suits of armor, and rare artifacts such as a glass grandfather clock dating back to the 18th century. Visitors will be able to tour the private apartment of King Jan III Sobieski and his wife, as well as subsequent owners of the palace. Complete your tour through the geometric and well-manicured palace gardens.\u003cbr\u003eMany concerts and cultural events take place throughout the year in the palace’s park, and in the summer, concerts are hosted in the palace’s Rose Garden. Located nearby on the palace grounds is the Poster Museum.\u003cbr\u003e",
        "descriptionNoHtml": "Wilanów Palace stands as a testament to the Warsaw’s rich and long standing pre-War history as Poland’s capital. The national Historic Monument which includes the palace, park, and several surrounding buildings represents the height of Polish Baroque and is one of the country\u0027s greatest examples of 17th century architecture. With sprawling gardens, a museum, and a lake with boat rentals, it is easy to spend an entire day exploring and enjoying all that Wilanów Palace has to offer. Begin with a tour of the Wilanów Palace Museum which will lead you through a majority of the palace’s interior. The right wing of the palace features Baroque furniture and chattels of Poland’s royalty, as well as the Polish Portrait Gallery. Wander through rooms of portraits portraying Poland’s rich and powerful ancestors dating to the 16th through 19th century. Downstairs is the Wilanów Palace Residence which includes a private chapel, residential rooms, suits of armor, and rare artifacts such as a glass grandfather clock dating back to the 18th century. Visitors will be able to tour the private apartment of King Jan III Sobieski and his wife, as well as subsequent owners of the palace. Complete your tour through the geometric and well-manicured palace gardens. Many concerts and cultural events take place throughout the year in the palace’s park, and in the summer, concerts are hosted in the palace’s Rose Garden. Located nearby on the palace grounds is the Poster Museum.",
        "rating": 5.0,
        "contactInformation": "Address: Stanisława Kostki Potockiego 10/16, 02-958 Warszawa, Poland\nPhone Number: 22 544 27 00\nAdmission: 20 Pln\nOpening Hours: 14 Jan-31 Mar Wed-Mon 9:30am-4pm / 1 Apr-15 Oct Sat-Mon 9:30am-6pm, Tue 9:30am-4pm, Wed 9:30am-6pm, Thu-Fri 9:30am-4pm / 16 Oct-15 Dec Wed-Mon 9:30am-4pm\nWeb: http://www.wilanow-palac.pl/",
        "longitude": 52.1651749,
        "latitude": 21.0905084,
        "siteTypeList": [
          {
            "id": 110424,
            "name": "All Attractions",
            "no": 1,
            "legalName": "all-attractions",
            "imageOpt": {
              "id": 361438,
              "name": "old-town-square_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "All Attractions",
            "cityId": 673
          },
          {
            "id": 110428,
            "name": "Museums",
            "no": 3,
            "legalName": "museums",
            "imageOpt": {
              "id": 361442,
              "name": "royal-castle_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "Museums",
            "cityId": 673
          }
        ],
        "shortTitle": "Wilanów Palace",
        "subTitle": "",
        "shortDescription": "Showcases the country’s royal and artistic heritage through a collection of works of art and objects",
        "imageOpt": {
          "id": 361272,
          "name": "wilanw-palace_horizontal_small",
          "creditTo": "VanWiel",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Wilan%C3%B3w_Palace.jpg"
        },
        "imageMid": {
          "id": 361271,
          "name": "wilanw-palace_horizontal_mid",
          "creditTo": "VanWiel",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Wilan%C3%B3w_Palace.jpg"
        },
        "sqrImageOpt": {
          "id": 361269,
          "name": "wilanw-palace_sqr_small",
          "creditTo": "VanWiel",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Wilan%C3%B3w_Palace.jpg"
        },
        "mainType": {
          "id": 110428,
          "name": "Museums",
          "no": 3,
          "legalName": "museums",
          "imageOpt": {
            "id": 361442,
            "name": "royal-castle_horizontal_small"
          },
          "hasMenuItem": true,
          "shortTitle": "Museums",
          "cityId": 673
        },
        "no": 4,
        "mainPaidActivity": {
          "id": 10527437,
          "vendor": "Viator",
          "vendorProductId": "64610P6",
          "title": "TOUR PACKAGE:The Wilanów Royal Palace and The POLIN Museum of the History of Polish Jews",
          "description": "\u003cp\u003eThe package is aimed at people who in a single day would like to see the dwo most recognizable places in Warsaw:\u003c/p\u003e \n\u003cul\u003e \n \u003cli\u003ethe Royal Palace in Wilan\u0026oacute;w and\u003c/li\u003e \n \u003cli\u003ethe POLIN Museum of the History of Polish Jews\u003c/li\u003e \n\u003c/ul\u003e",
          "descriptionNoHtml": "The package is aimed at people who in a single day would like to see the dwo most recognizable places in Warsaw: the Royal Palace in Wilanów and the POLIN Museum of the History of Polish Jews",
          "price": "62.89",
          "link": "http://www.viator.com/tours/Warsaw/TOUR-PACKAGEThe-Wilanow-Royal-Palace-and-The-POLIN-Museum-of-the-History-of-Polish-Jews/d528-64610P6?eap\u003dvisitacity-\u003cSUBBRANDEDCODE\u003e-14055\u0026aid\u003dvba14055en",
          "paidActivityCatergoryList": [
            {
              "id": 109138,
              "name": "Cultural \u0026 Theme Tours",
              "legalName": "cultural--theme-tours",
              "cityId": 673,
              "no": 4,
              "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/6875/SITours/private-tour-warsaw-s-jewish-heritage-by-retro-fiat-in-warsaw-172308.jpg",
              "vendor": "Viator"
            },
            {
              "id": 109139,
              "name": "Historical \u0026 Heritage Tours",
              "legalName": "historical--heritage-tours",
              "cityId": 673,
              "no": 11,
              "vendor": "Viator"
            },
            {
              "id": 112324,
              "name": "All Activities",
              "legalName": "all-activities",
              "cityId": 673,
              "no": 1,
              "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/2916/SITours/city-sightseeing-warsaw-hop-on-hop-off-tour-in-warsaw-534049.jpg",
              "vendor": "Viator"
            }
          ],
          "no": 1,
          "cityId": 673,
          "averageRating": 0.0,
          "reviewersNum": 0,
          "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/64610/SITours/tour-package-the-wilan-w-royal-palace-and-the-polin-museum-of-the-in-warsaw-562323.jpg"
        },
        "parisPassSave": false,
        "parisPassSkipLine": false,
        "cityId": 673,
        "userItinerariesCount": 386,
        "averageVisitDuration": 95,
        "noPerUsers": 10,
        "calculatedRating": 4.5,
        "googlePlaceId": "ChIJ6xic6UAtGUcRIVWoCEyUf1A",
        "openHoursList": [
          {
            "id": 122971,
            "day": 0,
            "startTime": "Jan 1, 1970 9:30:00 AM",
            "endTime": "Jan 1, 1970 4:00:00 PM"
          },
          {
            "id": 122972,
            "day": 1,
            "startTime": "Jan 1, 1970 9:30:00 AM",
            "endTime": "Jan 1, 1970 4:00:00 PM"
          },
          {
            "id": 122973,
            "day": 3,
            "startTime": "Jan 1, 1970 9:30:00 AM",
            "endTime": "Jan 1, 1970 4:00:00 PM"
          },
          {
            "id": 122974,
            "day": 4,
            "startTime": "Jan 1, 1970 9:30:00 AM",
            "endTime": "Jan 1, 1970 4:00:00 PM"
          },
          {
            "id": 122975,
            "day": 5,
            "startTime": "Jan 1, 1970 9:30:00 AM",
            "endTime": "Jan 1, 1970 4:00:00 PM"
          },
          {
            "id": 122976,
            "day": 6,
            "startTime": "Jan 1, 1970 9:30:00 AM",
            "endTime": "Jan 1, 1970 4:00:00 PM"
          }
        ],
        "openingHoursText": "Monday: 9:30 AM – 4:00 PM,Tuesday: Closed,Wednesday: 9:30 AM – 4:00 PM,Thursday: 9:30 AM – 4:00 PM,Friday: 9:30 AM – 4:00 PM,Saturday: 9:30 AM – 4:00 PM,Sunday: 9:30 AM – 4:00 PM,"
      },
      {
        "id": 113544,
        "name": "The National Museum in Warsaw",
        "legalName": "the-national-museum-in-warsaw",
        "description": "Dating back to 1862, the National Museum of Warsaw is home to thousands of exhibitions and antiquities, both Polish and worldwide. The museum features a multitude of exhibitions ranging from classical to contemporary, including drawings, sculptures, paintings, and photographs.\u003cbr/\u003eThe museum offers many unique exhibitions such as the Faras Gallery - the largest collection in Europe featuring artifacts of the Nubian culture and art from the early-Christian period. From there, make your way to the Medieval Art Gallery which includes goldsmith work, paintings, and unique sculptures from regions historically related to Poland. In the Gallery of the 20th and 21st Century you will find artworks from 1920-1930, works of film, photography and works of famous Polish painters Witkacy, Wladyslaw Strzeminski, and Wilhelm Sasnal. The Gallery of Old Masters houses 15th century Dutch and Flemish paintings, and also includes the largest Polish painting, “Battle of Grunwald” by Jan Metejko. Visitors can also view especially cherished pieces of art that have been reclaimed after being stolen from the museum during World War II such as “Jewish Woman Selling Oranges” by Aleksander Gierymski and “Black Woman” by Anna Bilinska. Rotations of temporary exhibitions are constantly featured as well, borrowing from other reputable museums across Europe and worldwide.\u003cbr/\u003eMake sure to request an audio guide upon arrival, or schedule a guided tour with one of the museum\u0027s docents for an in depth experience of all the museum has to offer.\u003cbr/\u003e",
        "descriptionNoHtml": "Dating back to 1862, the National Museum of Warsaw is home to thousands of exhibitions and antiquities, both Polish and worldwide. The museum features a multitude of exhibitions ranging from classical to contemporary, including drawings, sculptures, paintings, and photographs. The museum offers many unique exhibitions such as the Faras Gallery - the largest collection in Europe featuring artifacts of the Nubian culture and art from the early-Christian period. From there, make your way to the Medieval Art Gallery which includes goldsmith work, paintings, and unique sculptures from regions historically related to Poland. In the Gallery of the 20th and 21st Century you will find artworks from 1920-1930, works of film, photography and works of famous Polish painters Witkacy, Wladyslaw Strzeminski, and Wilhelm Sasnal. The Gallery of Old Masters houses 15th century Dutch and Flemish paintings, and also includes the largest Polish painting, “Battle of Grunwald” by Jan Metejko. Visitors can also view especially cherished pieces of art that have been reclaimed after being stolen from the museum during World War II such as “Jewish Woman Selling Oranges” by Aleksander Gierymski and “Black Woman” by Anna Bilinska. Rotations of temporary exhibitions are constantly featured as well, borrowing from other reputable museums across Europe and worldwide. Make sure to request an audio guide upon arrival, or schedule a guided tour with one of the museum\u0027s docents for an in depth experience of all the museum has to offer.",
        "rating": 5.0,
        "contactInformation": "Address: Aleje Jerozolimskie 3, 00-495 Warszawa, Poland\nPhone Number: 22 621 10 31\nAdmission: 15 Pln\nOpening Hours: Tue-Thu 10am-6pm, Fri 10am-9pm, Sat-Sun 10am-6pm\nWeb: http://www.mnw.art.pl/",
        "longitude": 52.2315987,
        "latitude": 21.0247987,
        "siteTypeList": [
          {
            "id": 110424,
            "name": "All Attractions",
            "no": 1,
            "legalName": "all-attractions",
            "imageOpt": {
              "id": 361438,
              "name": "old-town-square_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "All Attractions",
            "cityId": 673
          },
          {
            "id": 110428,
            "name": "Museums",
            "no": 3,
            "legalName": "museums",
            "imageOpt": {
              "id": 361442,
              "name": "royal-castle_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "Museums",
            "cityId": 673
          }
        ],
        "shortTitle": "The National Museum in Warsaw",
        "subTitle": "",
        "shortDescription": "An impressive collection of around 11,000 pieces of Egyptian, Roman, and Greek art",
        "imageOpt": {
          "id": 361297,
          "name": "the-national-museum-in-warsaw_horizontal_small",
          "creditTo": "Enstropia",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Gallery_of_Ancient_Art_of_the_National_Museum_in_Warsaw_040.JPG"
        },
        "imageMid": {
          "id": 361296,
          "name": "the-national-museum-in-warsaw_horizontal_mid",
          "creditTo": "Enstropia",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Gallery_of_Ancient_Art_of_the_National_Museum_in_Warsaw_040.JPG"
        },
        "sqrImageOpt": {
          "id": 361294,
          "name": "the-national-museum-in-warsaw_sqr_small",
          "creditTo": "Enstropia",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Gallery_of_Ancient_Art_of_the_National_Museum_in_Warsaw_040.JPG"
        },
        "mainType": {
          "id": 110428,
          "name": "Museums",
          "no": 3,
          "legalName": "museums",
          "imageOpt": {
            "id": 361442,
            "name": "royal-castle_horizontal_small"
          },
          "hasMenuItem": true,
          "shortTitle": "Museums",
          "cityId": 673
        },
        "no": 10,
        "mainPaidActivity": {
          "id": 10298714,
          "vendor": "Viator",
          "vendorProductId": "7554P1",
          "title": "Traditional Polish Cooking Class in Warsaw",
          "description": "\u003cp\u003eLearn about traditional Polish cuisine on this 4-hour cooking class in a studio near Warsaw Old Town. Enjoy local meats, cheeses, breads, and dessert, discover the history of Polish cuisine, and cook and eat a hot starter plus two types of pierogi dumplings under the guidance of a professional Polish chef. An optional Polish vodka tasting is available for an additional PLN 49.\u003c/p\u003e",
          "descriptionNoHtml": "Learn about traditional Polish cuisine on this 4-hour cooking class in a studio near Warsaw Old Town. Enjoy local meats, cheeses, breads, and dessert, discover the history of Polish cuisine, and cook and eat a hot starter plus two types of pierogi dumplings under the guidance of a professional Polish chef. An optional Polish vodka tasting is available for an additional PLN 49.",
          "price": "62.5",
          "link": "http://www.viator.com/tours/Warsaw/Traditional-Polish-Cooking-Class-in-Warsaw/d528-7554P1?eap\u003dvisitacity-\u003cSUBBRANDEDCODE\u003e-14055\u0026aid\u003dvba14055en",
          "paidActivityCatergoryList": [
            {
              "id": 109124,
              "name": "Food, Wine \u0026 Nightlife",
              "legalName": "food-wine--nightlife",
              "cityId": 673,
              "no": 12,
              "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/7554/SITours/traditional-polish-cooking-class-in-warsaw-in-warsaw-359470.jpg",
              "vendor": "Viator"
            },
            {
              "id": 109155,
              "name": "Cooking Classes",
              "legalName": "cooking-classes",
              "cityId": 673,
              "no": 17,
              "vendor": "Viator"
            },
            {
              "id": 112323,
              "name": "Top Activities",
              "legalName": "top-activities",
              "cityId": 673,
              "no": 2,
              "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/2275/SITours/half-day-city-sightseeing-tour-of-warsaw-in-warsaw-138641.jpg",
              "vendor": "Viator"
            },
            {
              "id": 112324,
              "name": "All Activities",
              "legalName": "all-activities",
              "cityId": 673,
              "no": 1,
              "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/2916/SITours/city-sightseeing-warsaw-hop-on-hop-off-tour-in-warsaw-534049.jpg",
              "vendor": "Viator"
            }
          ],
          "no": 1,
          "cityId": 673,
          "averageRating": 5.0,
          "reviewersNum": 25,
          "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/7554/SITours/traditional-polish-cooking-class-in-warsaw-in-warsaw-359470.jpg"
        },
        "parisPassSave": false,
        "parisPassSkipLine": false,
        "cityId": 673,
        "userItinerariesCount": 373,
        "averageVisitDuration": 115,
        "noPerUsers": 11,
        "calculatedRating": 4.5,
        "googlePlaceId": "ChIJK6UEcvfMHkcR0iGDJoZsIgc",
        "openHoursList": [
          {
            "id": 122996,
            "day": 0,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 6:00:00 PM"
          },
          {
            "id": 122997,
            "day": 2,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 6:00:00 PM"
          },
          {
            "id": 122998,
            "day": 3,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 6:00:00 PM"
          },
          {
            "id": 122999,
            "day": 4,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 6:00:00 PM"
          },
          {
            "id": 123000,
            "day": 5,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 9:00:00 PM"
          },
          {
            "id": 123001,
            "day": 6,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 6:00:00 PM"
          }
        ],
        "openingHoursText": "Monday: Closed,Tuesday: 10:00 AM – 6:00 PM,Wednesday: 10:00 AM – 6:00 PM,Thursday: 10:00 AM – 6:00 PM,Friday: 10:00 AM – 9:00 PM,Saturday: 10:00 AM – 6:00 PM,Sunday: 10:00 AM – 6:00 PM,"
      },
      {
        "id": 113553,
        "name": "Sigismund\u0027s Column",
        "legalName": "sigismunds-column",
        "description": "You can not get anywhere near Old Town without seeing the towering column of King Sigismund. The monument was erected in 1644 to celebrate the man who made Warsaw the capital of Poland. The column was destroyed during the fighting of World War II, yet the statue of the king atop the column miraculously survived. Today, the original column lies a few feet away in the nearby Royal Castle, while the figure of King Sigismund stands proudly upon the reconstructed monument.\u003cbr/\u003eStanding at 22 meters high, Sigismund’s Column is one of the tallest and oldest secular monuments in northern Europe. King Sigismund is depicted in archaistic armor and in one hand bears a sword to symbolize bravery, and in the other the cross, symbolizing his eagerness to fight for righteousness. According to Warsaw legend, should the King’s sword fall, then disaster will surely fall upon the city. Almost prophetically, this is exactly what happened to the statue during the unfortunate Warsaw Uprising. The Corinthian granite column supporting the King is adorned by four eagles, the national animal of Poland.\u003cbr/\u003eSurrounding the column is Castle Square, full of artists selling wares, stores with hand-made Polish goods, boutiques, museums, and many cafes and eateries. Street performers often congregate underneath the column, giving impromptu concerts to those shopping and eating nearby. \u003cbr/\u003eThe column also serves as a meeting place for several free walking tour groups that will take you throughout Warsaw’s historic Old Town and Castle Square.\u003cbr/\u003e",
        "descriptionNoHtml": "You can not get anywhere near Old Town without seeing the towering column of King Sigismund. The monument was erected in 1644 to celebrate the man who made Warsaw the capital of Poland. The column was destroyed during the fighting of World War II, yet the statue of the king atop the column miraculously survived. Today, the original column lies a few feet away in the nearby Royal Castle, while the figure of King Sigismund stands proudly upon the reconstructed monument. Standing at 22 meters high, Sigismund’s Column is one of the tallest and oldest secular monuments in northern Europe. King Sigismund is depicted in archaistic armor and in one hand bears a sword to symbolize bravery, and in the other the cross, symbolizing his eagerness to fight for righteousness. According to Warsaw legend, should the King’s sword fall, then disaster will surely fall upon the city. Almost prophetically, this is exactly what happened to the statue during the unfortunate Warsaw Uprising. The Corinthian granite column supporting the King is adorned by four eagles, the national animal of Poland. Surrounding the column is Castle Square, full of artists selling wares, stores with hand-made Polish goods, boutiques, museums, and many cafes and eateries. Street performers often congregate underneath the column, giving impromptu concerts to those shopping and eating nearby. The column also serves as a meeting place for several free walking tour groups that will take you throughout Warsaw’s historic Old Town and Castle Square.",
        "rating": 4.0,
        "contactInformation": "Address: plac Zamkowy, 00-001 Warszawa, Poland\nPhone Number: \nAdmission: \nOpening Hours: \nWeb: ",
        "longitude": 52.2472527,
        "latitude": 21.0133777,
        "siteTypeList": [
          {
            "id": 110424,
            "name": "All Attractions",
            "no": 1,
            "legalName": "all-attractions",
            "imageOpt": {
              "id": 361438,
              "name": "old-town-square_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "All Attractions",
            "cityId": 673
          },
          {
            "id": 110433,
            "name": "Landmarks",
            "no": 4,
            "legalName": "landmarks",
            "imageOpt": {
              "id": 361444,
              "name": "sigismunds-column_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "Landmarks",
            "cityId": 673
          }
        ],
        "shortTitle": "Sigismund\u0027s Column",
        "subTitle": "",
        "shortDescription": "A famous column and statue erected to commemorate King Sigismund III Vasa",
        "imageOpt": {
          "id": 361342,
          "name": "sigismunds-column_horizontal_small"
        },
        "imageMid": {
          "id": 361341,
          "name": "sigismunds-column_horizontal_mid"
        },
        "sqrImageOpt": {
          "id": 361339,
          "name": "sigismunds-column_sqr_small"
        },
        "mainType": {
          "id": 110433,
          "name": "Landmarks",
          "no": 4,
          "legalName": "landmarks",
          "imageOpt": {
            "id": 361444,
            "name": "sigismunds-column_horizontal_small"
          },
          "hasMenuItem": true,
          "shortTitle": "Landmarks",
          "cityId": 673
        },
        "no": 19,
        "parisPassSave": false,
        "parisPassSkipLine": false,
        "cityId": 673,
        "userItinerariesCount": 241,
        "averageVisitDuration": 15,
        "noPerUsers": 12,
        "calculatedRating": 4.0,
        "googlePlaceId": "ChIJl0PPDmbMHkcRqKNALL1qbmA",
        "openHoursList": []
      },
      {
        "id": 113549,
        "name": "Polish Army Museum",
        "legalName": "polish-army-museum",
        "description": "Established in 1920, the Polish Army Museum illuminates the history of the Polish military, and thus the history of Poland, through diverse and extensive exhibits. Visitors will see the breadth of the Polish military chronologically, beginning in the Middle Ages, all the way through modern times. \u003cbr\u003eThe museum displays a wide range of artifacts including weapons, uniforms, and artwork. Make your way through halls of firearms and protective weapons, and see the progression of the Polish army’s uniforms from medieval suits of armor, to World War II era ensembles. The museum even includes military equestrian equipment, naval equipment, and exotic arms and weaponry. In the Art Department, visitors have the opportunity to view famous paintings of Polish battle scenes, iconic war graphics and posters, and even soldier’s personal drawings and artwork. One of the most distinguished possessions of the museum are the personal gear of many distinguished military leaders, including Jozef Pilsudski and Hetman Jan Tarnowski. Toward the end of the museum is an exhibition dedicated to Poland’s role in World War II, focusing on the ill-fated Warsaw Uprising. \u003cbr\u003eArguably the best exhibition is located outside – Children in particular will love the outdoor collection of heavy military equipment including an array of authentic tanks, missiles, rocket launchers, and aircrafts.\u003cbr\u003eUnfortunately, English language explanations are scarce throughout most of the exhibits. However, the museum does provide the option of an English speaking guide, just make sure to call and arrange in advance. \u003cbr\u003e",
        "descriptionNoHtml": "Established in 1920, the Polish Army Museum illuminates the history of the Polish military, and thus the history of Poland, through diverse and extensive exhibits. Visitors will see the breadth of the Polish military chronologically, beginning in the Middle Ages, all the way through modern times. The museum displays a wide range of artifacts including weapons, uniforms, and artwork. Make your way through halls of firearms and protective weapons, and see the progression of the Polish army’s uniforms from medieval suits of armor, to World War II era ensembles. The museum even includes military equestrian equipment, naval equipment, and exotic arms and weaponry. In the Art Department, visitors have the opportunity to view famous paintings of Polish battle scenes, iconic war graphics and posters, and even soldier’s personal drawings and artwork. One of the most distinguished possessions of the museum are the personal gear of many distinguished military leaders, including Jozef Pilsudski and Hetman Jan Tarnowski. Toward the end of the museum is an exhibition dedicated to Poland’s role in World War II, focusing on the ill-fated Warsaw Uprising. Arguably the best exhibition is located outside – Children in particular will love the outdoor collection of heavy military equipment including an array of authentic tanks, missiles, rocket launchers, and aircrafts. Unfortunately, English language explanations are scarce throughout most of the exhibits. However, the museum does provide the option of an English speaking guide, just make sure to call and arrange in advance.",
        "rating": 4.0,
        "contactInformation": "Address: Aleje Jerozolimskie 3, 00-495 Warszawa, Poland\nPhone Number: 22 629 52 71\nAdmission: 15 Pln\nOpening Hours: Wed 10am-5pm, Thu 10am-4pm, Fri-Sun 10am-4pm\nWeb: http://www.muzeumwp.pl/",
        "longitude": 52.2321681,
        "latitude": 21.0258878,
        "siteTypeList": [
          {
            "id": 110424,
            "name": "All Attractions",
            "no": 1,
            "legalName": "all-attractions",
            "imageOpt": {
              "id": 361438,
              "name": "old-town-square_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "All Attractions",
            "cityId": 673
          },
          {
            "id": 110427,
            "name": "Kids Attractions",
            "no": 5,
            "legalName": "kids-attractions",
            "imageOpt": {
              "id": 361446,
              "name": "palace-of-culture-and-science_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "Kids Attractions",
            "cityId": 673
          },
          {
            "id": 110428,
            "name": "Museums",
            "no": 3,
            "legalName": "museums",
            "imageOpt": {
              "id": 361442,
              "name": "royal-castle_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "Museums",
            "cityId": 673
          }
        ],
        "shortTitle": "Polish Army Museum",
        "subTitle": "",
        "shortDescription": "A museum showing an impressive range of armored vehicles, aircraft, artillery, oriental arms and armor",
        "imageOpt": {
          "id": 361322,
          "name": "polish-army-museum_horizontal_small",
          "creditTo": "Ferran Cornellà",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Sexton_MK_2_motorized_gun_at_the_Polish_Army_Museum,_Warsaw.jpg"
        },
        "imageMid": {
          "id": 361321,
          "name": "polish-army-museum_horizontal_mid",
          "creditTo": "Ferran Cornellà",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Sexton_MK_2_motorized_gun_at_the_Polish_Army_Museum,_Warsaw.jpg"
        },
        "sqrImageOpt": {
          "id": 361319,
          "name": "polish-army-museum_sqr_small",
          "creditTo": "Ferran Cornellà",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Sexton_MK_2_motorized_gun_at_the_Polish_Army_Museum,_Warsaw.jpg"
        },
        "mainType": {
          "id": 110428,
          "name": "Museums",
          "no": 3,
          "legalName": "museums",
          "imageOpt": {
            "id": 361442,
            "name": "royal-castle_horizontal_small"
          },
          "hasMenuItem": true,
          "shortTitle": "Museums",
          "cityId": 673
        },
        "no": 15,
        "parisPassSave": false,
        "parisPassSkipLine": false,
        "cityId": 673,
        "userItinerariesCount": 239,
        "averageVisitDuration": 85,
        "noPerUsers": 13,
        "calculatedRating": 4.0,
        "googlePlaceId": "ChIJK6UEcvfMHkcRGDePQvvQqow",
        "openHoursList": [
          {
            "id": 145467,
            "day": 0,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 6:00:00 PM"
          },
          {
            "id": 145468,
            "day": 3,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 5:00:00 PM"
          },
          {
            "id": 145469,
            "day": 4,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 4:00:00 PM"
          },
          {
            "id": 145470,
            "day": 5,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 4:00:00 PM"
          },
          {
            "id": 145471,
            "day": 6,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 6:00:00 PM"
          }
        ],
        "openingHoursText": "Monday: Closed,Tuesday: Closed,Wednesday: 10:00 AM – 5:00 PM,Thursday: 10:00 AM – 4:00 PM,Friday: 10:00 AM – 4:00 PM,Saturday: 10:00 AM – 6:00 PM,Sunday: 10:00 AM – 6:00 PM,"
      },
      {
        "id": 113551,
        "name": "St. Anne\u0027s Church, Warsaw",
        "legalName": "st-annes-church-warsaw",
        "description": "St. Anne’s Church is one of the oldest in Warsaw, dating back to the 14th century. Throughout the years, the church has suffered multiple constructional disasters due to war, arson, poor city planning, and was even used as a Nazi internment camp. Each time the ill-fated church was rebuilt in a different style. Today the church takes on a classicist facade that was designed by royal architect Piotr Aigner in 1788. \u003cbr/\u003eThe church’s interior boasted a beautiful Late-Baroque styled design. Featured inside the church is a simple cross, which was an issue of great debate throughout Poland in 2010, regarding the relationship between Polish government and the Catholic Church. In the main altar stands the beloved artwork of the Annunciation to the Virgin Mary, dating back to the late 18th century. Despite the church’s many reconstructions, the organ, pulpit, and main altar are all authentic artifacts, dating back to the 18th century. Short organ concerts usually take place daily at noon. Under the chapel in the church’s crypts, lie the tombs of the Potocki family. Surrounding the church are gardens filled with shrines marking the Stations of the Cross.\u003cbr/\u003eAdjacent to the church is a freestanding bell tower dating to the 16th century. If you can manage the 147-step climb, you will be awarded with unique views of the city and quaint Old Town. St. Anne’s remains an active church, so visitors will not be able to tour on Sundays during services.\u003cbr/\u003e",
        "descriptionNoHtml": "St. Anne’s Church is one of the oldest in Warsaw, dating back to the 14th century. Throughout the years, the church has suffered multiple constructional disasters due to war, arson, poor city planning, and was even used as a Nazi internment camp. Each time the ill-fated church was rebuilt in a different style. Today the church takes on a classicist facade that was designed by royal architect Piotr Aigner in 1788. The church’s interior boasted a beautiful Late-Baroque styled design. Featured inside the church is a simple cross, which was an issue of great debate throughout Poland in 2010, regarding the relationship between Polish government and the Catholic Church. In the main altar stands the beloved artwork of the Annunciation to the Virgin Mary, dating back to the late 18th century. Despite the church’s many reconstructions, the organ, pulpit, and main altar are all authentic artifacts, dating back to the 18th century. Short organ concerts usually take place daily at noon. Under the chapel in the church’s crypts, lie the tombs of the Potocki family. Surrounding the church are gardens filled with shrines marking the Stations of the Cross. Adjacent to the church is a freestanding bell tower dating to the 16th century. If you can manage the 147-step climb, you will be awarded with unique views of the city and quaint Old Town. St. Anne’s remains an active church, so visitors will not be able to tour on Sundays during services.",
        "rating": 4.0,
        "contactInformation": "Address: Krakowskie Przedmieście 68, 00-322 Warszawa, Poland\nPhone Number: 22 826 89 91\nAdmission: \nOpening Hours: \nWeb: http://www.swanna.waw.pl/",
        "longitude": 52.2461649,
        "latitude": 21.0143153,
        "siteTypeList": [
          {
            "id": 110424,
            "name": "All Attractions",
            "no": 1,
            "legalName": "all-attractions",
            "imageOpt": {
              "id": 361438,
              "name": "old-town-square_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "All Attractions",
            "cityId": 673
          },
          {
            "id": 110431,
            "name": "Religious Sites",
            "no": 6,
            "legalName": "religious-sites",
            "imageOpt": {
              "id": 361448,
              "name": "st-johns-archcathedral-warsaw_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "Religious Sites",
            "cityId": 673
          }
        ],
        "shortTitle": "St. Anne\u0027s Church",
        "subTitle": "Kościół Akademicki św. Anny",
        "shortDescription": "One of the oldest buildings in the city with a notable Neoclassical façade dating back to 1788",
        "imageOpt": {
          "id": 361332,
          "name": "st-annes-church-warsaw_horizontal_small"
        },
        "imageMid": {
          "id": 361331,
          "name": "st-annes-church-warsaw_horizontal_mid"
        },
        "sqrImageOpt": {
          "id": 361329,
          "name": "st-annes-church-warsaw_sqr_small"
        },
        "mainType": {
          "id": 110431,
          "name": "Religious Sites",
          "no": 6,
          "legalName": "religious-sites",
          "imageOpt": {
            "id": 361448,
            "name": "st-johns-archcathedral-warsaw_horizontal_small"
          },
          "hasMenuItem": true,
          "shortTitle": "Religious Sites",
          "cityId": 673
        },
        "no": 17,
        "parisPassSave": false,
        "parisPassSkipLine": false,
        "cityId": 673,
        "userItinerariesCount": 220,
        "averageVisitDuration": 39,
        "noPerUsers": 14,
        "calculatedRating": 4.0,
        "googlePlaceId": "ChIJ8ReWQmbMHkcRQTGMVTINvYo",
        "openHoursList": []
      },
      {
        "id": 113552,
        "name": "Zachęta – National Gallery of Art",
        "legalName": "zachta--national-gallery-of-art",
        "description": "Housed in a handsome neo-classical building directly across from the Saxon Gardens, the Zachęta is one of Poland’s leading galleries in contemporary Polish art. The gallery is named for the Polish word for “encouragement,” a reference to the Society for the Encouragement of Fine Arts, the group who created the gallery. Servicing the public since the late 19th century, all of Poland’s most notable contemporary artists have had their works housed here, alongside exhibitions of foreign artists.\u003cbr\u003eThe museum’s main gallery comprises mostly of Polish art from the 20th and 21st century, featuring a broad scope of exhibitions including paintings, sculptures, textiles, and multimedia displays. Visitors will also get the opportunity to see the works of artists such as Pablo Picasso, Max Ernst, Paul Cezanne, and Kim Sooja, just to name a few. A rotation of temporary exhibitions from all over Europe graces the gallery’s walls as well. The Kordegarda Gallery, located off Nowy Swiat Street, is an adjunct gallery to the main museum. The gallery focuses on younger current Polish artists with a more independent approach.\u003cbr\u003eAttached to the main gallery is the Zachęta library, extensively documenting the history of contemporary Polish art through a huge collection of books, magazines, and catalogues. The gallery also hosts many lectures, meet-the-artist events, movie screenings, and concerts throughout the year. A souvenir shop located on the ground floor is filled with catalogues of past and present exhibitions and books on art history.\u003cbr\u003e",
        "descriptionNoHtml": "Housed in a handsome neo-classical building directly across from the Saxon Gardens, the Zachęta is one of Poland’s leading galleries in contemporary Polish art. The gallery is named for the Polish word for “encouragement,” a reference to the Society for the Encouragement of Fine Arts, the group who created the gallery. Servicing the public since the late 19th century, all of Poland’s most notable contemporary artists have had their works housed here, alongside exhibitions of foreign artists. The museum’s main gallery comprises mostly of Polish art from the 20th and 21st century, featuring a broad scope of exhibitions including paintings, sculptures, textiles, and multimedia displays. Visitors will also get the opportunity to see the works of artists such as Pablo Picasso, Max Ernst, Paul Cezanne, and Kim Sooja, just to name a few. A rotation of temporary exhibitions from all over Europe graces the gallery’s walls as well. The Kordegarda Gallery, located off Nowy Swiat Street, is an adjunct gallery to the main museum. The gallery focuses on younger current Polish artists with a more independent approach. Attached to the main gallery is the Zachęta library, extensively documenting the history of contemporary Polish art through a huge collection of books, magazines, and catalogues. The gallery also hosts many lectures, meet-the-artist events, movie screenings, and concerts throughout the year. A souvenir shop located on the ground floor is filled with catalogues of past and present exhibitions and books on art history.",
        "rating": 4.0,
        "contactInformation": "Address: plac Stanisława Małachowskiego 3, 00-916 Warszawa, Poland\nPhone Number: 22 556 96 51\nAdmission: 15 Pln\nOpening Hours: Tue-Sun 12pm-8pm\nWeb: https://zacheta.art.pl/pl",
        "longitude": 52.2393277,
        "latitude": 21.0115228,
        "siteTypeList": [
          {
            "id": 110424,
            "name": "All Attractions",
            "no": 1,
            "legalName": "all-attractions",
            "imageOpt": {
              "id": 361438,
              "name": "old-town-square_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "All Attractions",
            "cityId": 673
          },
          {
            "id": 110428,
            "name": "Museums",
            "no": 3,
            "legalName": "museums",
            "imageOpt": {
              "id": 361442,
              "name": "royal-castle_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "Museums",
            "cityId": 673
          }
        ],
        "shortTitle": "Zachęta – National Gallery of Art",
        "subTitle": "",
        "shortDescription": "A collection of contemporary art by Polish artists including over 700 paintings, sculptures, installations and video works",
        "imageOpt": {
          "id": 361337,
          "name": "zachta--national-gallery-of-art_horizontal_small",
          "creditTo": "Ala z",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Warszawa_Zacheta_2010_(1).JPG"
        },
        "imageMid": {
          "id": 361336,
          "name": "zachta--national-gallery-of-art_horizontal_mid",
          "creditTo": "Ala z",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Warszawa_Zacheta_2010_(1).JPG"
        },
        "sqrImageOpt": {
          "id": 361334,
          "name": "zachta--national-gallery-of-art_sqr_small",
          "creditTo": "Ala z",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Warszawa_Zacheta_2010_(1).JPG"
        },
        "mainType": {
          "id": 110428,
          "name": "Museums",
          "no": 3,
          "legalName": "museums",
          "imageOpt": {
            "id": 361442,
            "name": "royal-castle_horizontal_small"
          },
          "hasMenuItem": true,
          "shortTitle": "Museums",
          "cityId": 673
        },
        "no": 18,
        "parisPassSave": false,
        "parisPassSkipLine": false,
        "cityId": 673,
        "userItinerariesCount": 209,
        "averageVisitDuration": 96,
        "noPerUsers": 15,
        "calculatedRating": 4.0,
        "googlePlaceId": "ChIJVVTZTmDMHkcRnl0OAlZ2awk",
        "openHoursList": [
          {
            "id": 123026,
            "day": 0,
            "startTime": "Jan 1, 1970 12:00:00 PM",
            "endTime": "Jan 1, 1970 8:00:00 PM"
          },
          {
            "id": 123027,
            "day": 2,
            "startTime": "Jan 1, 1970 12:00:00 PM",
            "endTime": "Jan 1, 1970 8:00:00 PM"
          },
          {
            "id": 123028,
            "day": 3,
            "startTime": "Jan 1, 1970 12:00:00 PM",
            "endTime": "Jan 1, 1970 8:00:00 PM"
          },
          {
            "id": 123029,
            "day": 4,
            "startTime": "Jan 1, 1970 12:00:00 PM",
            "endTime": "Jan 1, 1970 8:00:00 PM"
          },
          {
            "id": 123030,
            "day": 5,
            "startTime": "Jan 1, 1970 12:00:00 PM",
            "endTime": "Jan 1, 1970 8:00:00 PM"
          },
          {
            "id": 123031,
            "day": 6,
            "startTime": "Jan 1, 1970 12:00:00 PM",
            "endTime": "Jan 1, 1970 8:00:00 PM"
          }
        ],
        "openingHoursText": "Monday: Closed,Tuesday: 12:00 – 8:00 PM,Wednesday: 12:00 – 8:00 PM,Thursday: 12:00 – 8:00 PM,Friday: 12:00 – 8:00 PM,Saturday: 12:00 – 8:00 PM,Sunday: 12:00 – 8:00 PM,"
      },
      {
        "id": 113548,
        "name": "Museum of Neon",
        "legalName": "museum-of-neon",
        "description": "Across the VIstula River from central Warsaw sits the Museum of Neon, the only one of its kind in Poland. Located in the hip Soho Factory complex surrounded by designers and artists housed in industrial buildings, the museum blends right in. Created by photographer Ilona Karwińska and graphic designer David S. Hill, the museum is dedicated to preserving and celebrating the iconic neon signs of the Communist era.\u003cbr\u003eNeon signs were once incredibly popular in Warsaw as symbols of economic success and cultural openness. The post-communist years saw a rejection of items associated with these ideals, and Warsaw\u0027s iconic neon lights were either cast aside or destroyed. Thanks to the museum, these neon signs have been restored and presented to the public in the context of Warsaw’s rich, yet ever complex history. Visitors will get to see the glowing signs that once graced cinemas, dancehalls, local landmarks, and advertised products. Some of the neon signs have even been designed by Poland’s top designers, artists, and architects. The museum also includes archives of blueprints and the original plans for many of the signs, as well as an exhibition explaining how neon lights work, and why they glow in different colors. Explore the dimly lit complex, illuminated by the colorful and evocative neon displays. The museum is extremely unique and highly recommended for anyone who is interested in Poland’s past or design history.\u003cbr\u003eThe museum is easily accessible by tram, by getting off at the Bliska stop. \u003cbr\u003e",
        "descriptionNoHtml": "Across the VIstula River from central Warsaw sits the Museum of Neon, the only one of its kind in Poland. Located in the hip Soho Factory complex surrounded by designers and artists housed in industrial buildings, the museum blends right in. Created by photographer Ilona Karwińska and graphic designer David S. Hill, the museum is dedicated to preserving and celebrating the iconic neon signs of the Communist era. Neon signs were once incredibly popular in Warsaw as symbols of economic success and cultural openness. The post-communist years saw a rejection of items associated with these ideals, and Warsaw\u0027s iconic neon lights were either cast aside or destroyed. Thanks to the museum, these neon signs have been restored and presented to the public in the context of Warsaw’s rich, yet ever complex history. Visitors will get to see the glowing signs that once graced cinemas, dancehalls, local landmarks, and advertised products. Some of the neon signs have even been designed by Poland’s top designers, artists, and architects. The museum also includes archives of blueprints and the original plans for many of the signs, as well as an exhibition explaining how neon lights work, and why they glow in different colors. Explore the dimly lit complex, illuminated by the colorful and evocative neon displays. The museum is extremely unique and highly recommended for anyone who is interested in Poland’s past or design history. The museum is easily accessible by tram, by getting off at the Bliska stop.",
        "rating": 4.0,
        "contactInformation": "Address: Soho Factory, Mińska 25, Praga District, 03-808 Warsaw, Poland\nPhone Number: 665 711 635\nWebsite: http://www.neonmuzeum.org/",
        "longitude": 52.250137,
        "latitude": 21.062359000000015,
        "siteTypeList": [
          {
            "id": 110424,
            "name": "All Attractions",
            "no": 1,
            "legalName": "all-attractions",
            "imageOpt": {
              "id": 361438,
              "name": "old-town-square_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "All Attractions",
            "cityId": 673
          },
          {
            "id": 110427,
            "name": "Kids Attractions",
            "no": 5,
            "legalName": "kids-attractions",
            "imageOpt": {
              "id": 361446,
              "name": "palace-of-culture-and-science_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "Kids Attractions",
            "cityId": 673
          },
          {
            "id": 110428,
            "name": "Museums",
            "no": 3,
            "legalName": "museums",
            "imageOpt": {
              "id": 361442,
              "name": "royal-castle_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "Museums",
            "cityId": 673
          }
        ],
        "shortTitle": "Museum of Neon",
        "subTitle": "Neon Muzeum",
        "shortDescription": "A unique gallery of vintage neon advertising signs",
        "imageOpt": {
          "id": 361317,
          "name": "museum-of-neon_horizontal_small",
          "creditTo": "Boston9",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Neon_Museum_Warsaw_05.JPG"
        },
        "imageMid": {
          "id": 361316,
          "name": "museum-of-neon_horizontal_mid",
          "creditTo": "Boston9",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Neon_Museum_Warsaw_05.JPG"
        },
        "sqrImageOpt": {
          "id": 361314,
          "name": "museum-of-neon_sqr_small",
          "creditTo": "Boston9",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Neon_Museum_Warsaw_05.JPG"
        },
        "mainType": {
          "id": 110428,
          "name": "Museums",
          "no": 3,
          "legalName": "museums",
          "imageOpt": {
            "id": 361442,
            "name": "royal-castle_horizontal_small"
          },
          "hasMenuItem": true,
          "shortTitle": "Museums",
          "cityId": 673
        },
        "no": 14,
        "mainPaidActivity": {
          "id": 10298733,
          "vendor": "Viator",
          "vendorProductId": "6124P4",
          "title": "Warsaw Small Group Walking Tour Including Entrance Fee to Neon Museum and Local Food and Drink Samples",
          "description": "In Warsaw, it’s not the Wild West — it’s the Wild East! Discover the most fascinating neighbourhood in the city, on the hipster east bank of the Vistula River. Check out post-industrial buildings that have been converted into art spaces, clubs, and cafés.",
          "descriptionNoHtml": "In Warsaw, it’s not the Wild West — it’s the Wild East! Discover the most fascinating neighbourhood in the city, on the hipster east bank of the Vistula River. Check out post-industrial buildings that have been converted into art spaces, clubs, and cafés.",
          "price": "73.09",
          "priceBeforeDiscount": "91.36",
          "link": "http://www.viator.com/tours/Warsaw/Warsaw-Small-Group-Walking-Tour-Including-Entrance-Fee-to-Neon-Museum-and-Local-Food-and-Drink-Samples/d528-6124P4?eap\u003dvisitacity-\u003cSUBBRANDEDCODE\u003e-14055\u0026aid\u003dvba14055en",
          "paidActivityCatergoryList": [
            {
              "id": 109152,
              "name": "Walking \u0026 Biking Tours",
              "legalName": "walking--biking-tours",
              "cityId": 673,
              "no": 27,
              "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/26942/SITours/warsaw-in-a-nutshell-walking-tour-in-warsaw-324191.jpg",
              "vendor": "Viator"
            },
            {
              "id": 109153,
              "name": "Walking Tours",
              "legalName": "walking-tours",
              "cityId": 673,
              "no": 28,
              "vendor": "Viator"
            },
            {
              "id": 112324,
              "name": "All Activities",
              "legalName": "all-activities",
              "cityId": 673,
              "no": 1,
              "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/2916/SITours/city-sightseeing-warsaw-hop-on-hop-off-tour-in-warsaw-534049.jpg",
              "vendor": "Viator"
            }
          ],
          "no": 1,
          "cityId": 673,
          "averageRating": 5.0,
          "reviewersNum": 1,
          "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/6124/SITours/warsaw-small-group-walking-tour-including-entrance-fee-to-neon-museum-in-warsaw-459054.jpg"
        },
        "parisPassSave": false,
        "parisPassSkipLine": false,
        "cityId": 673,
        "userItinerariesCount": 153,
        "averageVisitDuration": 46,
        "noPerUsers": 16,
        "calculatedRating": 4.0,
        "googlePlaceId": "ChIJVVXFfbXNHkcRYARvzX3LLiU",
        "openHoursList": [
          {
            "id": 123719,
            "day": 0,
            "startTime": "Jan 1, 1970 11:00:00 AM",
            "endTime": "Jan 1, 1970 5:00:00 PM"
          },
          {
            "id": 123720,
            "day": 1,
            "startTime": "Jan 1, 1970 12:00:00 PM",
            "endTime": "Jan 1, 1970 5:00:00 PM"
          },
          {
            "id": 123721,
            "day": 3,
            "startTime": "Jan 1, 1970 12:00:00 PM",
            "endTime": "Jan 1, 1970 5:00:00 PM"
          },
          {
            "id": 123722,
            "day": 4,
            "startTime": "Jan 1, 1970 12:00:00 PM",
            "endTime": "Jan 1, 1970 5:00:00 PM"
          },
          {
            "id": 123723,
            "day": 5,
            "startTime": "Jan 1, 1970 12:00:00 PM",
            "endTime": "Jan 1, 1970 5:00:00 PM"
          },
          {
            "id": 123724,
            "day": 6,
            "startTime": "Jan 1, 1970 12:00:00 PM",
            "endTime": "Jan 1, 1970 6:00:00 PM"
          }
        ],
        "openingHoursText": "Monday: 12:00 – 5:00 PM,Tuesday: Closed,Wednesday: 12:00 – 5:00 PM,Thursday: 12:00 – 5:00 PM,Friday: 12:00 – 5:00 PM,Saturday: 12:00 – 6:00 PM,Sunday: 11:00 AM – 5:00 PM,"
      },
      {
        "id": 113558,
        "name": "Mały Powstaniec",
        "legalName": "may-powstaniec",
        "description": "\u003cp class\u003d\"MsoNormal\"\u003e\u003cspan lang\u003d\"EN\" style\u003d\"font-family:\u0026quot;Calibri\u0026quot;,sans-serif;\nmso-fareast-font-family:Calibri;mso-bidi-font-family:Calibri\"\u003eLocated in the\nramparts of Old Town is the Mały Powstaniec. This little bronze statue stands\nto commemorate all the children soldiers who participated and died in the\nefforts of the Warsaw Uprising of 1944.\u003co:p\u003e\u003c/o:p\u003e\u003c/span\u003e\u003c/p\u003e\n\n\u003cp class\u003d\"MsoNormal\"\u003e\u003cspan lang\u003d\"EN\" style\u003d\"font-family:\u0026quot;Calibri\u0026quot;,sans-serif;\nmso-fareast-font-family:Calibri;mso-bidi-font-family:Calibri\"\u003e\u003co:p\u003e\u0026nbsp;\u003c/o:p\u003e\u003c/span\u003e\u003cspan style\u003d\"font-family: Calibri, sans-serif;\"\u003eThe statue\ndepicts a very young boy holding a German submachine gun and wearing a much too\nlarge helmet on his head. He is portrayed with German gear since German\nequipment was captured and used by insurgents during the uprising. In Warsaw\nduring WWII, children were not spared the hardships of everyday life. In fact,\nthe Scouts were an essential part of the Polish resistance against the\noccupation performing tasks such as exchanging information, distributing mail,\ncaring for the sick, and sometimes even becoming soldiers. The statue is\nrumored to be a depiction of a 13 year old boy by the pseudonym “Antek,” who\nwas killed during the uprising.\u003c/span\u003e\u003c/p\u003e\n\n\u003cp class\u003d\"MsoNormal\"\u003e\u003cspan style\u003d\"font-family: Calibri, sans-serif;\"\u003eThe statue was\ncreated in 1983 with funding undertaken by scouts, and was presented by Jerzy\nŚwiderski, a survivor and participant of the Warsaw Uprising. Behind the statue\nis an engraving with the words of a popular song from that time. The engraving\nreads, “Warsaw children will go off to battle, we will, our capital, shed blood\nover every stone.”\u003c/span\u003e\u003c/p\u003e\n\n\u003cp class\u003d\"MsoNormal\"\u003e\u003cspan style\u003d\"font-family: Calibri, sans-serif;\"\u003eCitizens of\nWarsaw are often seen laying flowers and lighting candles at the haunting\nstatue’s feet, especially around the time of the anniversary of the Warsaw\nUprising. Scouts and children of Warsaw gather here to pay tribute to their\nbrave young peers.\u003c/span\u003e\u003c/p\u003e",
        "descriptionNoHtml": "Located in the ramparts of Old Town is the Mały Powstaniec. This little bronze statue stands to commemorate all the children soldiers who participated and died in the efforts of the Warsaw Uprising of 1944.  The statue depicts a very young boy holding a German submachine gun and wearing a much too large helmet on his head. He is portrayed with German gear since German equipment was captured and used by insurgents during the uprising. In Warsaw during WWII, children were not spared the hardships of everyday life. In fact, the Scouts were an essential part of the Polish resistance against the occupation performing tasks such as exchanging information, distributing mail, caring for the sick, and sometimes even becoming soldiers. The statue is rumored to be a depiction of a 13 year old boy by the pseudonym “Antek,” who was killed during the uprising. The statue was created in 1983 with funding undertaken by scouts, and was presented by Jerzy Świderski, a survivor and participant of the Warsaw Uprising. Behind the statue is an engraving with the words of a popular song from that time. The engraving reads, “Warsaw children will go off to battle, we will, our capital, shed blood over every stone.” Citizens of Warsaw are often seen laying flowers and lighting candles at the haunting statue’s feet, especially around the time of the anniversary of the Warsaw Uprising. Scouts and children of Warsaw gather here to pay tribute to their brave young peers.",
        "rating": 4.0,
        "contactInformation": "Address: Podwale, 00-001 Warszawa, Poland\nPhone Number: \nAdmission: \nOpening Hours: \nWeb: ",
        "longitude": 52.24927659999999,
        "latitude": 21.0096204,
        "siteTypeList": [
          {
            "id": 110424,
            "name": "All Attractions",
            "no": 1,
            "legalName": "all-attractions",
            "imageOpt": {
              "id": 361438,
              "name": "old-town-square_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "All Attractions",
            "cityId": 673
          },
          {
            "id": 110433,
            "name": "Landmarks",
            "no": 4,
            "legalName": "landmarks",
            "imageOpt": {
              "id": 361444,
              "name": "sigismunds-column_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "Landmarks",
            "cityId": 673
          }
        ],
        "shortTitle": "Mały Powstaniec",
        "subTitle": "Monument to the Little Insurgent",
        "shortDescription": "A statue designed by Jerzy Jarnuszkiewicz which is dedicated to child soldiers who gave their life during the 1944 Warsaw Uprising",
        "imageOpt": {
          "id": 361367,
          "name": "may-powstaniec_horizontal_small",
          "creditTo": "Kalinka261015",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Pomnik_ma%C5%82ego_powsta%C5%84ca_w_Warszawie.jpg"
        },
        "imageMid": {
          "id": 361366,
          "name": "may-powstaniec_horizontal_mid",
          "creditTo": "Kalinka261015",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Pomnik_ma%C5%82ego_powsta%C5%84ca_w_Warszawie.jpg"
        },
        "sqrImageOpt": {
          "id": 361364,
          "name": "may-powstaniec_sqr_small",
          "creditTo": "Kalinka261015",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Pomnik_ma%C5%82ego_powsta%C5%84ca_w_Warszawie.jpg"
        },
        "mainType": {
          "id": 110433,
          "name": "Landmarks",
          "no": 4,
          "legalName": "landmarks",
          "imageOpt": {
            "id": 361444,
            "name": "sigismunds-column_horizontal_small"
          },
          "hasMenuItem": true,
          "shortTitle": "Landmarks",
          "cityId": 673
        },
        "no": 24,
        "parisPassSave": false,
        "parisPassSkipLine": false,
        "cityId": 673,
        "userItinerariesCount": 104,
        "averageVisitDuration": 14,
        "noPerUsers": 17,
        "calculatedRating": 4.0,
        "googlePlaceId": "ChIJHXahgW_MHkcR39Ie0_ccop8",
        "openHoursList": []
      },
      {
        "id": 113543,
        "name": "Copernicus Science Centre",
        "legalName": "copernicus-science-centre",
        "description": "Located on the banks of the Vistula River, the Copernicus Science Center is where exploration and innovation meet fun. The stunning glass and steel building is Poland’s largest institution of its type, with over 450 interactive exhibits, workshops, and play areas. Visitors are invited to explore the laws of science, mathematics, and anatomy, all while having a blast. At the center, there truly is something for every member of the family.\u003cbr\u003eYou will be delighted as upon entering, you are greeted by the center’s Robothespian - an interactive robot who when prompted will sing and move to various songs. Continue on to the center’s engaging and interactive exhibits including Humans \u0026amp; the Environment, New World on the Move, LightZone, and Roots of Civilization. These thematic areas are especially appropriate for younger children who will have a blast piloting a spaceship, conducting experiments, or trying to race a hippo in the arena. The center includes certain activities specially geared toward teens and adults with exhibits spanning psychology, sociology, biotechnology, and economics in the ReGeneration Zone. Employees called Explainers are stationed throughout the center to answer any scientific questions you may have. The center also hosts the Heavens of Copernicus planetarium. Aside from being a magical place where visitors are immersed in the Milky Way, the planetarium also screens films on astronomy, natural science, and ethnography.\u003cbr\u003eTake a lunch break at the center’s cafeteria, located on the main floor. Nearby is the Science Store, which is an excellent spot for purchasing children’s gifts.\u003cbr\u003e",
        "descriptionNoHtml": "Located on the banks of the Vistula River, the Copernicus Science Center is where exploration and innovation meet fun. The stunning glass and steel building is Poland’s largest institution of its type, with over 450 interactive exhibits, workshops, and play areas. Visitors are invited to explore the laws of science, mathematics, and anatomy, all while having a blast. At the center, there truly is something for every member of the family. You will be delighted as upon entering, you are greeted by the center’s Robothespian - an interactive robot who when prompted will sing and move to various songs. Continue on to the center’s engaging and interactive exhibits including Humans \u0026 the Environment, New World on the Move, LightZone, and Roots of Civilization. These thematic areas are especially appropriate for younger children who will have a blast piloting a spaceship, conducting experiments, or trying to race a hippo in the arena. The center includes certain activities specially geared toward teens and adults with exhibits spanning psychology, sociology, biotechnology, and economics in the ReGeneration Zone. Employees called Explainers are stationed throughout the center to answer any scientific questions you may have. The center also hosts the Heavens of Copernicus planetarium. Aside from being a magical place where visitors are immersed in the Milky Way, the planetarium also screens films on astronomy, natural science, and ethnography. Take a lunch break at the center’s cafeteria, located on the main floor. Nearby is the Science Store, which is an excellent spot for purchasing children’s gifts.",
        "rating": 5.0,
        "contactInformation": "Address: Wybrzeże Kościuszkowskie 20, 00-390 Warszawa, Poland\nPhone Number: 22 596 41 00\nAdmission: 27 Pln\nOpening Hours: Sept-Dec Tue-Fri 9am-6pm, Sat-Sun 10am-7pm / Jan-Mar Tue-Fri 9am-6pm, Sat-Sun 10am-7pm / Apr-Jun Tue-Fri 8am-6pm, Sat-Sun 10am-7pm / Jul-Aug Tue-Sun 10am-7pm\nWeb: http://www.kopernik.org.pl/",
        "longitude": 52.2418552,
        "latitude": 21.0287271,
        "siteTypeList": [
          {
            "id": 110424,
            "name": "All Attractions",
            "no": 1,
            "legalName": "all-attractions",
            "imageOpt": {
              "id": 361438,
              "name": "old-town-square_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "All Attractions",
            "cityId": 673
          },
          {
            "id": 110427,
            "name": "Kids Attractions",
            "no": 5,
            "legalName": "kids-attractions",
            "imageOpt": {
              "id": 361446,
              "name": "palace-of-culture-and-science_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "Kids Attractions",
            "cityId": 673
          },
          {
            "id": 110428,
            "name": "Museums",
            "no": 3,
            "legalName": "museums",
            "imageOpt": {
              "id": 361442,
              "name": "royal-castle_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "Museums",
            "cityId": 673
          }
        ],
        "shortTitle": "Copernicus Science Centre",
        "subTitle": "",
        "shortDescription": "A science museum with over 450 interactive exhibits that allow visitors to discover the laws of science and conduct experiments",
        "imageOpt": {
          "id": 361292,
          "name": "copernicus-science-centre_horizontal_small",
          "creditTo": "Ala z",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Centrum_Nauki_Kopernik_-_Warszawa_(8).jpg"
        },
        "imageMid": {
          "id": 361291,
          "name": "copernicus-science-centre_horizontal_mid",
          "creditTo": "Ala z",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Centrum_Nauki_Kopernik_-_Warszawa_(8).jpg"
        },
        "sqrImageOpt": {
          "id": 361289,
          "name": "copernicus-science-centre_sqr_small",
          "creditTo": "Ala z",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Centrum_Nauki_Kopernik_-_Warszawa_(8).jpg"
        },
        "mainType": {
          "id": 110428,
          "name": "Museums",
          "no": 3,
          "legalName": "museums",
          "imageOpt": {
            "id": 361442,
            "name": "royal-castle_horizontal_small"
          },
          "hasMenuItem": true,
          "shortTitle": "Museums",
          "cityId": 673
        },
        "no": 9,
        "parisPassSave": false,
        "parisPassSkipLine": false,
        "cityId": 673,
        "userItinerariesCount": 86,
        "averageVisitDuration": 105,
        "noPerUsers": 18,
        "calculatedRating": 3.5,
        "googlePlaceId": "ChIJ0cxQolvMHkcRYAlBuLnx1gg",
        "openHoursList": [
          {
            "id": 145472,
            "day": 0,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 7:00:00 PM"
          },
          {
            "id": 145473,
            "day": 2,
            "startTime": "Jan 1, 1970 8:00:00 AM",
            "endTime": "Jan 1, 1970 6:00:00 PM"
          },
          {
            "id": 145474,
            "day": 3,
            "startTime": "Jan 1, 1970 8:00:00 AM",
            "endTime": "Jan 1, 1970 6:00:00 PM"
          },
          {
            "id": 145475,
            "day": 4,
            "startTime": "Jan 1, 1970 8:00:00 AM",
            "endTime": "Jan 1, 1970 6:00:00 PM"
          },
          {
            "id": 145476,
            "day": 5,
            "startTime": "Jan 1, 1970 8:00:00 AM",
            "endTime": "Jan 1, 1970 6:00:00 PM"
          },
          {
            "id": 145477,
            "day": 6,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 7:00:00 PM"
          }
        ],
        "openingHoursText": "Monday: Closed,Tuesday: 8:00 AM – 6:00 PM,Wednesday: 8:00 AM – 6:00 PM,Thursday: 8:00 AM – 6:00 PM,Friday: 8:00 AM – 6:00 PM,Saturday: 10:00 AM – 7:00 PM,Sunday: 10:00 AM – 7:00 PM,"
      },
      {
        "id": 113568,
        "name": "Warsaw Barbican",
        "legalName": "warsaw-barbican",
        "description": "The Warsaw Barbican is a section of the medieval defensive walls that once protected the city. This iconic rotund structure dates back to the mid-16th century, when its construction first began. The Barbican was built by architect Giovanni Battista Venetian. The defensive structure only fulfilled its purpose once, on June 30, 1656, when Polish troops retook the city from the Swedish deluge. Today, it bridges Warsaw’s Old and New Town, and a popular spot for locals and tourist to experience an important landmark of Polish history.\u003cbr\u003eVisit the small yet extremely informative Barbican Museum, where you will learn how military practices have advanced from medieval times until today. The museum also features an exhibition examining medieval torture practices, and the methods once used to extract information from suspects.\u003cbr\u003eA walk along Old Town’s defensive walls will reveal several noteworthy and significant monuments. The first is of Jan Kilinski, the brave shoemaker who led the people of Warsaw against Czarist Russia in the Kosciuszko Uprising of 1794. Dressed in typical late 18th century garb, Kilinski represents Warsaw\u0027s long history of uprising, revolution, and heroic local people. Continue walking to find the monument of the Little Insurgent. A life sized statue depicts a young child, wearing an oversized helmet and brandishing a gun. The monument stands a symbol for the thousands of brave children who stood against the Germans during the Warsaw Uprising of 1944. \u003cbr\u003eContinue from here for a stroll along the nearby Vistula River, or through Barbican to walk the narrow winding alleyways of Old Town.\u003cbr\u003e",
        "descriptionNoHtml": "The Warsaw Barbican is a section of the medieval defensive walls that once protected the city. This iconic rotund structure dates back to the mid-16th century, when its construction first began. The Barbican was built by architect Giovanni Battista Venetian. The defensive structure only fulfilled its purpose once, on June 30, 1656, when Polish troops retook the city from the Swedish deluge. Today, it bridges Warsaw’s Old and New Town, and a popular spot for locals and tourist to experience an important landmark of Polish history. Visit the small yet extremely informative Barbican Museum, where you will learn how military practices have advanced from medieval times until today. The museum also features an exhibition examining medieval torture practices, and the methods once used to extract information from suspects. A walk along Old Town’s defensive walls will reveal several noteworthy and significant monuments. The first is of Jan Kilinski, the brave shoemaker who led the people of Warsaw against Czarist Russia in the Kosciuszko Uprising of 1794. Dressed in typical late 18th century garb, Kilinski represents Warsaw\u0027s long history of uprising, revolution, and heroic local people. Continue walking to find the monument of the Little Insurgent. A life sized statue depicts a young child, wearing an oversized helmet and brandishing a gun. The monument stands a symbol for the thousands of brave children who stood against the Germans during the Warsaw Uprising of 1944. Continue from here for a stroll along the nearby Vistula River, or through Barbican to walk the narrow winding alleyways of Old Town.",
        "rating": 3.0,
        "contactInformation": "Address: Poland, Nowomiejska 15/17, 00-001 Warszawa, Poland\nPhone Number: \nAdmission: \nOpening Hours: \nWeb: ",
        "longitude": 52.2506414,
        "latitude": 21.0100286,
        "siteTypeList": [
          {
            "id": 110424,
            "name": "All Attractions",
            "no": 1,
            "legalName": "all-attractions",
            "imageOpt": {
              "id": 361438,
              "name": "old-town-square_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "All Attractions",
            "cityId": 673
          },
          {
            "id": 110429,
            "name": "Historic Sites",
            "no": 1000,
            "legalName": "historic-sites",
            "hasMenuItem": false,
            "shortTitle": "Historic Sites",
            "cityId": 673
          },
          {
            "id": 110433,
            "name": "Landmarks",
            "no": 4,
            "legalName": "landmarks",
            "imageOpt": {
              "id": 361444,
              "name": "sigismunds-column_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "Landmarks",
            "cityId": 673
          }
        ],
        "shortTitle": "Warsaw Barbican",
        "subTitle": "Barbakan Warszawski",
        "shortDescription": "The Warsaw Barbican is a semicircular fortified outpost that is among the few remaining of medieval defensive walls dating back to 1548",
        "imageOpt": {
          "id": 361407,
          "name": "warsaw-barbican_horizontal_small"
        },
        "imageMid": {
          "id": 361406,
          "name": "warsaw-barbican_horizontal_mid"
        },
        "sqrImageOpt": {
          "id": 361404,
          "name": "warsaw-barbican_sqr_small"
        },
        "mainType": {
          "id": 110429,
          "name": "Historic Sites",
          "no": 1000,
          "legalName": "historic-sites",
          "hasMenuItem": false,
          "shortTitle": "Historic Sites",
          "cityId": 673
        },
        "no": 34,
        "parisPassSave": false,
        "parisPassSkipLine": false,
        "cityId": 673,
        "userItinerariesCount": 73,
        "averageVisitDuration": 42,
        "noPerUsers": 19,
        "calculatedRating": 3.5,
        "googlePlaceId": "ChIJ1_09oG_MHkcRRLW3mlq52Ng",
        "openHoursList": []
      },
      {
        "id": 113550,
        "name": "Warsaw Zoo",
        "legalName": "warsaw-zoo",
        "description": "Established in 1928, the Warsaw Zoo began humbly with only 500 animals. Today, it covers an area of 40 hectares, houses over 12,000 creatures, representing over 5,000 species. The zoo also holds enormous historical significance, with countless Jewish lives saved during World War II by the heroic zookeeper, Jan Zabiński.\u003cbr\u003eYou can expect to see plenty of Polish native animals such as brown bears, otters, and storks feeling right at home in their exhibits as well as many exotic species including giraffes, rhinos, elephants, reptiles, birds, and tropical fish. Ponds and aviaries are scattered throughout the zoo, where birds wander freely. If you are lucky, you may even have one land on your shoulder in the Hall of Free Flight aviary, the only of its kind in all of Poland. Children will be delighted to see chimpanzees swinging from trees, hippos lazing in the water, and sharks swimming in the zoo’s aquarium. Located in the zoo’s center is the Fairytale Zoo, where visitors can experience several animals face to face, and even stroke them or feed them an apple. \u003cbr\u003eWhile visiting the zoo, make sure to stop at Jan and Antonina Zabiński’s villa. At great risk to their personal safety, the couple managed to hide Jewish orphans in their basement, as well as on the zoo grounds during World War II. The villa has been transformed into a museum commemorating the couple’s heroism.\u003cbr\u003eThe zoo’s facilities also include a playground well suited for children of all ages, various restaurants, and several souvenir shops.\u003cbr\u003e",
        "descriptionNoHtml": "Established in 1928, the Warsaw Zoo began humbly with only 500 animals. Today, it covers an area of 40 hectares, houses over 12,000 creatures, representing over 5,000 species. The zoo also holds enormous historical significance, with countless Jewish lives saved during World War II by the heroic zookeeper, Jan Zabiński. You can expect to see plenty of Polish native animals such as brown bears, otters, and storks feeling right at home in their exhibits as well as many exotic species including giraffes, rhinos, elephants, reptiles, birds, and tropical fish. Ponds and aviaries are scattered throughout the zoo, where birds wander freely. If you are lucky, you may even have one land on your shoulder in the Hall of Free Flight aviary, the only of its kind in all of Poland. Children will be delighted to see chimpanzees swinging from trees, hippos lazing in the water, and sharks swimming in the zoo’s aquarium. Located in the zoo’s center is the Fairytale Zoo, where visitors can experience several animals face to face, and even stroke them or feed them an apple. While visiting the zoo, make sure to stop at Jan and Antonina Zabiński’s villa. At great risk to their personal safety, the couple managed to hide Jewish orphans in their basement, as well as on the zoo grounds during World War II. The villa has been transformed into a museum commemorating the couple’s heroism. The zoo’s facilities also include a playground well suited for children of all ages, various restaurants, and several souvenir shops.",
        "rating": 4.0,
        "contactInformation": "Address: Ratuszowa 1/3, 03-461 Warszawa, Poland\nPhone Number: 22 619 40 41\nAdmission: 20 Pln\nOpening Hours: Daily 9am-6pm\nWeb: http://www.zoo.waw.pl/",
        "longitude": 52.2581092,
        "latitude": 21.0215756,
        "siteTypeList": [
          {
            "id": 110424,
            "name": "All Attractions",
            "no": 1,
            "legalName": "all-attractions",
            "imageOpt": {
              "id": 361438,
              "name": "old-town-square_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "All Attractions",
            "cityId": 673
          },
          {
            "id": 110427,
            "name": "Kids Attractions",
            "no": 5,
            "legalName": "kids-attractions",
            "imageOpt": {
              "id": 361446,
              "name": "palace-of-culture-and-science_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "Kids Attractions",
            "cityId": 673
          },
          {
            "id": 110432,
            "name": "Zoos \u0026 Aquariums",
            "no": 1000,
            "legalName": "zoos--aquariums",
            "hasMenuItem": false,
            "shortTitle": "Zoos \u0026 Aquariums",
            "cityId": 673
          }
        ],
        "shortTitle": "Warsaw Zoo",
        "subTitle": "",
        "shortDescription": "Home to a vast collection of over 4,200 animals from more than 500 species",
        "imageOpt": {
          "id": 361327,
          "name": "warsaw-zoo_horizontal_small",
          "creditTo": "Botev",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Warsaw_zoo_elephant_1990.jpg"
        },
        "imageMid": {
          "id": 361326,
          "name": "warsaw-zoo_horizontal_mid",
          "creditTo": "Botev",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Warsaw_zoo_elephant_1990.jpg"
        },
        "sqrImageOpt": {
          "id": 361324,
          "name": "warsaw-zoo_sqr_small",
          "creditTo": "Botev",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Warsaw_zoo_elephant_1990.jpg"
        },
        "mainType": {
          "id": 110432,
          "name": "Zoos \u0026 Aquariums",
          "no": 1000,
          "legalName": "zoos--aquariums",
          "hasMenuItem": false,
          "shortTitle": "Zoos \u0026 Aquariums",
          "cityId": 673
        },
        "no": 16,
        "parisPassSave": false,
        "parisPassSkipLine": false,
        "cityId": 673,
        "userItinerariesCount": 60,
        "averageVisitDuration": 180,
        "noPerUsers": 20,
        "calculatedRating": 3.5,
        "googlePlaceId": "ChIJHUmpu2zMHkcRna4vwLrUdhk",
        "openHoursList": []
      },
      {
        "id": 113561,
        "name": "Presidential Palace, Warsaw",
        "legalName": "presidential-palace-warsaw",
        "description": "Presidential Palace is one of Warsaw’s most famous landmarks. Its construction began in 1643 and has been the home of royal and aristocratic families for generations. Since 1994, the palace has been the residence of Poland\u0027s presidents.\u003cbr/\u003eMany historic moments in Poland’s history have taken place at this esteemed residence, including the signing of the Constitution of May 3, 1791. The palace has had many interesting and important people and organizations dwell in it. For example, there was the one legged Duke, General Zajączek, who forced a team of servants to carry him around in an armchair. It was then passed on to the Viceroys of the Polish Kingdom, whom entertained a rotation of Czars throughout the years. After a horrifying fire and reconstruction, the palace served as the headquarters of Poland’s Agricultural Society. In 1918, the building was appointed as the new home of the Prime Minister and his Council. Unlike the rest of Warsaw, the palace miraculously survived the German occupation and the Warsaw Uprising unscathed. Only a decade later, the Warsaw Pact was signed under its roof. Today, diplomats from all over the world come to meet with the Polish President, who lives here with his family.\u003cbr/\u003ePolitical protesters can often be seen exercising their freedom of speech outside the palace gates. Entrance into the palace by visitors is only permitted if a tour is booked in advance. Either way, the neoclassical palace is beautiful from a distance, and makes for an excellent photo-op.\u003cbr/\u003e",
        "descriptionNoHtml": "Presidential Palace is one of Warsaw’s most famous landmarks. Its construction began in 1643 and has been the home of royal and aristocratic families for generations. Since 1994, the palace has been the residence of Poland\u0027s presidents. Many historic moments in Poland’s history have taken place at this esteemed residence, including the signing of the Constitution of May 3, 1791. The palace has had many interesting and important people and organizations dwell in it. For example, there was the one legged Duke, General Zajączek, who forced a team of servants to carry him around in an armchair. It was then passed on to the Viceroys of the Polish Kingdom, whom entertained a rotation of Czars throughout the years. After a horrifying fire and reconstruction, the palace served as the headquarters of Poland’s Agricultural Society. In 1918, the building was appointed as the new home of the Prime Minister and his Council. Unlike the rest of Warsaw, the palace miraculously survived the German occupation and the Warsaw Uprising unscathed. Only a decade later, the Warsaw Pact was signed under its roof. Today, diplomats from all over the world come to meet with the Polish President, who lives here with his family. Political protesters can often be seen exercising their freedom of speech outside the palace gates. Entrance into the palace by visitors is only permitted if a tour is booked in advance. Either way, the neoclassical palace is beautiful from a distance, and makes for an excellent photo-op.",
        "rating": 3.0,
        "contactInformation": "Address: Krakowskie Przedmieście 48/50, 00-071 Warszawa, Poland\nPhone Number: 22 695 29 00\nAdmission: \nOpening Hours: \nWeb: http://www.prezydent.pl/",
        "longitude": 52.243168,
        "latitude": 21.0166125,
        "siteTypeList": [
          {
            "id": 110424,
            "name": "All Attractions",
            "no": 1,
            "legalName": "all-attractions",
            "imageOpt": {
              "id": 361438,
              "name": "old-town-square_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "All Attractions",
            "cityId": 673
          },
          {
            "id": 110433,
            "name": "Landmarks",
            "no": 4,
            "legalName": "landmarks",
            "imageOpt": {
              "id": 361444,
              "name": "sigismunds-column_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "Landmarks",
            "cityId": 673
          }
        ],
        "shortTitle": "Presidential Palace",
        "subTitle": "",
        "shortDescription": "An elegant classicist building that is the official home of the Polish president since 1994 and seat of the Council of Ministers",
        "imageOpt": {
          "id": 361466,
          "name": "_small",
          "creditTo": "Sfu",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Warszawa_Pa%C5%82ac_Prezydencki_2011.jpg"
        },
        "imageMid": {
          "id": 361465,
          "name": "_mid",
          "creditTo": "Sfu",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Warszawa_Pa%C5%82ac_Prezydencki_2011.jpg"
        },
        "sqrImageOpt": {
          "id": 361468,
          "name": "_small",
          "creditTo": "Sfu",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Warszawa_Pa%C5%82ac_Prezydencki_2011.jpg"
        },
        "mainType": {
          "id": 110433,
          "name": "Landmarks",
          "no": 4,
          "legalName": "landmarks",
          "imageOpt": {
            "id": 361444,
            "name": "sigismunds-column_horizontal_small"
          },
          "hasMenuItem": true,
          "shortTitle": "Landmarks",
          "cityId": 673
        },
        "no": 27,
        "mainPaidActivity": {
          "id": 10298776,
          "vendor": "Viator",
          "vendorProductId": "25300P1",
          "title": "3-Hour, Small-Group Warsaw Segway Tour",
          "description": "\u003cp\u003eHop aboard your own personal Segway for a 3-hour small-group romp through Warsaw\u0027s historic highlights, led by a certified local tour guide. You\u0027ll see the Presidential Palace, Royal Castle, Tomb of the Unknown Soldier, Multimedia Fountain Park, Saxon Garden, St. John\u0027s Cathedral, the site of the Nazi-era Jewish Ghetto, and more.\u003cstrong\u003e\u003cbr /\u003e \u003c/strong\u003e\u003c/p\u003e",
          "descriptionNoHtml": "Hop aboard your own personal Segway for a 3-hour small-group romp through Warsaw\u0027s historic highlights, led by a certified local tour guide. You\u0027ll see the Presidential Palace, Royal Castle, Tomb of the Unknown Soldier, Multimedia Fountain Park, Saxon Garden, St. John\u0027s Cathedral, the site of the Nazi-era Jewish Ghetto, and more.",
          "price": "99.67",
          "link": "http://www.viator.com/tours/Warsaw/3-Hour-Small-Group-Warsaw-Segway-Tour/d528-25300P1?eap\u003dvisitacity-\u003cSUBBRANDEDCODE\u003e-14055\u0026aid\u003dvba14055en",
          "paidActivityCatergoryList": [
            {
              "id": 109130,
              "name": "Tours \u0026 Sightseeing",
              "legalName": "tours--sightseeing",
              "cityId": 673,
              "no": 3,
              "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/6875/SITours/private-tour-warsaw-city-sightseeing-by-retro-fiat-in-warsaw-172304.jpg",
              "vendor": "Viator"
            },
            {
              "id": 112324,
              "name": "All Activities",
              "legalName": "all-activities",
              "cityId": 673,
              "no": 1,
              "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/2916/SITours/city-sightseeing-warsaw-hop-on-hop-off-tour-in-warsaw-534049.jpg",
              "vendor": "Viator"
            },
            {
              "id": 137106,
              "name": "Segway Tours",
              "legalName": "segway-tours",
              "cityId": 673,
              "no": 25,
              "vendor": "Viator"
            }
          ],
          "no": 1,
          "cityId": 673,
          "averageRating": 5.0,
          "reviewersNum": 1,
          "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/25300/SITours/3-hour-small-group-warsaw-segway-tour-in-warsaw-269968.jpg"
        },
        "parisPassSave": false,
        "parisPassSkipLine": false,
        "cityId": 673,
        "userItinerariesCount": 59,
        "averageVisitDuration": 27,
        "noPerUsers": 21,
        "calculatedRating": 3.5,
        "googlePlaceId": "ChIJP2sURGfMHkcR9sYNrY7d1Ck",
        "openHoursList": []
      },
      {
        "id": 113562,
        "name": "Multimedia Fountain Park",
        "legalName": "multimedia-fountain-park",
        "description": "Opened in May 2011, Warsaw’s Multimedia Fountain astounds and delights visitors with its colorful and musical water performances. Built on the site of an untended pond, the 3,000 square meter fountain now represents the height of technology and art. It is only a short walk away from the Old Town, aside the Vistula River.\u003cbr\u003eIt takes 30,000 liters of water, 367 nozzles, and nearly 300 LED reflectors to create the outstanding performances. Streams of water are shot into the air at up to 25 meters, and are used as a screen for visually stunning animations and films. Engineers can program any visuals possible, from Warsaw’s Syrena mermaid swimming through the Vistula, to Polish folk tales. Music from artists such as Lady Gaga, Chopin, or Jean Michel Jarre accompany the performances. The park’s multimedia shows are extremely popular, so it is recommended that you arrive as early as possible to reserve yourself a spot in the viewing terraces. It should be noted that only the shows on the weekends include light and sound. The weekday shows comprise of only waterwork performances.\u003cbr\u003eIn the summer, children play in the nearby Pluskowisko water play area, and in the public playground and fields. Directly adjacent to the park is Fontanna, an Italian cuisine restaurant, as well as several seasonal eateries including ice cream shops, cafes, and food trucks. A free ferry operates next to Fountain Park, taking passengers to the Warsaw Zoo. \u003cbr\u003e",
        "descriptionNoHtml": "Opened in May 2011, Warsaw’s Multimedia Fountain astounds and delights visitors with its colorful and musical water performances. Built on the site of an untended pond, the 3,000 square meter fountain now represents the height of technology and art. It is only a short walk away from the Old Town, aside the Vistula River. It takes 30,000 liters of water, 367 nozzles, and nearly 300 LED reflectors to create the outstanding performances. Streams of water are shot into the air at up to 25 meters, and are used as a screen for visually stunning animations and films. Engineers can program any visuals possible, from Warsaw’s Syrena mermaid swimming through the Vistula, to Polish folk tales. Music from artists such as Lady Gaga, Chopin, or Jean Michel Jarre accompany the performances. The park’s multimedia shows are extremely popular, so it is recommended that you arrive as early as possible to reserve yourself a spot in the viewing terraces. It should be noted that only the shows on the weekends include light and sound. The weekday shows comprise of only waterwork performances. In the summer, children play in the nearby Pluskowisko water play area, and in the public playground and fields. Directly adjacent to the park is Fontanna, an Italian cuisine restaurant, as well as several seasonal eateries including ice cream shops, cafes, and food trucks. A free ferry operates next to Fountain Park, taking passengers to the Warsaw Zoo.",
        "rating": 3.0,
        "contactInformation": "Address: skwer I Dywizji Pancernej, 00-221 Warszawa, Poland\nPhone Number: 22 849 32 86\nAdmission: \nOpening Hours: \nWeb: http://www.parkfontann.pl/",
        "longitude": 52.2542102,
        "latitude": 21.0112982,
        "siteTypeList": [
          {
            "id": 110424,
            "name": "All Attractions",
            "no": 1,
            "legalName": "all-attractions",
            "imageOpt": {
              "id": 361438,
              "name": "old-town-square_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "All Attractions",
            "cityId": 673
          },
          {
            "id": 110427,
            "name": "Kids Attractions",
            "no": 5,
            "legalName": "kids-attractions",
            "imageOpt": {
              "id": 361446,
              "name": "palace-of-culture-and-science_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "Kids Attractions",
            "cityId": 673
          },
          {
            "id": 110430,
            "name": "Parks \u0026 Gardens",
            "no": 1000,
            "legalName": "parks--gardens",
            "hasMenuItem": false,
            "shortTitle": "Parks \u0026 Gardens",
            "cityId": 673
          }
        ],
        "shortTitle": "Multimedia Fountain Park",
        "subTitle": "",
        "shortDescription": "A delightful fountain complex featuring water jets that are a visual delight when combined with music and light",
        "imageOpt": {
          "id": 361471,
          "name": "_small",
          "creditTo": "Wistula",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Multimedia_Fountain_Park_at_Podzamcze_Warsaw.jpg"
        },
        "imageMid": {
          "id": 361470,
          "name": "_mid",
          "creditTo": "Wistula",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Multimedia_Fountain_Park_at_Podzamcze_Warsaw.jpg"
        },
        "sqrImageOpt": {
          "id": 361473,
          "name": "_small",
          "creditTo": "Wistula",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Multimedia_Fountain_Park_at_Podzamcze_Warsaw.jpg"
        },
        "mainType": {
          "id": 110430,
          "name": "Parks \u0026 Gardens",
          "no": 1000,
          "legalName": "parks--gardens",
          "hasMenuItem": false,
          "shortTitle": "Parks \u0026 Gardens",
          "cityId": 673
        },
        "no": 28,
        "mainPaidActivity": {
          "id": 10298776,
          "vendor": "Viator",
          "vendorProductId": "25300P1",
          "title": "3-Hour, Small-Group Warsaw Segway Tour",
          "description": "\u003cp\u003eHop aboard your own personal Segway for a 3-hour small-group romp through Warsaw\u0027s historic highlights, led by a certified local tour guide. You\u0027ll see the Presidential Palace, Royal Castle, Tomb of the Unknown Soldier, Multimedia Fountain Park, Saxon Garden, St. John\u0027s Cathedral, the site of the Nazi-era Jewish Ghetto, and more.\u003cstrong\u003e\u003cbr /\u003e \u003c/strong\u003e\u003c/p\u003e",
          "descriptionNoHtml": "Hop aboard your own personal Segway for a 3-hour small-group romp through Warsaw\u0027s historic highlights, led by a certified local tour guide. You\u0027ll see the Presidential Palace, Royal Castle, Tomb of the Unknown Soldier, Multimedia Fountain Park, Saxon Garden, St. John\u0027s Cathedral, the site of the Nazi-era Jewish Ghetto, and more.",
          "price": "99.67",
          "link": "http://www.viator.com/tours/Warsaw/3-Hour-Small-Group-Warsaw-Segway-Tour/d528-25300P1?eap\u003dvisitacity-\u003cSUBBRANDEDCODE\u003e-14055\u0026aid\u003dvba14055en",
          "paidActivityCatergoryList": [
            {
              "id": 109130,
              "name": "Tours \u0026 Sightseeing",
              "legalName": "tours--sightseeing",
              "cityId": 673,
              "no": 3,
              "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/6875/SITours/private-tour-warsaw-city-sightseeing-by-retro-fiat-in-warsaw-172304.jpg",
              "vendor": "Viator"
            },
            {
              "id": 112324,
              "name": "All Activities",
              "legalName": "all-activities",
              "cityId": 673,
              "no": 1,
              "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/2916/SITours/city-sightseeing-warsaw-hop-on-hop-off-tour-in-warsaw-534049.jpg",
              "vendor": "Viator"
            },
            {
              "id": 137106,
              "name": "Segway Tours",
              "legalName": "segway-tours",
              "cityId": 673,
              "no": 25,
              "vendor": "Viator"
            }
          ],
          "no": 1,
          "cityId": 673,
          "averageRating": 5.0,
          "reviewersNum": 1,
          "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/25300/SITours/3-hour-small-group-warsaw-segway-tour-in-warsaw-269968.jpg"
        },
        "parisPassSave": false,
        "parisPassSkipLine": false,
        "cityId": 673,
        "userItinerariesCount": 49,
        "averageVisitDuration": 58,
        "noPerUsers": 22,
        "calculatedRating": 3.5,
        "googlePlaceId": "ChIJh0QLCW7MHkcRBpU8uKhlEU8",
        "openHoursList": []
      },
      {
        "id": 113556,
        "name": "National Museum of Ethnography",
        "legalName": "national-museum-of-ethnography",
        "description": "The National Museum of Ethnography highlights the dynamic and colorful heritage of Poland, as well as many other countries through a dynamic and interesting collection of costumes, furniture, art, and photographs. Established in 1888, the museum remains the largest and oldest of its kind across the country. With over 80,000 objects on display, there is a lot of ground to cover.\u003cbr/\u003eThe museum hosts several diverse permanent exhibits as well as a rotation of temporary ones. In the Polish and European Folk Culture exhibit, visitors will learn all about the rituals, customs, and clothing of the Polish people throughout the ages. Polish inventions and handicrafts help to exhibit the style of European folk culture. There is an entire exhibition dedicated to traditional musical instruments from Poland. Each instrument has an audio recording of it being played, which will help visitors visualize exactly what type of music Polish folk once enjoyed. In the Asian collection, visitors will be presented with an astounding array of weapons from across India, Indonesia, and the Middle East including samurai swords, 17th century armor, and Japanese wooden weapons. Costumes of Chinese, Korean, Indian, and Japanese cultures are all on display, as well as a set of Iranian Armenian dishware. The museum also hosts an excellent exhibition on Afghanistan. A special exhibit details Jewish life and culture in Poland, with an emphasis on the religious holidays and customs.\u003cbr/\u003eComplete your visit with a lunch in the museum’s cafe.\u003cbr/\u003e",
        "descriptionNoHtml": "The National Museum of Ethnography highlights the dynamic and colorful heritage of Poland, as well as many other countries through a dynamic and interesting collection of costumes, furniture, art, and photographs. Established in 1888, the museum remains the largest and oldest of its kind across the country. With over 80,000 objects on display, there is a lot of ground to cover. The museum hosts several diverse permanent exhibits as well as a rotation of temporary ones. In the Polish and European Folk Culture exhibit, visitors will learn all about the rituals, customs, and clothing of the Polish people throughout the ages. Polish inventions and handicrafts help to exhibit the style of European folk culture. There is an entire exhibition dedicated to traditional musical instruments from Poland. Each instrument has an audio recording of it being played, which will help visitors visualize exactly what type of music Polish folk once enjoyed. In the Asian collection, visitors will be presented with an astounding array of weapons from across India, Indonesia, and the Middle East including samurai swords, 17th century armor, and Japanese wooden weapons. Costumes of Chinese, Korean, Indian, and Japanese cultures are all on display, as well as a set of Iranian Armenian dishware. The museum also hosts an excellent exhibition on Afghanistan. A special exhibit details Jewish life and culture in Poland, with an emphasis on the religious holidays and customs. Complete your visit with a lunch in the museum’s cafe.",
        "rating": 4.0,
        "contactInformation": "Address: Kredytowa 1, 00-056 Warszawa, Poland\nPhone Number: 22 827 76 41\nAdmission: 20 Pln\nOpening Hours: Tue 10am-5pm, Wed 11am-7pm, Thu-Fri 10am-5pm, Sat 12pm-6pm, Sun 12pm-5pm\nWeb: http://www.ethnomuseum.pl/",
        "longitude": 52.238164,
        "latitude": 21.012111,
        "siteTypeList": [
          {
            "id": 110424,
            "name": "All Attractions",
            "no": 1,
            "legalName": "all-attractions",
            "imageOpt": {
              "id": 361438,
              "name": "old-town-square_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "All Attractions",
            "cityId": 673
          },
          {
            "id": 110428,
            "name": "Museums",
            "no": 3,
            "legalName": "museums",
            "imageOpt": {
              "id": 361442,
              "name": "royal-castle_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "Museums",
            "cityId": 673
          }
        ],
        "shortTitle": "National Museum of Ethnography",
        "subTitle": "",
        "shortDescription": "A massive collection of folk art, paintings, sculptures, objects, art, and costumes from around the globe",
        "imageOpt": {
          "id": 361357,
          "name": "national-museum-of-ethnography_horizontal_small",
          "creditTo": "Marta Malina Moraczewska",
          "creditLink": "https://commons.wikimedia.org/wiki/File:National_Museum_of_Ethnography,_Warsaw_-_permanent_exhibition_2015.jpg"
        },
        "imageMid": {
          "id": 361356,
          "name": "national-museum-of-ethnography_horizontal_mid",
          "creditTo": "Marta Malina Moraczewska",
          "creditLink": "https://commons.wikimedia.org/wiki/File:National_Museum_of_Ethnography,_Warsaw_-_permanent_exhibition_2015.jpg"
        },
        "sqrImageOpt": {
          "id": 361354,
          "name": "national-museum-of-ethnography_sqr_small",
          "creditTo": "Marta Malina Moraczewska",
          "creditLink": "https://commons.wikimedia.org/wiki/File:National_Museum_of_Ethnography,_Warsaw_-_permanent_exhibition_2015.jpg"
        },
        "mainType": {
          "id": 110428,
          "name": "Museums",
          "no": 3,
          "legalName": "museums",
          "imageOpt": {
            "id": 361442,
            "name": "royal-castle_horizontal_small"
          },
          "hasMenuItem": true,
          "shortTitle": "Museums",
          "cityId": 673
        },
        "no": 22,
        "parisPassSave": false,
        "parisPassSkipLine": false,
        "cityId": 673,
        "userItinerariesCount": 43,
        "averageVisitDuration": 62,
        "noPerUsers": 23,
        "calculatedRating": 3.5,
        "googlePlaceId": "ChIJPcztF2DMHkcRNTXS6e61rqo",
        "openHoursList": [
          {
            "id": 123044,
            "day": 0,
            "startTime": "Jan 1, 1970 12:00:00 PM",
            "endTime": "Jan 1, 1970 5:00:00 PM"
          },
          {
            "id": 123045,
            "day": 2,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 5:00:00 PM"
          },
          {
            "id": 123046,
            "day": 3,
            "startTime": "Jan 1, 1970 11:00:00 AM",
            "endTime": "Jan 1, 1970 7:00:00 PM"
          },
          {
            "id": 123047,
            "day": 4,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 5:00:00 PM"
          },
          {
            "id": 123048,
            "day": 5,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 5:00:00 PM"
          },
          {
            "id": 123049,
            "day": 6,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 6:00:00 PM"
          }
        ],
        "openingHoursText": "Monday: Closed,Tuesday: 10:00 AM – 5:00 PM,Wednesday: 11:00 AM – 7:00 PM,Thursday: 10:00 AM – 5:00 PM,Friday: 10:00 AM – 5:00 PM,Saturday: 10:00 AM – 6:00 PM,Sunday: 12:00 – 5:00 PM,"
      },
      {
        "id": 113557,
        "name": "Museum of Cartoon Art and Caricature",
        "legalName": "museum-of-cartoon-art-and-caricature",
        "description": "The Museum of Cartoon Art and Caricature found in Old Town, with an impressive collection of over 20,000 works both from Poland and around the world. The museum was founded by Eryk Lipiński, an accomplished caricaturist. The initial pieces of the museum all came from his personal collection. \u003cbr\u003eThe museum is housed in a former orangery dating back to the 18th century, likely created by the same designer who worked on Warsaw’s Royal Castle, Szymon B. Zug. The museum does not present any permanent exhibitions, but rather prefers to constantly curate and present a rotation of temporary ones.\u003cbr\u003eThe museum’s collection is quite expansive, with works ranging from cartoons, satirical drawings, political posters, paintings, and sculptures dating from the 18th century to the present. They even hold satirical humor drawing competitions from time to time, exhibiting the national and international winners at the museum. Some of the museum’s past thematic exhibitions have included the “Panorama of Polish Caricature,” “Times of War and Peace,” and \"What\u0027s happening on the Internet?\" In more recent years the museum has begun to experiment with incorporating multimedia displays in their exhibits including the use of specialty films and performing arts. The Museum of Cartoon Art and Caricature is one of 50 of its kind in the entire world, and the only one in all of Poland.\u003cbr\u003eFully illustrated catalogues of each of the museums exhibitions can be found in the gift shop, along with posters of your funniest and most significant drawings.\u003cbr\u003e",
        "descriptionNoHtml": "The Museum of Cartoon Art and Caricature found in Old Town, with an impressive collection of over 20,000 works both from Poland and around the world. The museum was founded by Eryk Lipiński, an accomplished caricaturist. The initial pieces of the museum all came from his personal collection. The museum is housed in a former orangery dating back to the 18th century, likely created by the same designer who worked on Warsaw’s Royal Castle, Szymon B. Zug. The museum does not present any permanent exhibitions, but rather prefers to constantly curate and present a rotation of temporary ones. The museum’s collection is quite expansive, with works ranging from cartoons, satirical drawings, political posters, paintings, and sculptures dating from the 18th century to the present. They even hold satirical humor drawing competitions from time to time, exhibiting the national and international winners at the museum. Some of the museum’s past thematic exhibitions have included the “Panorama of Polish Caricature,” “Times of War and Peace,” and \"What\u0027s happening on the Internet?\" In more recent years the museum has begun to experiment with incorporating multimedia displays in their exhibits including the use of specialty films and performing arts. The Museum of Cartoon Art and Caricature is one of 50 of its kind in the entire world, and the only one in all of Poland. Fully illustrated catalogues of each of the museums exhibitions can be found in the gift shop, along with posters of your funniest and most significant drawings.",
        "rating": 4.0,
        "contactInformation": "Address: Kozia 11, 00-001 Warszawa, Poland\nPhone Number: 22 827 88 95\nAdmission: 7 Pln\nOpening Hours: Tue-Sun 10am-6pm\nWeb: http://www.muzeumkarykatury.pl/",
        "longitude": 52.2450251,
        "latitude": 21.0131106,
        "siteTypeList": [
          {
            "id": 110424,
            "name": "All Attractions",
            "no": 1,
            "legalName": "all-attractions",
            "imageOpt": {
              "id": 361438,
              "name": "old-town-square_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "All Attractions",
            "cityId": 673
          },
          {
            "id": 110427,
            "name": "Kids Attractions",
            "no": 5,
            "legalName": "kids-attractions",
            "imageOpt": {
              "id": 361446,
              "name": "palace-of-culture-and-science_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "Kids Attractions",
            "cityId": 673
          },
          {
            "id": 110428,
            "name": "Museums",
            "no": 3,
            "legalName": "museums",
            "imageOpt": {
              "id": 361442,
              "name": "royal-castle_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "Museums",
            "cityId": 673
          },
          {
            "id": 110431,
            "name": "Religious Sites",
            "no": 6,
            "legalName": "religious-sites",
            "imageOpt": {
              "id": 361448,
              "name": "st-johns-archcathedral-warsaw_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "Religious Sites",
            "cityId": 673
          }
        ],
        "shortTitle": "Museum of Cartoon Art and Caricature",
        "subTitle": "",
        "shortDescription": "Home to over 20,000 pieces cartoons, satirical drawings, and caricatures by Polish and foreign artists",
        "imageOpt": {
          "id": 361362,
          "name": "museum-of-cartoon-art-and-caricature_horizontal_small",
          "creditTo": "File Upload Bot (Magnus Manske)",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Muzeum_Karykatury_w_Warszawie.jpg"
        },
        "imageMid": {
          "id": 361361,
          "name": "museum-of-cartoon-art-and-caricature_horizontal_mid",
          "creditTo": "File Upload Bot (Magnus Manske)",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Muzeum_Karykatury_w_Warszawie.jpg"
        },
        "sqrImageOpt": {
          "id": 361359,
          "name": "museum-of-cartoon-art-and-caricature_sqr_small",
          "creditTo": "File Upload Bot (Magnus Manske)",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Muzeum_Karykatury_w_Warszawie.jpg"
        },
        "mainType": {
          "id": 110428,
          "name": "Museums",
          "no": 3,
          "legalName": "museums",
          "imageOpt": {
            "id": 361442,
            "name": "royal-castle_horizontal_small"
          },
          "hasMenuItem": true,
          "shortTitle": "Museums",
          "cityId": 673
        },
        "no": 23,
        "parisPassSave": false,
        "parisPassSkipLine": false,
        "cityId": 673,
        "userItinerariesCount": 41,
        "averageVisitDuration": 67,
        "noPerUsers": 24,
        "calculatedRating": 3.0,
        "googlePlaceId": "ChIJ3SDb8mbMHkcRW0EyA4S7MCw",
        "openHoursList": [
          {
            "id": 123050,
            "day": 0,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 6:00:00 PM"
          },
          {
            "id": 123051,
            "day": 2,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 6:00:00 PM"
          },
          {
            "id": 123052,
            "day": 3,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 6:00:00 PM"
          },
          {
            "id": 123053,
            "day": 4,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 6:00:00 PM"
          },
          {
            "id": 123054,
            "day": 5,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 6:00:00 PM"
          },
          {
            "id": 123055,
            "day": 6,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 6:00:00 PM"
          }
        ],
        "openingHoursText": "Monday: Closed,Tuesday: 10:00 AM – 6:00 PM,Wednesday: 10:00 AM – 6:00 PM,Thursday: 10:00 AM – 6:00 PM,Friday: 10:00 AM – 6:00 PM,Saturday: 10:00 AM – 6:00 PM,Sunday: 10:00 AM – 6:00 PM,"
      },
      {
        "id": 113570,
        "name": "Monument to the Ghetto Heroes",
        "legalName": "monument-to-the-ghetto-heroes",
        "description": "Located on a large grassy square in the center of Muranow, the Monument to the Ghetto Heroes stands as a testament to the brave individuals who led, and lost their lives, in the Warsaw Ghetto Uprising of 1943. The monument stands on the site of what was once the main bunker of the Jewish Fighting Organization (ZOB).\u003cbr/\u003eThe monument includes a bronze sculpture of several armed ZOB fighters whom led the uprising, including its leader, Mordechai Anielewicz. Surrounding them is a stone wall which is meant to evoke images of the ghetto walls, as well as Jerusalem’s Western Wall. Ironically, the stones used in the monument were sent to Warsaw by Nazis, with the intention of using in their victory tower. An inscription in Polish, Hebrew, and Yiddish reads, “The Jewish People in honor of its fighters and martyrs.” Adjacent to the Monument to the Ghetto Heroes is the Jan Karski monument, a statue commemorating the Polish resistance fighter famed for informing the Allies of the Nazi death camps. \u003cbr/\u003eThe monument stands across from the Museum of the History of Polish Jews, so if you are already planning on visiting the monument site, the museum is a convenient stop as well. The grassy shaded park beside it is a good spot for a stroll or a picnic lunch.\u003cbr/\u003e",
        "descriptionNoHtml": "Located on a large grassy square in the center of Muranow, the Monument to the Ghetto Heroes stands as a testament to the brave individuals who led, and lost their lives, in the Warsaw Ghetto Uprising of 1943. The monument stands on the site of what was once the main bunker of the Jewish Fighting Organization (ZOB). The monument includes a bronze sculpture of several armed ZOB fighters whom led the uprising, including its leader, Mordechai Anielewicz. Surrounding them is a stone wall which is meant to evoke images of the ghetto walls, as well as Jerusalem’s Western Wall. Ironically, the stones used in the monument were sent to Warsaw by Nazis, with the intention of using in their victory tower. An inscription in Polish, Hebrew, and Yiddish reads, “The Jewish People in honor of its fighters and martyrs.” Adjacent to the Monument to the Ghetto Heroes is the Jan Karski monument, a statue commemorating the Polish resistance fighter famed for informing the Allies of the Nazi death camps. The monument stands across from the Museum of the History of Polish Jews, so if you are already planning on visiting the monument site, the museum is a convenient stop as well. The grassy shaded park beside it is a good spot for a stroll or a picnic lunch.",
        "rating": 3.0,
        "contactInformation": "Address: Zamenhofa, 00-001 Warszawa, Poland\nPhone Number: \nAdmission: \nOpening Hours: \nWeb: ",
        "longitude": 52.2497492,
        "latitude": 20.9941838,
        "siteTypeList": [
          {
            "id": 110424,
            "name": "All Attractions",
            "no": 1,
            "legalName": "all-attractions",
            "imageOpt": {
              "id": 361438,
              "name": "old-town-square_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "All Attractions",
            "cityId": 673
          },
          {
            "id": 110433,
            "name": "Landmarks",
            "no": 4,
            "legalName": "landmarks",
            "imageOpt": {
              "id": 361444,
              "name": "sigismunds-column_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "Landmarks",
            "cityId": 673
          }
        ],
        "shortTitle": "Monument to the Ghetto Heroes",
        "subTitle": "Pomnik Bohaterów Getta",
        "shortDescription": "Commemorates the Warsaw Ghetto Uprising of 1943",
        "imageOpt": {
          "id": 361476,
          "name": "_small",
          "creditTo": "Boston9",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Monument_to_the_Ghetto_Heroes_in_Warsaw_05.JPG"
        },
        "imageMid": {
          "id": 361475,
          "name": "_mid",
          "creditTo": "Boston9",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Monument_to_the_Ghetto_Heroes_in_Warsaw_05.JPG"
        },
        "sqrImageOpt": {
          "id": 361478,
          "name": "_small",
          "creditTo": "Boston9",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Monument_to_the_Ghetto_Heroes_in_Warsaw_05.JPG"
        },
        "mainType": {
          "id": 110433,
          "name": "Landmarks",
          "no": 4,
          "legalName": "landmarks",
          "imageOpt": {
            "id": 361444,
            "name": "sigismunds-column_horizontal_small"
          },
          "hasMenuItem": true,
          "shortTitle": "Landmarks",
          "cityId": 673
        },
        "no": 36,
        "parisPassSave": false,
        "parisPassSkipLine": false,
        "cityId": 673,
        "userItinerariesCount": 39,
        "averageVisitDuration": 17,
        "noPerUsers": 25,
        "calculatedRating": 3.0,
        "googlePlaceId": "ChIJgf0yWcTemkcRRwyip4N5RXw",
        "openHoursList": []
      },
      {
        "id": 113563,
        "name": "Holy Cross Church",
        "legalName": "holy-cross-church",
        "description": "The most visited church in all of Warsaw, Holy Cross Church is a landmark for the capital city. The church originated as a small wooden chapel built in the 15th century, before being destroyed during the Swedish Deluge. The church was rebuilt in decadent Polish Baroque style, with additional embellishments being added on throughout the years. Today the church’s main draw is that it serves as the final resting place for Frédéric Chopin’s heart.\u003cbr\u003eThe church’s interior is an astonishing Baroque creation, complete with crystal chandeliers, columns, and a gold plated altar. Although the church was devastated during the Warsaw Uprising, several important artifacts survived. This includes the church’s organ which was created in 1925. The organ is the largest in Warsaw, and is still used in the church’s services. The church also houses an urn containing the remains of Władysław Reymont, Nobel Prize winning author, as well as several plaques honoring numerous Polish icons such as World War II hero Władysław Sikorski, and poet Juliusz Słowacki.\u003cbr\u003eBy the second pillar on the left side of the nave lies a small urn. The urn contains what remains of Frédéric Chopin’s heart. Although the great composer died in Paris, France, it is only fitting that his adoring home country should be able to lay a part of him to rest in this historic and beautiful church.\u003cbr\u003eVisitors are asked to not enter the church during mass, which takes place daily at noon. Entrance is permitted otherwise.\u003cbr\u003e",
        "descriptionNoHtml": "The most visited church in all of Warsaw, Holy Cross Church is a landmark for the capital city. The church originated as a small wooden chapel built in the 15th century, before being destroyed during the Swedish Deluge. The church was rebuilt in decadent Polish Baroque style, with additional embellishments being added on throughout the years. Today the church’s main draw is that it serves as the final resting place for Frédéric Chopin’s heart. The church’s interior is an astonishing Baroque creation, complete with crystal chandeliers, columns, and a gold plated altar. Although the church was devastated during the Warsaw Uprising, several important artifacts survived. This includes the church’s organ which was created in 1925. The organ is the largest in Warsaw, and is still used in the church’s services. The church also houses an urn containing the remains of Władysław Reymont, Nobel Prize winning author, as well as several plaques honoring numerous Polish icons such as World War II hero Władysław Sikorski, and poet Juliusz Słowacki. By the second pillar on the left side of the nave lies a small urn. The urn contains what remains of Frédéric Chopin’s heart. Although the great composer died in Paris, France, it is only fitting that his adoring home country should be able to lay a part of him to rest in this historic and beautiful church. Visitors are asked to not enter the church during mass, which takes place daily at noon. Entrance is permitted otherwise.",
        "rating": 3.0,
        "contactInformation": "Address: Krakowskie Przedmieście 3, 00-047 Warszawa, Poland\nPhone Number: 22 826 89 10\nAdmission: \nOpening Hours: Daily 10am-4pm\nWeb: http://swkrzyz.pl/",
        "longitude": 52.238758,
        "latitude": 21.0168509,
        "siteTypeList": [
          {
            "id": 110424,
            "name": "All Attractions",
            "no": 1,
            "legalName": "all-attractions",
            "imageOpt": {
              "id": 361438,
              "name": "old-town-square_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "All Attractions",
            "cityId": 673
          },
          {
            "id": 110431,
            "name": "Religious Sites",
            "no": 6,
            "legalName": "religious-sites",
            "imageOpt": {
              "id": 361448,
              "name": "st-johns-archcathedral-warsaw_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "Religious Sites",
            "cityId": 673
          }
        ],
        "shortTitle": "Holy Cross Church",
        "subTitle": "",
        "shortDescription": "A Roman Catholic church built in the Baroque style and the final resting place of Chopin",
        "imageOpt": {
          "id": 361382,
          "name": "holy-cross-church_horizontal_small"
        },
        "imageMid": {
          "id": 361381,
          "name": "holy-cross-church_horizontal_mid"
        },
        "sqrImageOpt": {
          "id": 361379,
          "name": "holy-cross-church_sqr_small"
        },
        "mainType": {
          "id": 110431,
          "name": "Religious Sites",
          "no": 6,
          "legalName": "religious-sites",
          "imageOpt": {
            "id": 361448,
            "name": "st-johns-archcathedral-warsaw_horizontal_small"
          },
          "hasMenuItem": true,
          "shortTitle": "Religious Sites",
          "cityId": 673
        },
        "no": 29,
        "mainPaidActivity": {
          "id": 10361097,
          "vendor": "Viator",
          "vendorProductId": "26942P38",
          "title": "Frédéric Chopin cultural tour",
          "description": "Follow the steps of Frederic Chopin and discover where his talent has its beginning. See the place of his baptism – the fortress-like church in Brochow. Visit the Chopin Museum in Warsaw and the Holy Cross Church, where his heart is buried. Have a relaxing cup of coffee in the favourite Chopin’s restaurant and finish the tour listening to the concert of talented musicians playing his beautiful melodies.",
          "descriptionNoHtml": "Follow the steps of Frederic Chopin and discover where his talent has its beginning. See the place of his baptism – the fortress-like church in Brochow. Visit the Chopin Museum in Warsaw and the Holy Cross Church, where his heart is buried. Have a relaxing cup of coffee in the favourite Chopin’s restaurant and finish the tour listening to the concert of talented musicians playing his beautiful melodies.",
          "price": "446.14",
          "link": "http://www.viator.com/tours/Warsaw/Frederic-Chopin-cultural-tour/d528-26942P38?eap\u003dvisitacity-\u003cSUBBRANDEDCODE\u003e-14055\u0026aid\u003dvba14055en",
          "paidActivityCatergoryList": [
            {
              "id": 109138,
              "name": "Cultural \u0026 Theme Tours",
              "legalName": "cultural--theme-tours",
              "cityId": 673,
              "no": 4,
              "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/6875/SITours/private-tour-warsaw-s-jewish-heritage-by-retro-fiat-in-warsaw-172308.jpg",
              "vendor": "Viator"
            },
            {
              "id": 109147,
              "name": "Cultural Tours",
              "legalName": "cultural-tours",
              "cityId": 673,
              "no": 6,
              "vendor": "Viator"
            },
            {
              "id": 112324,
              "name": "All Activities",
              "legalName": "all-activities",
              "cityId": 673,
              "no": 1,
              "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/2916/SITours/city-sightseeing-warsaw-hop-on-hop-off-tour-in-warsaw-534049.jpg",
              "vendor": "Viator"
            }
          ],
          "no": 1,
          "cityId": 673,
          "averageRating": 0.0,
          "reviewersNum": 0,
          "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/26942/SITours/fr-d-ric-chopin-cultural-tour-in-warsaw-513569.jpg"
        },
        "parisPassSave": false,
        "parisPassSkipLine": false,
        "cityId": 673,
        "userItinerariesCount": 38,
        "averageVisitDuration": 31,
        "noPerUsers": 26,
        "calculatedRating": 3.0,
        "googlePlaceId": "ChIJ3V9Vyl_MHkcR8kXRF_SzpXA",
        "openHoursList": [
          {
            "id": 123067,
            "day": 0,
            "startTime": "Jan 1, 1970 6:00:00 AM",
            "endTime": "Jan 1, 1970 8:00:00 PM"
          },
          {
            "id": 123068,
            "day": 1,
            "startTime": "Jan 1, 1970 6:00:00 AM",
            "endTime": "Jan 1, 1970 8:00:00 PM"
          },
          {
            "id": 123069,
            "day": 2,
            "startTime": "Jan 1, 1970 6:00:00 AM",
            "endTime": "Jan 1, 1970 8:00:00 PM"
          },
          {
            "id": 123070,
            "day": 3,
            "startTime": "Jan 1, 1970 6:00:00 AM",
            "endTime": "Jan 1, 1970 8:00:00 PM"
          },
          {
            "id": 123071,
            "day": 4,
            "startTime": "Jan 1, 1970 6:00:00 AM",
            "endTime": "Jan 1, 1970 8:00:00 PM"
          },
          {
            "id": 123072,
            "day": 5,
            "startTime": "Jan 1, 1970 6:00:00 AM",
            "endTime": "Jan 1, 1970 8:00:00 PM"
          },
          {
            "id": 123073,
            "day": 6,
            "startTime": "Jan 1, 1970 6:00:00 AM",
            "endTime": "Jan 1, 1970 8:00:00 PM"
          }
        ],
        "openingHoursText": "Monday: 6:00 AM – 8:00 PM,Tuesday: 6:00 AM – 8:00 PM,Wednesday: 6:00 AM – 8:00 PM,Thursday: 6:00 AM – 8:00 PM,Friday: 6:00 AM – 8:00 PM,Saturday: 6:00 AM – 8:00 PM,Sunday: 6:00 AM – 8:00 PM,"
      },
      {
        "id": 113565,
        "name": "Tomb of the Unknown Soldier",
        "legalName": "tomb-of-the-unknown-soldier",
        "description": "Located inside the Saxon Gardens is the Tomb of the Unknown Soldier. The touching symbolic tomb commemorates all the men and women who have fallen in battle to protect Poland’s freedom. The monument can be found under an arched arcade of the Saxon Palace, which was otherwise completely destroyed during WWII. The tomb is often the location of Poland’s national celebrations.\u003cbr\u003eThe monument is overcome with a quiet contemplative atmosphere as visitors pay their respects to fallen soldiers, and ponder Warsaw’s turbulent past. The tomb was originally built to house the ashes of the Unknown Soldier who fell defending Lwów during the Polish-Ukrainian war, as well as urns filled with soil from World War I battlefields. Today, the monument commemorates all Polish soldiers who have fallen in battle, with urns from every 20th century battlefield, inscriptions of the names of those who were lost, and stone tablets referencing Polish battles as far back as the 10th century. A military honor guard solemnly watches over the tomb, and its eternal flame. The changing of the guard takes place hourly, and the more elaborate ceremony of solemn changing takes place weekly on Sundays at noon. \u003cbr\u003eFrom the monument, visitors can take a stroll through the scenic Saxon Gardens, or stop for a picnic on the expansive lawns. Located in central Warsaw, the tomb is only a few minutes away from other important sights such as Presidential Palace and the University of Warsaw.\u003cbr\u003e",
        "descriptionNoHtml": "Located inside the Saxon Gardens is the Tomb of the Unknown Soldier. The touching symbolic tomb commemorates all the men and women who have fallen in battle to protect Poland’s freedom. The monument can be found under an arched arcade of the Saxon Palace, which was otherwise completely destroyed during WWII. The tomb is often the location of Poland’s national celebrations. The monument is overcome with a quiet contemplative atmosphere as visitors pay their respects to fallen soldiers, and ponder Warsaw’s turbulent past. The tomb was originally built to house the ashes of the Unknown Soldier who fell defending Lwów during the Polish-Ukrainian war, as well as urns filled with soil from World War I battlefields. Today, the monument commemorates all Polish soldiers who have fallen in battle, with urns from every 20th century battlefield, inscriptions of the names of those who were lost, and stone tablets referencing Polish battles as far back as the 10th century. A military honor guard solemnly watches over the tomb, and its eternal flame. The changing of the guard takes place hourly, and the more elaborate ceremony of solemn changing takes place weekly on Sundays at noon. From the monument, visitors can take a stroll through the scenic Saxon Gardens, or stop for a picnic on the expansive lawns. Located in central Warsaw, the tomb is only a few minutes away from other important sights such as Presidential Palace and the University of Warsaw.",
        "rating": 3.0,
        "contactInformation": "Address: plac Marszałka Józefa Piłsudskiego 1-3, 00-078 Warszawa, Poland\nPhone Number: \nAdmission: \nOpening Hours: \nWeb: ",
        "longitude": 52.2409858,
        "latitude": 21.0112661,
        "siteTypeList": [
          {
            "id": 110424,
            "name": "All Attractions",
            "no": 1,
            "legalName": "all-attractions",
            "imageOpt": {
              "id": 361438,
              "name": "old-town-square_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "All Attractions",
            "cityId": 673
          },
          {
            "id": 110433,
            "name": "Landmarks",
            "no": 4,
            "legalName": "landmarks",
            "imageOpt": {
              "id": 361444,
              "name": "sigismunds-column_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "Landmarks",
            "cityId": 673
          }
        ],
        "shortTitle": "Tomb of the Unknown Soldier",
        "subTitle": "",
        "shortDescription": "A military monument and the only surviving part of the Saxon Palace dedicated to unknown soldiers who gave their lives for Poland",
        "imageOpt": {
          "id": 361392,
          "name": "tomb-of-the-unknown-soldier_horizontal_small",
          "creditTo": "Cropbot",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Tomb_of_the_Unknown_Soldier_in_Warsaw.jpg"
        },
        "imageMid": {
          "id": 361391,
          "name": "tomb-of-the-unknown-soldier_horizontal_mid",
          "creditTo": "Cropbot",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Tomb_of_the_Unknown_Soldier_in_Warsaw.jpg"
        },
        "sqrImageOpt": {
          "id": 361389,
          "name": "tomb-of-the-unknown-soldier_sqr_small",
          "creditTo": "Cropbot",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Tomb_of_the_Unknown_Soldier_in_Warsaw.jpg"
        },
        "mainType": {
          "id": 110433,
          "name": "Landmarks",
          "no": 4,
          "legalName": "landmarks",
          "imageOpt": {
            "id": 361444,
            "name": "sigismunds-column_horizontal_small"
          },
          "hasMenuItem": true,
          "shortTitle": "Landmarks",
          "cityId": 673
        },
        "no": 31,
        "mainPaidActivity": {
          "id": 10298776,
          "vendor": "Viator",
          "vendorProductId": "25300P1",
          "title": "3-Hour, Small-Group Warsaw Segway Tour",
          "description": "\u003cp\u003eHop aboard your own personal Segway for a 3-hour small-group romp through Warsaw\u0027s historic highlights, led by a certified local tour guide. You\u0027ll see the Presidential Palace, Royal Castle, Tomb of the Unknown Soldier, Multimedia Fountain Park, Saxon Garden, St. John\u0027s Cathedral, the site of the Nazi-era Jewish Ghetto, and more.\u003cstrong\u003e\u003cbr /\u003e \u003c/strong\u003e\u003c/p\u003e",
          "descriptionNoHtml": "Hop aboard your own personal Segway for a 3-hour small-group romp through Warsaw\u0027s historic highlights, led by a certified local tour guide. You\u0027ll see the Presidential Palace, Royal Castle, Tomb of the Unknown Soldier, Multimedia Fountain Park, Saxon Garden, St. John\u0027s Cathedral, the site of the Nazi-era Jewish Ghetto, and more.",
          "price": "99.67",
          "link": "http://www.viator.com/tours/Warsaw/3-Hour-Small-Group-Warsaw-Segway-Tour/d528-25300P1?eap\u003dvisitacity-\u003cSUBBRANDEDCODE\u003e-14055\u0026aid\u003dvba14055en",
          "paidActivityCatergoryList": [
            {
              "id": 109130,
              "name": "Tours \u0026 Sightseeing",
              "legalName": "tours--sightseeing",
              "cityId": 673,
              "no": 3,
              "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/6875/SITours/private-tour-warsaw-city-sightseeing-by-retro-fiat-in-warsaw-172304.jpg",
              "vendor": "Viator"
            },
            {
              "id": 112324,
              "name": "All Activities",
              "legalName": "all-activities",
              "cityId": 673,
              "no": 1,
              "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/2916/SITours/city-sightseeing-warsaw-hop-on-hop-off-tour-in-warsaw-534049.jpg",
              "vendor": "Viator"
            },
            {
              "id": 137106,
              "name": "Segway Tours",
              "legalName": "segway-tours",
              "cityId": 673,
              "no": 25,
              "vendor": "Viator"
            }
          ],
          "no": 1,
          "cityId": 673,
          "averageRating": 5.0,
          "reviewersNum": 1,
          "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/25300/SITours/3-hour-small-group-warsaw-segway-tour-in-warsaw-269968.jpg"
        },
        "parisPassSave": false,
        "parisPassSkipLine": false,
        "cityId": 673,
        "userItinerariesCount": 37,
        "averageVisitDuration": 15,
        "noPerUsers": 27,
        "calculatedRating": 3.0,
        "googlePlaceId": "ChIJu_KNI2HMHkcRV73k56s6qh4",
        "openHoursList": []
      },
      {
        "id": 113564,
        "name": "Chopin Monument",
        "legalName": "chopin-monument",
        "description": "Located in the Łazienki Park, the Chopin monument is one of the city’s most beloved statues. The bronze likeness was sculpted by the prominent musician and artist, Witold Szymanowski, in 1926. Although the original was destroyed during the German occupation in 1940, a perfect reconstruction has since been erected.\u003cbr/\u003eThe sculpture depicts Chopin sitting in Łazienki Park under a windblown willow tree. The willow’s draping branches are meant to symbolize the pianist’s delicate hand and fingers. Chopin’s monument was one of the first beloved Warsaw statues to be destroyed during the German invasion. The monument strongly symbolizes the country’s love of Chopin and his compositions, making it an ideal target for the Nazis who wanted to wipe out Polish culture. Fortunately, the original statue mold still existed, and was used in reconstructing the statue after the war. Since then, several replicas have been stationed all over the world including Japan, France, and Illinois, showing that Chopin’s music has touched the hearts of people all over the world.\u003cbr/\u003eDuring the summer months, you can enjoy the free piano recitals of Chopin’s compositions, taking place every Sunday afternoon, since 1959. This has become an incredibly popular cultural event enjoyed by tourists and locals alike. Pack a picnic lunch, bring a blanket, and listen to the music. Spend the rest of the day strolling through Łazienki Park, and visit one of the many museums or other monuments that the park houses.\u003cbr/\u003e",
        "descriptionNoHtml": "Located in the Łazienki Park, the Chopin monument is one of the city’s most beloved statues. The bronze likeness was sculpted by the prominent musician and artist, Witold Szymanowski, in 1926. Although the original was destroyed during the German occupation in 1940, a perfect reconstruction has since been erected. The sculpture depicts Chopin sitting in Łazienki Park under a windblown willow tree. The willow’s draping branches are meant to symbolize the pianist’s delicate hand and fingers. Chopin’s monument was one of the first beloved Warsaw statues to be destroyed during the German invasion. The monument strongly symbolizes the country’s love of Chopin and his compositions, making it an ideal target for the Nazis who wanted to wipe out Polish culture. Fortunately, the original statue mold still existed, and was used in reconstructing the statue after the war. Since then, several replicas have been stationed all over the world including Japan, France, and Illinois, showing that Chopin’s music has touched the hearts of people all over the world. During the summer months, you can enjoy the free piano recitals of Chopin’s compositions, taking place every Sunday afternoon, since 1959. This has become an incredibly popular cultural event enjoyed by tourists and locals alike. Pack a picnic lunch, bring a blanket, and listen to the music. Spend the rest of the day strolling through Łazienki Park, and visit one of the many museums or other monuments that the park houses.",
        "rating": 3.0,
        "contactInformation": "Address: Łazienki Królewskie, al. Ujazdowskie, 00-001 Warszawa, Poland\nPhone Number: 504 243 783\nAdmission: \nOpening Hours: \nWeb: http://www.lazienki-krolewskie.pl/",
        "longitude": 52.214697,
        "latitude": 21.0281113,
        "siteTypeList": [
          {
            "id": 110424,
            "name": "All Attractions",
            "no": 1,
            "legalName": "all-attractions",
            "imageOpt": {
              "id": 361438,
              "name": "old-town-square_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "All Attractions",
            "cityId": 673
          },
          {
            "id": 110433,
            "name": "Landmarks",
            "no": 4,
            "legalName": "landmarks",
            "imageOpt": {
              "id": 361444,
              "name": "sigismunds-column_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "Landmarks",
            "cityId": 673
          }
        ],
        "shortTitle": "Chopin Monument",
        "subTitle": "",
        "shortDescription": "A bronze statue sculpted by Witold Szymanowski",
        "imageOpt": {
          "id": 361387,
          "name": "chopin-monument_horizontal_small"
        },
        "imageMid": {
          "id": 361386,
          "name": "chopin-monument_horizontal_mid"
        },
        "sqrImageOpt": {
          "id": 361384,
          "name": "chopin-monument_sqr_small"
        },
        "mainType": {
          "id": 110433,
          "name": "Landmarks",
          "no": 4,
          "legalName": "landmarks",
          "imageOpt": {
            "id": 361444,
            "name": "sigismunds-column_horizontal_small"
          },
          "hasMenuItem": true,
          "shortTitle": "Landmarks",
          "cityId": 673
        },
        "no": 30,
        "parisPassSave": false,
        "parisPassSkipLine": false,
        "cityId": 673,
        "userItinerariesCount": 37,
        "averageVisitDuration": 16,
        "noPerUsers": 28,
        "calculatedRating": 3.0,
        "googlePlaceId": "ChIJ3wQ0SuDMHkcR1AvCsuqqTkA",
        "openHoursList": []
      },
      {
        "id": 113567,
        "name": "Saxon Garden",
        "legalName": "saxon-garden",
        "description": "Serving the public since 1727, Saxon Gardens is one of the oldest public parks in the world. Originally designed in a French Style, the park currently reflects an English design after being reconstructed in the 19th century. Aside from beautiful grassy fields and foliage, the park is also filled with interesting historical artifacts, taking visitors on a tour of Warsaw and Poland’s history.\u003cbr\u003eOne of the more famous locations in the park is the Tomb of the Unknown Soldier, an unidentified soldier who died in 1920 defending Lviv. Polish soldiers pay respects to the tomb to this day. Directly behind the tomb is a fountain dating back to 1855. Surrounding the fountain are benches perfect for sitting and appreciating the statues that surround it. These statues are dedicated to different iconic moments in Warsaw’s history. There are also many interesting baroque statues scattered throughout the park. Nearby is also a sundial dating back to 1863.\u003cbr\u003eTake a stroll along the park’s well maintained pathways and see the spring flowers in bloom.  Make a stop at the man-made lake and enjoy a picnic lunch while watching swans glide across the water. The park also features a playground with benches nearby which will delight children and parents alike. Although much of the park was destroyed by Nazis in 1944, many of the park’s trees survived, and you may find some dating from a quarter of a millennium ago.\u003cbr\u003eThe Saxon Garden is very accessible, located between Metro Ratusz Arsenal and Świętokrzyska at uł. Marszalkowska directly in the city center.\u003cbr\u003e",
        "descriptionNoHtml": "Serving the public since 1727, Saxon Gardens is one of the oldest public parks in the world. Originally designed in a French Style, the park currently reflects an English design after being reconstructed in the 19th century. Aside from beautiful grassy fields and foliage, the park is also filled with interesting historical artifacts, taking visitors on a tour of Warsaw and Poland’s history. One of the more famous locations in the park is the Tomb of the Unknown Soldier, an unidentified soldier who died in 1920 defending Lviv. Polish soldiers pay respects to the tomb to this day. Directly behind the tomb is a fountain dating back to 1855. Surrounding the fountain are benches perfect for sitting and appreciating the statues that surround it. These statues are dedicated to different iconic moments in Warsaw’s history. There are also many interesting baroque statues scattered throughout the park. Nearby is also a sundial dating back to 1863. Take a stroll along the park’s well maintained pathways and see the spring flowers in bloom. Make a stop at the man-made lake and enjoy a picnic lunch while watching swans glide across the water. The park also features a playground with benches nearby which will delight children and parents alike. Although much of the park was destroyed by Nazis in 1944, many of the park’s trees survived, and you may find some dating from a quarter of a millennium ago. The Saxon Garden is very accessible, located between Metro Ratusz Arsenal and Świętokrzyska at uł. Marszalkowska directly in the city center.",
        "rating": 3.0,
        "contactInformation": "Address: Marszałkowska, 00-001 Warszawa, Poland\nPhone Number: \nAdmission: \nOpening Hours: \nWeb: http://zielona.um.warszawa.pl/tereny-zielone/parki/ogrod-saski",
        "longitude": 52.2405509,
        "latitude": 21.0087251,
        "siteTypeList": [
          {
            "id": 110424,
            "name": "All Attractions",
            "no": 1,
            "legalName": "all-attractions",
            "imageOpt": {
              "id": 361438,
              "name": "old-town-square_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "All Attractions",
            "cityId": 673
          },
          {
            "id": 110427,
            "name": "Kids Attractions",
            "no": 5,
            "legalName": "kids-attractions",
            "imageOpt": {
              "id": 361446,
              "name": "palace-of-culture-and-science_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "Kids Attractions",
            "cityId": 673
          },
          {
            "id": 110430,
            "name": "Parks \u0026 Gardens",
            "no": 1000,
            "legalName": "parks--gardens",
            "hasMenuItem": false,
            "shortTitle": "Parks \u0026 Gardens",
            "cityId": 673
          }
        ],
        "shortTitle": "Saxon Garden",
        "subTitle": "",
        "shortDescription": "The oldest Romantic English-style landscape park in Warsaw featuring the Tomb of the Unknown Soldier and an 1863 marble sundial",
        "imageOpt": {
          "id": 361402,
          "name": "saxon-garden_horizontal_small"
        },
        "imageMid": {
          "id": 361401,
          "name": "saxon-garden_horizontal_mid"
        },
        "sqrImageOpt": {
          "id": 361399,
          "name": "saxon-garden_sqr_small"
        },
        "mainType": {
          "id": 110430,
          "name": "Parks \u0026 Gardens",
          "no": 1000,
          "legalName": "parks--gardens",
          "hasMenuItem": false,
          "shortTitle": "Parks \u0026 Gardens",
          "cityId": 673
        },
        "no": 33,
        "mainPaidActivity": {
          "id": 10298776,
          "vendor": "Viator",
          "vendorProductId": "25300P1",
          "title": "3-Hour, Small-Group Warsaw Segway Tour",
          "description": "\u003cp\u003eHop aboard your own personal Segway for a 3-hour small-group romp through Warsaw\u0027s historic highlights, led by a certified local tour guide. You\u0027ll see the Presidential Palace, Royal Castle, Tomb of the Unknown Soldier, Multimedia Fountain Park, Saxon Garden, St. John\u0027s Cathedral, the site of the Nazi-era Jewish Ghetto, and more.\u003cstrong\u003e\u003cbr /\u003e \u003c/strong\u003e\u003c/p\u003e",
          "descriptionNoHtml": "Hop aboard your own personal Segway for a 3-hour small-group romp through Warsaw\u0027s historic highlights, led by a certified local tour guide. You\u0027ll see the Presidential Palace, Royal Castle, Tomb of the Unknown Soldier, Multimedia Fountain Park, Saxon Garden, St. John\u0027s Cathedral, the site of the Nazi-era Jewish Ghetto, and more.",
          "price": "99.67",
          "link": "http://www.viator.com/tours/Warsaw/3-Hour-Small-Group-Warsaw-Segway-Tour/d528-25300P1?eap\u003dvisitacity-\u003cSUBBRANDEDCODE\u003e-14055\u0026aid\u003dvba14055en",
          "paidActivityCatergoryList": [
            {
              "id": 109130,
              "name": "Tours \u0026 Sightseeing",
              "legalName": "tours--sightseeing",
              "cityId": 673,
              "no": 3,
              "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/6875/SITours/private-tour-warsaw-city-sightseeing-by-retro-fiat-in-warsaw-172304.jpg",
              "vendor": "Viator"
            },
            {
              "id": 112324,
              "name": "All Activities",
              "legalName": "all-activities",
              "cityId": 673,
              "no": 1,
              "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/2916/SITours/city-sightseeing-warsaw-hop-on-hop-off-tour-in-warsaw-534049.jpg",
              "vendor": "Viator"
            },
            {
              "id": 137106,
              "name": "Segway Tours",
              "legalName": "segway-tours",
              "cityId": 673,
              "no": 25,
              "vendor": "Viator"
            }
          ],
          "no": 1,
          "cityId": 673,
          "averageRating": 5.0,
          "reviewersNum": 1,
          "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/25300/SITours/3-hour-small-group-warsaw-segway-tour-in-warsaw-269968.jpg"
        },
        "parisPassSave": false,
        "parisPassSkipLine": false,
        "cityId": 673,
        "userItinerariesCount": 36,
        "averageVisitDuration": 74,
        "noPerUsers": 29,
        "calculatedRating": 3.0,
        "googlePlaceId": "ChIJkUWehmHMHkcRR-72WJvPCFg",
        "openHoursList": []
      },
      {
        "id": 113569,
        "name": "Nicolaus Copernicus Monument",
        "legalName": "nicolaus-copernicus-monument",
        "description": "Warsaw’s monument to the father of modern astronomy, Nicolaus Copernicus, is considered to be one of the capital’s most notable landmarks. Nicolaus Copernicus completely revolutionized the scientific community’s understand of our place in the universe. A century before the invention of the telescope, Copernicus discovered that the earth rotates on its axis once a day and travels around the sun once a year. He also hypothesized that our galaxy is one of billions in a vast universe. Although today these concepts may seem obvious, at the time his ideas were considered radical and blasphemous. \u003cbr/\u003eThe monument is appropriately located in front of the Staszic Palace - the Polish Academy of Sciences. The bronze statue depicts Copernicus thoughtfully holding a compass and armillary sphere. Parallel to the monument is a bronze representation of Copernicus’ solar system model. Since its erection in 1830, the monument has served as a symbol of wisdom and science to all whom enjoy it. During World War II, the Nazis placed a plaque on the statue’s pedestal insinuating that the Polish Copernicus was in fact a German. This led to outrage by the people of Warsaw prompting the Nazis to seize and hide the statue. The statue was recovered after the war and although damaged during the Warsaw Uprising, it now stands in the city center in perfect condition.\u003cbr/\u003eToday the monument stands as in iconic part of Warsaw, and often serves as a convenient meeting place due to its prominence and accessibility.\u003cbr/\u003e",
        "descriptionNoHtml": "Warsaw’s monument to the father of modern astronomy, Nicolaus Copernicus, is considered to be one of the capital’s most notable landmarks. Nicolaus Copernicus completely revolutionized the scientific community’s understand of our place in the universe. A century before the invention of the telescope, Copernicus discovered that the earth rotates on its axis once a day and travels around the sun once a year. He also hypothesized that our galaxy is one of billions in a vast universe. Although today these concepts may seem obvious, at the time his ideas were considered radical and blasphemous. The monument is appropriately located in front of the Staszic Palace - the Polish Academy of Sciences. The bronze statue depicts Copernicus thoughtfully holding a compass and armillary sphere. Parallel to the monument is a bronze representation of Copernicus’ solar system model. Since its erection in 1830, the monument has served as a symbol of wisdom and science to all whom enjoy it. During World War II, the Nazis placed a plaque on the statue’s pedestal insinuating that the Polish Copernicus was in fact a German. This led to outrage by the people of Warsaw prompting the Nazis to seize and hide the statue. The statue was recovered after the war and although damaged during the Warsaw Uprising, it now stands in the city center in perfect condition. Today the monument stands as in iconic part of Warsaw, and often serves as a convenient meeting place due to its prominence and accessibility.",
        "rating": 3.0,
        "contactInformation": "Address: Krakowskie Przedmieście, 00-001 Warszawa, Poland\nPhone Number: \nAdmission: \nOpening Hours: \nWeb: ",
        "longitude": 52.2381546,
        "latitude": 21.0179959,
        "siteTypeList": [
          {
            "id": 110424,
            "name": "All Attractions",
            "no": 1,
            "legalName": "all-attractions",
            "imageOpt": {
              "id": 361438,
              "name": "old-town-square_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "All Attractions",
            "cityId": 673
          },
          {
            "id": 110433,
            "name": "Landmarks",
            "no": 4,
            "legalName": "landmarks",
            "imageOpt": {
              "id": 361444,
              "name": "sigismunds-column_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "Landmarks",
            "cityId": 673
          }
        ],
        "shortTitle": "Nicolaus Copernicus Monument",
        "subTitle": "",
        "shortDescription": "An iconic bronze statue dedicated to the founder of modern astronomy and designed by the famous Danish artist Bertel Thorvaldsen",
        "imageOpt": {
          "id": 361412,
          "name": "nicolaus-copernicus-monument_horizontal_small"
        },
        "imageMid": {
          "id": 361411,
          "name": "nicolaus-copernicus-monument_horizontal_mid"
        },
        "sqrImageOpt": {
          "id": 361409,
          "name": "nicolaus-copernicus-monument_sqr_small"
        },
        "mainType": {
          "id": 110433,
          "name": "Landmarks",
          "no": 4,
          "legalName": "landmarks",
          "imageOpt": {
            "id": 361444,
            "name": "sigismunds-column_horizontal_small"
          },
          "hasMenuItem": true,
          "shortTitle": "Landmarks",
          "cityId": 673
        },
        "no": 35,
        "parisPassSave": false,
        "parisPassSkipLine": false,
        "cityId": 673,
        "userItinerariesCount": 33,
        "averageVisitDuration": 13,
        "noPerUsers": 30,
        "calculatedRating": 3.0,
        "googlePlaceId": "ChIJZQUBpV_MHkcRZRuGJpgFlRQ",
        "openHoursList": []
      },
      {
        "id": 113560,
        "name": "Jewish Cemetery",
        "legalName": "jewish-cemetery",
        "description": "Warsaw’s Jewish Cemetery is one of the largest Jewish burial grounds in the world. Founded in 1806, the cemetery now holds over 200,000 tombs.  Surprisingly, unlike so many other Warsaw landmarks, the cemetery was not destroyed during the German occupation. Due to its abandonment after the war, the cemetery has become completely overgrown with tall trees and foliage, creating an enchanting and contemplative atmosphere.\u003cbr\u003eThere is a large map of the cemetery including names of those buried to assist you in navigating. Many prominent names can be spotted on these headstones such as Marek Edelman, the last surviving leader of the Warsaw Ghetto Uprising, who passed at nearly 100 years. Also buried here is Ludovic Lazarus Zamenhof, famed for inventing the language of Esperanto. He died in Warsaw in 1917, while his entire family was exterminated by the Nazis. Many of the grander monuments are located on the cemetery’s main lane, making them easier to access, as opposed to those more hidden in the forest.\u003cbr\u003eMany of the headstones have identifying symbols upon them such resistance fighters or small flags representing the Warsaw Uprising. Most are covered in Hebrew descriptions, and are designed in classic Gothic style, although you may see some art nouveau monuments as well. A large sculpture honors Janusz Korczak with his orphans, commemorating their lives and the sacrifice he made by accompanying them into the Nazi gas chambers.\u003cbr\u003eBecause the cemetery is owned by the Jewish Religious Community of Warsaw, it is requested that all men entering cover their heads in accordance with Jewish practice.\u003cbr\u003e",
        "descriptionNoHtml": "Warsaw’s Jewish Cemetery is one of the largest Jewish burial grounds in the world. Founded in 1806, the cemetery now holds over 200,000 tombs. Surprisingly, unlike so many other Warsaw landmarks, the cemetery was not destroyed during the German occupation. Due to its abandonment after the war, the cemetery has become completely overgrown with tall trees and foliage, creating an enchanting and contemplative atmosphere. There is a large map of the cemetery including names of those buried to assist you in navigating. Many prominent names can be spotted on these headstones such as Marek Edelman, the last surviving leader of the Warsaw Ghetto Uprising, who passed at nearly 100 years. Also buried here is Ludovic Lazarus Zamenhof, famed for inventing the language of Esperanto. He died in Warsaw in 1917, while his entire family was exterminated by the Nazis. Many of the grander monuments are located on the cemetery’s main lane, making them easier to access, as opposed to those more hidden in the forest. Many of the headstones have identifying symbols upon them such resistance fighters or small flags representing the Warsaw Uprising. Most are covered in Hebrew descriptions, and are designed in classic Gothic style, although you may see some art nouveau monuments as well. A large sculpture honors Janusz Korczak with his orphans, commemorating their lives and the sacrifice he made by accompanying them into the Nazi gas chambers. Because the cemetery is owned by the Jewish Religious Community of Warsaw, it is requested that all men entering cover their heads in accordance with Jewish practice.",
        "rating": 3.0,
        "contactInformation": "Address:  Okopowa 49/51, 01-043 Warszawa, Poland\nPhone Number:   22 838 26 22\nAdmission: 10 Pln\nOpening Hours: Mon-Thu 10am-5pm, Fri 9am-1pm, Sun 11am-4pm \nWeb:  ",
        "longitude": 52.2462866,
        "latitude": 20.9754667,
        "siteTypeList": [
          {
            "id": 110424,
            "name": "All Attractions",
            "no": 1,
            "legalName": "all-attractions",
            "imageOpt": {
              "id": 361438,
              "name": "old-town-square_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "All Attractions",
            "cityId": 673
          },
          {
            "id": 110434,
            "name": "Cemeteries",
            "no": 1000,
            "legalName": "cemeteries",
            "hasMenuItem": false,
            "shortTitle": "Cemeteries",
            "cityId": 673
          }
        ],
        "shortTitle": "Jewish Cemetery",
        "subTitle": "",
        "shortDescription": "One of the largest cemetries in the world featuring over 250,000 marked tombs",
        "imageOpt": {
          "id": 361461,
          "name": "_small",
          "creditTo": "Jolanta Dyr",
          "creditLink": "https://commons.wikimedia.org/wiki/File:251012_Janusz_Korczak_monument_at_Jewish_Cemetery_in_Warsaw_-_02.jpg"
        },
        "imageMid": {
          "id": 361460,
          "name": "_mid",
          "creditTo": "Jolanta Dyr",
          "creditLink": "https://commons.wikimedia.org/wiki/File:251012_Janusz_Korczak_monument_at_Jewish_Cemetery_in_Warsaw_-_02.jpg"
        },
        "sqrImageOpt": {
          "id": 361463,
          "name": "_small",
          "creditTo": "Jolanta Dyr",
          "creditLink": "https://commons.wikimedia.org/wiki/File:251012_Janusz_Korczak_monument_at_Jewish_Cemetery_in_Warsaw_-_02.jpg"
        },
        "mainType": {
          "id": 110434,
          "name": "Cemeteries",
          "no": 1000,
          "legalName": "cemeteries",
          "hasMenuItem": false,
          "shortTitle": "Cemeteries",
          "cityId": 673
        },
        "no": 26,
        "mainPaidActivity": {
          "id": 10298791,
          "vendor": "Viator",
          "vendorProductId": "6875JEWISH",
          "title": "Private Tour: Warsaw\u0027s Jewish Heritage by Retro Fiat",
          "description": "Trace the story of Warsaw’s Jewish community on this 4-hour private tour, by chauffeured vintage Fiat 125p. With insightful running commentary from your driver-guide, board your car and explore the World War II Jewish Ghetto district to visit the Ghetto Wall, Nożyk Synagogue, Jewish Cemetery and, if you wish, the Museum of the History of Polish Jews. Ask to see any places of particular interest, savor onboard snacks, and stop on route to enjoy an optional Jewish meal at a traditional restaurant (own expense). This private tour ensures the full attention of your guide.",
          "descriptionNoHtml": "Trace the story of Warsaw’s Jewish community on this 4-hour private tour, by chauffeured vintage Fiat 125p. With insightful running commentary from your driver-guide, board your car and explore the World War II Jewish Ghetto district to visit the Ghetto Wall, Nożyk Synagogue, Jewish Cemetery and, if you wish, the Museum of the History of Polish Jews. Ask to see any places of particular interest, savor onboard snacks, and stop on route to enjoy an optional Jewish meal at a traditional restaurant (own expense). This private tour ensures the full attention of your guide.",
          "price": "42.0",
          "link": "http://www.viator.com/tours/Warsaw/Private-Tour-Warsaws-Jewish-Heritage-by-Retro-Fiat/d528-6875JEWISH?eap\u003dvisitacity-\u003cSUBBRANDEDCODE\u003e-14055\u0026aid\u003dvba14055en",
          "paidActivityCatergoryList": [
            {
              "id": 109126,
              "name": "Private \u0026 Custom Tours",
              "legalName": "private--custom-tours",
              "cityId": 673,
              "no": 7,
              "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/22434/SITours/private-warsaw-city-tour-in-a-communist-fire-van-in-warsaw-253333.jpg",
              "vendor": "Viator"
            },
            {
              "id": 109138,
              "name": "Cultural \u0026 Theme Tours",
              "legalName": "cultural--theme-tours",
              "cityId": 673,
              "no": 4,
              "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/6875/SITours/private-tour-warsaw-s-jewish-heritage-by-retro-fiat-in-warsaw-172308.jpg",
              "vendor": "Viator"
            },
            {
              "id": 109139,
              "name": "Historical \u0026 Heritage Tours",
              "legalName": "historical--heritage-tours",
              "cityId": 673,
              "no": 11,
              "vendor": "Viator"
            },
            {
              "id": 109147,
              "name": "Cultural Tours",
              "legalName": "cultural-tours",
              "cityId": 673,
              "no": 6,
              "vendor": "Viator"
            },
            {
              "id": 112323,
              "name": "Top Activities",
              "legalName": "top-activities",
              "cityId": 673,
              "no": 2,
              "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/2275/SITours/half-day-city-sightseeing-tour-of-warsaw-in-warsaw-138641.jpg",
              "vendor": "Viator"
            },
            {
              "id": 112324,
              "name": "All Activities",
              "legalName": "all-activities",
              "cityId": 673,
              "no": 1,
              "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/2916/SITours/city-sightseeing-warsaw-hop-on-hop-off-tour-in-warsaw-534049.jpg",
              "vendor": "Viator"
            },
            {
              "id": 132688,
              "name": "Private Sightseeing Tours",
              "legalName": "private-sightseeing-tours",
              "cityId": 673,
              "no": 8,
              "vendor": "Viator"
            }
          ],
          "no": 1,
          "cityId": 673,
          "averageRating": 5.0,
          "reviewersNum": 30,
          "externalImageUrl": "http://cache-graphicslib.viator.com/graphicslib/thumbs360x240/6875/SITours/private-tour-warsaw-s-jewish-heritage-by-retro-fiat-in-warsaw-172308.jpg"
        },
        "parisPassSave": false,
        "parisPassSkipLine": false,
        "cityId": 673,
        "userItinerariesCount": 32,
        "averageVisitDuration": 57,
        "noPerUsers": 31,
        "calculatedRating": 3.0,
        "googlePlaceId": "ChIJfVXf5IHLHkcRBxYHPqcs_9g",
        "openHoursList": [
          {
            "id": 123061,
            "day": 0,
            "startTime": "Jan 1, 1970 9:00:00 AM",
            "endTime": "Jan 1, 1970 4:00:00 PM"
          },
          {
            "id": 123062,
            "day": 1,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 5:00:00 PM"
          },
          {
            "id": 123063,
            "day": 2,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 5:00:00 PM"
          },
          {
            "id": 123064,
            "day": 3,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 5:00:00 PM"
          },
          {
            "id": 123065,
            "day": 4,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 5:00:00 PM"
          },
          {
            "id": 123066,
            "day": 5,
            "startTime": "Jan 1, 1970 9:00:00 AM",
            "endTime": "Jan 1, 1970 1:00:00 PM"
          }
        ],
        "openingHoursText": "Monday: 10:00 AM – 5:00 PM,Tuesday: 10:00 AM – 5:00 PM,Wednesday: 10:00 AM – 5:00 PM,Thursday: 10:00 AM – 5:00 PM,Friday: 9:00 AM – 1:00 PM,Saturday: Closed,Sunday: 9:00 AM – 4:00 PM,"
      },
      {
        "id": 113559,
        "name": "Mausoleum of Struggle and Martyrdom",
        "legalName": "mausoleum-of-struggle-and-martyrdom",
        "description": "The Mausoleum of Struggle and Martyrdom is located in the building that was once used as the Nazi Gestapo headquarters during the German occupation of World War II. The Gestapo also used this location to imprison, interrogate, and torture thousands of Poles, most who did not survive. The museum commemorates these people, and gives visitors a comprehensive understanding of the dark period that was WWII Warsaw.\u003cbr/\u003eEnter the building and descend a set of wide stairs into the headquarters’ cellar. Inside the narrow corridor is a row of preserved prison cells, many with the metal shackles still attached. A \"Straßenbahn\" or “tram cell” is lined with rows of wooden benches. This is where inmates would be forced to wait their turn for interrogation and torture. A haunting interrogation room has been reconstructed, alongside a display of terrifying authentic torture instruments. The walls of the museum are covered in thousands of inscriptions of names, prison calendars, crosses, drawings, reflections on death, and prayers, placing visitors in the mindset and world of the people who suffered here terribly. \u003cbr/\u003eContinue through the narrow corridor to get to the museums interactive computer displays, where you can browse through an expansive archive of information on Warsaw, the Gestapo, and the insufferable treatment that many Polish citizens received here. So much information is provided here that it may be difficult to get through it all.\u003cbr/\u003eThe museum includes very dark and upsetting material, and is not suitable for young children.\u003cbr/\u003e",
        "descriptionNoHtml": "The Mausoleum of Struggle and Martyrdom is located in the building that was once used as the Nazi Gestapo headquarters during the German occupation of World War II. The Gestapo also used this location to imprison, interrogate, and torture thousands of Poles, most who did not survive. The museum commemorates these people, and gives visitors a comprehensive understanding of the dark period that was WWII Warsaw. Enter the building and descend a set of wide stairs into the headquarters’ cellar. Inside the narrow corridor is a row of preserved prison cells, many with the metal shackles still attached. A \"Straßenbahn\" or “tram cell” is lined with rows of wooden benches. This is where inmates would be forced to wait their turn for interrogation and torture. A haunting interrogation room has been reconstructed, alongside a display of terrifying authentic torture instruments. The walls of the museum are covered in thousands of inscriptions of names, prison calendars, crosses, drawings, reflections on death, and prayers, placing visitors in the mindset and world of the people who suffered here terribly. Continue through the narrow corridor to get to the museums interactive computer displays, where you can browse through an expansive archive of information on Warsaw, the Gestapo, and the insufferable treatment that many Polish citizens received here. So much information is provided here that it may be difficult to get through it all. The museum includes very dark and upsetting material, and is not suitable for young children.",
        "rating": 4.0,
        "contactInformation": "Address: aleja Jana Chrystiana Szucha 25, 00-580 Warszawa, Poland\nPhone Number: 22 629 49 19\nAdmission: 5-8 Pln\nOpening Hours: Wed-Sun 10am-5pm\nWeb: http://www.muzeum-niepodleglosci.pl/",
        "longitude": 52.2178146,
        "latitude": 21.0231667,
        "siteTypeList": [
          {
            "id": 110424,
            "name": "All Attractions",
            "no": 1,
            "legalName": "all-attractions",
            "imageOpt": {
              "id": 361438,
              "name": "old-town-square_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "All Attractions",
            "cityId": 673
          },
          {
            "id": 110428,
            "name": "Museums",
            "no": 3,
            "legalName": "museums",
            "imageOpt": {
              "id": 361442,
              "name": "royal-castle_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "Museums",
            "cityId": 673
          }
        ],
        "shortTitle": "Mausoleum of Struggle and Martyrdom",
        "subTitle": "Mauzoleum Walki i Męczeństwa",
        "shortDescription": "A grim reminder of the atrocities of the Nazi Gestapo and the treatment meted to prisoners during WWII",
        "imageOpt": {
          "id": 361372,
          "name": "mausoleum-of-struggle-and-martyrdom_horizontal_small",
          "creditTo": "Wistula",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Mausoleum_of_Struggle_and_Martyrdom,_Warsaw,_DSC_1467.JPG"
        },
        "imageMid": {
          "id": 361371,
          "name": "mausoleum-of-struggle-and-martyrdom_horizontal_mid",
          "creditTo": "Wistula",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Mausoleum_of_Struggle_and_Martyrdom,_Warsaw,_DSC_1467.JPG"
        },
        "sqrImageOpt": {
          "id": 361369,
          "name": "mausoleum-of-struggle-and-martyrdom_sqr_small",
          "creditTo": "Wistula",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Mausoleum_of_Struggle_and_Martyrdom,_Warsaw,_DSC_1467.JPG"
        },
        "mainType": {
          "id": 110428,
          "name": "Museums",
          "no": 3,
          "legalName": "museums",
          "imageOpt": {
            "id": 361442,
            "name": "royal-castle_horizontal_small"
          },
          "hasMenuItem": true,
          "shortTitle": "Museums",
          "cityId": 673
        },
        "no": 25,
        "parisPassSave": false,
        "parisPassSkipLine": false,
        "cityId": 673,
        "userItinerariesCount": 20,
        "averageVisitDuration": 43,
        "noPerUsers": 32,
        "calculatedRating": 3.0,
        "googlePlaceId": "ChIJ1f6IsObMHkcRtiXBYDRRPuA",
        "openHoursList": [
          {
            "id": 123056,
            "day": 0,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 5:00:00 PM"
          },
          {
            "id": 123057,
            "day": 3,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 5:00:00 PM"
          },
          {
            "id": 123058,
            "day": 4,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 5:00:00 PM"
          },
          {
            "id": 123059,
            "day": 5,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 5:00:00 PM"
          },
          {
            "id": 123060,
            "day": 6,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 5:00:00 PM"
          }
        ],
        "openingHoursText": "Monday: Closed,Tuesday: Closed,Wednesday: 10:00 AM – 5:00 PM,Thursday: 10:00 AM – 5:00 PM,Friday: 10:00 AM – 5:00 PM,Saturday: 10:00 AM – 5:00 PM,Sunday: 10:00 AM – 5:00 PM,"
      },
      {
        "id": 113555,
        "name": "Museum of Pawiak Prison",
        "legalName": "museum-of-pawiak-prison",
        "description": "Pawiak Prison was built in 1835 and served as a Czarist Russian prison until being utilized by the Nazis as an internment camp during World War II. An estimated 120,000 prisoners have passed through the prison, with 37,000 being executed, and 60,000 being sent to concentration camps. After its liquidation in 1944, the Nazis razed most of the prison to the ground. Several structures remained.\u003cbr\u003eYour visit begins with a courtyard memorial recalling the names of the concentration camps which the prison’s inmates were sent to. Surrounding the courtyard is a concrete wall with holes in it, evoking the sensation of entrapment and destruction. A small section of the original prison gate remains, and nearby is a bronze model of a tree which once stood on the site, now a site for obituaries and for laying flowers.\u003cbr\u003eInside the museum, Pawiak’s history is recounted from 1835 and on. Exhibitions are filled with prisoners’ belongings, drawings, texts, and photographs. In addition to the artifacts, the museum puts a large emphasis on the personal stories of the prisoners who passed through Pawiak Prison. In one exhibition, visitors listen to the inmates’ haunting personal accounts read aloud by actors.  During the playback, lights illuminate different objects in the room that are relevant to the story. Continue on through reconstructed prison cells, each one representative of a different time period of Pawiak’s existence. The museum ends with an exhibition dedicated to the history of the tree that once stood outside the prison, now represented by the bronze memorial tree. \u003cbr\u003e",
        "descriptionNoHtml": "Pawiak Prison was built in 1835 and served as a Czarist Russian prison until being utilized by the Nazis as an internment camp during World War II. An estimated 120,000 prisoners have passed through the prison, with 37,000 being executed, and 60,000 being sent to concentration camps. After its liquidation in 1944, the Nazis razed most of the prison to the ground. Several structures remained. Your visit begins with a courtyard memorial recalling the names of the concentration camps which the prison’s inmates were sent to. Surrounding the courtyard is a concrete wall with holes in it, evoking the sensation of entrapment and destruction. A small section of the original prison gate remains, and nearby is a bronze model of a tree which once stood on the site, now a site for obituaries and for laying flowers. Inside the museum, Pawiak’s history is recounted from 1835 and on. Exhibitions are filled with prisoners’ belongings, drawings, texts, and photographs. In addition to the artifacts, the museum puts a large emphasis on the personal stories of the prisoners who passed through Pawiak Prison. In one exhibition, visitors listen to the inmates’ haunting personal accounts read aloud by actors. During the playback, lights illuminate different objects in the room that are relevant to the story. Continue on through reconstructed prison cells, each one representative of a different time period of Pawiak’s existence. The museum ends with an exhibition dedicated to the history of the tree that once stood outside the prison, now represented by the bronze memorial tree.",
        "rating": 4.0,
        "contactInformation": "Address: Dzielna 24/26, 00-001 Warszawa, Poland\nPhone Number: 22 831 92 89\nAdmission: 6 Pln\nOpening Hours: Wed-Sun 10am-5pm\nWeb: http://www.muzeum-niepodleglosci.pl/pawiak/",
        "longitude": 52.2462891,
        "latitude": 20.9909383,
        "siteTypeList": [
          {
            "id": 110424,
            "name": "All Attractions",
            "no": 1,
            "legalName": "all-attractions",
            "imageOpt": {
              "id": 361438,
              "name": "old-town-square_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "All Attractions",
            "cityId": 673
          },
          {
            "id": 110428,
            "name": "Museums",
            "no": 3,
            "legalName": "museums",
            "imageOpt": {
              "id": 361442,
              "name": "royal-castle_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "Museums",
            "cityId": 673
          }
        ],
        "shortTitle": "Museum of Pawiak Prison",
        "subTitle": "",
        "shortDescription": "Displays the history of the famous largest political prison in Poland during the Nazi occupation",
        "imageOpt": {
          "id": 361352,
          "name": "museum-of-pawiak-prison_horizontal_small",
          "creditTo": "Boston9",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Muzeum_Wi%C4%99zienia_Pawiak_005.JPG"
        },
        "imageMid": {
          "id": 361351,
          "name": "museum-of-pawiak-prison_horizontal_mid",
          "creditTo": "Boston9",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Muzeum_Wi%C4%99zienia_Pawiak_005.JPG"
        },
        "sqrImageOpt": {
          "id": 361349,
          "name": "museum-of-pawiak-prison_sqr_small",
          "creditTo": "Boston9",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Muzeum_Wi%C4%99zienia_Pawiak_005.JPG"
        },
        "mainType": {
          "id": 110428,
          "name": "Museums",
          "no": 3,
          "legalName": "museums",
          "imageOpt": {
            "id": 361442,
            "name": "royal-castle_horizontal_small"
          },
          "hasMenuItem": true,
          "shortTitle": "Museums",
          "cityId": 673
        },
        "no": 21,
        "parisPassSave": false,
        "parisPassSkipLine": false,
        "cityId": 673,
        "userItinerariesCount": 20,
        "averageVisitDuration": 75,
        "noPerUsers": 33,
        "calculatedRating": 3.0,
        "googlePlaceId": "ChIJ71cc237MHkcRBfxAPIwreqo",
        "openHoursList": [
          {
            "id": 123039,
            "day": 0,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 5:00:00 PM"
          },
          {
            "id": 123040,
            "day": 3,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 5:00:00 PM"
          },
          {
            "id": 123041,
            "day": 4,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 5:00:00 PM"
          },
          {
            "id": 123042,
            "day": 5,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 5:00:00 PM"
          },
          {
            "id": 123043,
            "day": 6,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 5:00:00 PM"
          }
        ],
        "openingHoursText": "Monday: Closed,Tuesday: Closed,Wednesday: 10:00 AM – 5:00 PM,Thursday: 10:00 AM – 5:00 PM,Friday: 10:00 AM – 5:00 PM,Saturday: 10:00 AM – 5:00 PM,Sunday: 10:00 AM – 5:00 PM,"
      },
      {
        "id": 113554,
        "name": "Poster Museum",
        "legalName": "poster-museum",
        "description": "The first of its kind in the world, Warsaw’s Poster Museum celebrates Polish and world history through the medium of posters and graphic design. The museum was opened in the 1960s, a time when Poland was ruled by Communism, and its citizens were sorely in need of the vibrancy and color that posters can provide. Located nearby Wilanów Palace, the museum hosts about 36,000 Polish posters and nearly 25,000 foreign ones, making it the world’s largest poster collection. Visitors will be astounded by the museum collection’s diversity and extensiveness.\u003cbr\u003eWith a small space, and a massive collection, the museum is required to rotate through temporary exhibitions, only showing a fraction of their full archives at a time. This means that you are never quite sure which exhibition the museum will be presenting that week. Some days you may get to view different cover images from George Orwell\u0027s “1984,” and another week there will be an exhibition on the media’s body shaming of women in contemporary times. Some other past exhibitions include American posters from World War II era supporting Poland, posters from around the world combatting racism, posters supporting women’s rights, and the effect Chairman Mao had on Chinese government. \u003cbr\u003eA small gift shop includes souvenirs and books on graphic design, postcards, and catalogues of posters from around the world. The museum makes an especially interesting contrasting experience when done either before or after a visit to Wilanów Palace, filled with its historic and classical paintings.\u003cbr\u003e",
        "descriptionNoHtml": "The first of its kind in the world, Warsaw’s Poster Museum celebrates Polish and world history through the medium of posters and graphic design. The museum was opened in the 1960s, a time when Poland was ruled by Communism, and its citizens were sorely in need of the vibrancy and color that posters can provide. Located nearby Wilanów Palace, the museum hosts about 36,000 Polish posters and nearly 25,000 foreign ones, making it the world’s largest poster collection. Visitors will be astounded by the museum collection’s diversity and extensiveness. With a small space, and a massive collection, the museum is required to rotate through temporary exhibitions, only showing a fraction of their full archives at a time. This means that you are never quite sure which exhibition the museum will be presenting that week. Some days you may get to view different cover images from George Orwell\u0027s “1984,” and another week there will be an exhibition on the media’s body shaming of women in contemporary times. Some other past exhibitions include American posters from World War II era supporting Poland, posters from around the world combatting racism, posters supporting women’s rights, and the effect Chairman Mao had on Chinese government. A small gift shop includes souvenirs and books on graphic design, postcards, and catalogues of posters from around the world. The museum makes an especially interesting contrasting experience when done either before or after a visit to Wilanów Palace, filled with its historic and classical paintings.",
        "rating": 4.0,
        "contactInformation": "Address: Stanisława Kostki Potockiego 10/16, 02-958 Warszawa, Poland\nPhone Number: 22 842 48 48\nAdmission: 11 Pln\nOpening Hours: Mon 12pm-4pm, Tu-Sun 10am-4pm\nWeb: http://www.postermuseum.pl/",
        "longitude": 52.1640046,
        "latitude": 21.0881329,
        "siteTypeList": [
          {
            "id": 110424,
            "name": "All Attractions",
            "no": 1,
            "legalName": "all-attractions",
            "imageOpt": {
              "id": 361438,
              "name": "old-town-square_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "All Attractions",
            "cityId": 673
          },
          {
            "id": 110428,
            "name": "Museums",
            "no": 3,
            "legalName": "museums",
            "imageOpt": {
              "id": 361442,
              "name": "royal-castle_horizontal_small"
            },
            "hasMenuItem": true,
            "shortTitle": "Museums",
            "cityId": 673
          }
        ],
        "shortTitle": "Poster Museum",
        "subTitle": "Muzeum Plakatu",
        "shortDescription": "Explore the largest collection of over 55,000 posters",
        "imageOpt": {
          "id": 361347,
          "name": "poster-museum_horizontal_small",
          "creditTo": "Boston9",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Muzeum_Plakatu_w_Wilanowie_011.JPG"
        },
        "imageMid": {
          "id": 361346,
          "name": "poster-museum_horizontal_mid",
          "creditTo": "Boston9",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Muzeum_Plakatu_w_Wilanowie_011.JPG"
        },
        "sqrImageOpt": {
          "id": 361344,
          "name": "poster-museum_sqr_small",
          "creditTo": "Boston9",
          "creditLink": "https://commons.wikimedia.org/wiki/File:Muzeum_Plakatu_w_Wilanowie_011.JPG"
        },
        "mainType": {
          "id": 110428,
          "name": "Museums",
          "no": 3,
          "legalName": "museums",
          "imageOpt": {
            "id": 361442,
            "name": "royal-castle_horizontal_small"
          },
          "hasMenuItem": true,
          "shortTitle": "Museums",
          "cityId": 673
        },
        "no": 20,
        "parisPassSave": false,
        "parisPassSkipLine": false,
        "cityId": 673,
        "userItinerariesCount": 6,
        "averageVisitDuration": 53,
        "noPerUsers": 34,
        "calculatedRating": 3.0,
        "googlePlaceId": "ChIJ37ffT0YtGUcRsfkbQrRJqWc",
        "openHoursList": [
          {
            "id": 123032,
            "day": 0,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 4:00:00 PM"
          },
          {
            "id": 123033,
            "day": 1,
            "startTime": "Jan 1, 1970 12:00:00 PM",
            "endTime": "Jan 1, 1970 4:00:00 PM"
          },
          {
            "id": 123034,
            "day": 2,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 4:00:00 PM"
          },
          {
            "id": 123035,
            "day": 3,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 4:00:00 PM"
          },
          {
            "id": 123036,
            "day": 4,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 4:00:00 PM"
          },
          {
            "id": 123037,
            "day": 5,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 4:00:00 PM"
          },
          {
            "id": 123038,
            "day": 6,
            "startTime": "Jan 1, 1970 10:00:00 AM",
            "endTime": "Jan 1, 1970 4:00:00 PM"
          }
        ],
        "openingHoursText": "Monday: 12:00 – 4:00 PM,Tuesday: 10:00 AM – 4:00 PM,Wednesday: 10:00 AM – 4:00 PM,Thursday: 10:00 AM – 4:00 PM,Friday: 10:00 AM – 4:00 PM,Saturday: 10:00 AM – 4:00 PM,Sunday: 10:00 AM – 4:00 PM,"
      }
    ];
  }
}
