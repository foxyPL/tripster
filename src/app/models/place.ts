import { ImageOpt, PlaceType } from '@app/models/placeType';

export interface PlaceModel {
    id:                   number;
    name:                 string;
    legalName:            string;
    description:          string;
    descriptionNoHtml:    string;
    rating:               number;
    contactInformation:   string;
    longitude:            number;
    latitude:             number;
    siteTypeList:         PlaceType[];
    shortTitle:           string;
    subTitle:             string;
    shortDescription:     string;
    imageOpt:             ImageOpt;
    imageMid:             ImageOpt;
    sqrImageOpt:          ImageOpt;
    mainType:             MainType;
    no:                   number;
    parisPassSave:        boolean;
    parisPassSkipLine:    boolean;
    cityId:               number;
    userItinerariesCount: number;
    averageVisitDuration: number;
    noPerUsers:           number;
    calculatedRating:     number;
    googlePlaceId:        string;
    openHoursList:        OpenHoursList[];
    openingHoursText?:    string;
}

export interface MainType {
    id:          number;
    name:        string;
    no:          number;
    legalName:   string;
    hasMenuItem: boolean;
    shortTitle:  string;
    cityId:      number;
    imageOpt?:   ImageOptClass;
}

export interface ImageOptClass {
    id:   number;
    name: string;
}

export interface OpenHoursList {
    id:        number;
    day:       number;
    startTime: Date;
    endTime:   Date;
}
