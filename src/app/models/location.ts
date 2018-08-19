
export interface LocationModel {
    id: number;
    name: string;
    legalName: string;
    description: string;
    descriptionNoHtml: string;
    rating: number;
    contactInformation: string;
    longitude: number;
    latitude: number;
    shortTitle: string;
    subTitle: string;
    shortDescription: string;
    averageVisitDuration: number;
    calculatedRating: number;
    mainType: MainType;

}

export interface MainType {
    name: string;
}


