import {encode} from 'base-64';
import {IShipment, EStatus} from '../models';

export const shipmentsData: IShipment[] = [
  {
    id: encode('Primera'),
    name: 'Primera',
    author: 'Joshua',
    owner: 'Sr. Uno',
    cost: 50.5,
    location: {
      lat: -74.0445442,
      lng: 4.7022765,
    },
    status: EStatus.ordered,
  },
  {
    id: encode('Segunda'),
    name: 'Segunda',
    author: 'Joshua',
    owner: 'Sr. Dos',
    cost: 50.5,
    location: {
      lat: -74.0445442,
      lng: 4.7022765,
    },
    status: EStatus.packaging,
  },
  {
    id: encode('Tercera'),
    name: 'Tercera',
    author: 'Joshua',
    owner: 'Sr. Dos',
    cost: 50.5,
    location: {
      lat: -74.0445442,
      lng: 4.7022765,
    },
    status: EStatus.way,
  },
  {
    id: encode('Cuarta'),
    name: 'Cuarta',
    author: 'Joshua',
    owner: 'Sr. Dos',
    cost: 50.5,
    location: {
      lat: -74.0445442,
      lng: 4.7022765,
    },
    status: EStatus.arrived,
  },
  {
    id: encode('Quinta'),
    name: 'Quinta',
    author: 'Joshua',
    owner: 'Sr. Dos',
    cost: 50.5,
    location: {
      lat: -74.0445442,
      lng: 4.7022765,
    },
    status: EStatus.delivered,
  },
];
