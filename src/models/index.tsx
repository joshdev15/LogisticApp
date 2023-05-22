import {ReactElement, Dispatch, SetStateAction} from 'react';

export interface ILocation {
  lat: number;
  lng: number;
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
  destination: ILocation;
  status: EStatus;
  id: string;
}

export interface ISize {
  width: string | number;
  height: string | number;
}

export interface IContext {
  children: ReactElement;
}

export interface IApiContext {
  shipments: IShipment[];
  setShipments: Dispatch<SetStateAction<IShipment[]>>;
  welcome: any;
  auth: any;
  isLogin: boolean;
  forceAuth: any;
  currentShipment: IShipment | undefined;
  setCurrentShipment: Dispatch<SetStateAction<IShipment | undefined>>;
  locationPermissions: boolean;
  requestLocationPermissions: any;
}
