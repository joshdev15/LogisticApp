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
      lat: 4.711863,
      lng: -74.0739219,
    },
    destination: {
      lat: 4.702429,
      lng: -74.0440309,
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
      lat: 4.711863,
      lng: -74.0739219,
    },
    destination: {
      lat: 4.702429,
      lng: -74.0440309,
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
      lat: 4.711863,
      lng: -74.0739219,
    },
    destination: {
      lat: 4.702429,
      lng: -74.0440309,
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
      lat: 4.711863,
      lng: -74.0739219,
    },
    destination: {
      lat: 4.702429,
      lng: -74.0440309,
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
      lat: 4.711863,
      lng: -74.0739219,
    },
    destination: {
      lat: 4.702429,
      lng: -74.0440309,
    },
    status: EStatus.delivered,
  },
];
