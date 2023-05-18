export interface ILocation {
  lat: string | number;
  lng: string | number;
}

export enum EStatus {
  ordered = 'ordered',
  packaging = 'packaging',
  way = 'way',
  arrived = 'arrived',
  delivered = 'delivered',
}

export interface IShipment {
  name: string;
  author: string;
  owner: string;
  cost: number;
  location: ILocation;
  status: EStatus;
  id: string;
}

export interface ISize {
  width: string | number;
  height: string | number;
}
