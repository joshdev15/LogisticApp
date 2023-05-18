import {IShipment, EStatus} from '../models';

export const shipments: IShipment[] = [
  {
    id: (Math.random() * 100000).toString(),
    name: 'Primera',
    author: 'Joshua',
    owner: 'Sr. Uno',
    cost: 50.5,
    location: {
      lat: '-74.0445442',
      lng: '4.7022765',
    },
    status: EStatus.ordered,
  },
  {
    id: (Math.random() * 100000).toString(),
    name: 'Segunda',
    author: 'Joshua',
    owner: 'Sr. Dos',
    cost: 50.5,
    location: {
      lat: '5.55',
      lng: '5.55',
    },
    status: EStatus.packaging,
  },
  {
    id: (Math.random() * 100000).toString(),
    name: 'Segunda',
    author: 'Joshua',
    owner: 'Sr. Dos',
    cost: 50.5,
    location: {
      lat: '5.55',
      lng: '5.55',
    },
    status: EStatus.way,
  },
  {
    id: (Math.random() * 100000).toString(),
    name: 'Segunda',
    author: 'Joshua',
    owner: 'Sr. Dos',
    cost: 50.5,
    location: {
      lat: '5.55',
      lng: '5.55',
    },
    status: EStatus.arrived,
  },
  {
    id: (Math.random() * 100000).toString(),
    name: 'Segunda',
    author: 'Joshua',
    owner: 'Sr. Dos',
    cost: 50.5,
    location: {
      lat: '5.55',
      lng: '5.55',
    },
    status: EStatus.delivered,
  },
];