export interface PlaceType {
  id: number;
  name: string;
  no: number;
  legalName: string;
  imageOpt?: ImageOpt;
  hasMenuItem: boolean;
  shortTitle: string;
  cityId: number;
}

export interface ImageOpt {
  id: number;
  name: string;
  creditTo?: string;
  creditLink?: string;
}
