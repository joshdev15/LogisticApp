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
import {encode} from 'base-64';

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
}

export const ApiContext = createContext<IApiContext>({
  shipments: [],
  setShipments: () => {},
  welcome: async () => {},
  auth: async () => {},
  isLogin: false,
  forceAuth: async () => {},
});

const API_URL = 'http://localhost:9876';

const ApiProvider: FC<IContext> = ({children}) => {
  const [shipments, setShipments] = useState(shipmentsData);
  const [isLogin, setLogin] = useState(false);

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

  const auth = async (user: string, pass: string) => {
    const tmpfmt = encode(`${user}:${pass}`);
    console.log(tmpfmt);

    try {
      const res = await fetch(`${API_URL}/api/fakeauth`, {
        headers: {
          Authorization: `Basic ${tmpfmt}`,
        },
      });
      console.log(res);
      const json = await res.json();
      console.log(json);
      setLogin(json.auth);
    } catch (e) {
      console.log(e);
    }
  };

  const forceAuth = async () => {
    try {
      setLogin(true);
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
        auth,
        isLogin,
        forceAuth,
      }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;
