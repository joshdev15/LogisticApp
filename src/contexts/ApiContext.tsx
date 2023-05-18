import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  FC,
  ReactElement,
} from 'react';
import {IShipment} from '../models';
import {shipmentsData} from '../testData';

export interface IApiContext {
  shipments: IShipment[];
  setShipments: Dispatch<SetStateAction<IShipment[]>>;
  welcome: any;
}

export interface IContext {
  children: ReactElement;
}

export const ApiContext = createContext<IApiContext>({
  shipments: [],
  setShipments: () => {},
  welcome: async () => {},
});

const API_URL = 'http://localhost:9876';

const ApiProvider: FC<IContext> = ({children}) => {
  const [shipments, setShipments] = useState(shipmentsData);

  // API Call
  const welcome = async () => {
    try {
      const res = await fetch(API_URL);
      const json = await res.json();
      console.log(json.msg);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ApiContext.Provider
      value={{
        shipments,
        setShipments,
        welcome,
      }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;
