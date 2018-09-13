export interface DistanceMatrixData {
  id: number;
  originSiteId: number;
  destinationSiteId: number;
  distanceMeters: number;
  durationSeconds: number;
  type: Type;
  fetchTriesNum: number;
  lastUpdate: Date;
  hasTransit: boolean;
}

export enum Type {
  TransitCar = 'transit_car',
  TransitPublic = 'transit_public',
  Walking = 'walking'
}
