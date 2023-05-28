import {createContext, useState, FC} from 'react';
import {Platform} from 'react-native';
import {IApiContext, IContext, IShipment} from '@models';
import {encode} from 'base-64';
import {request, PERMISSIONS} from 'react-native-permissions';

export const ApiContext = createContext<IApiContext>({
  shipments: [],
  setShipments: () => {},
  welcome: async () => {},
  auth: async () => {},
  isLogin: false,
  forceAuth: async () => {},
  currentShipment: undefined,
  setCurrentShipment: () => {},
  locationPermissions: false,
  requestLocationPermissions: () => {},
  addShipment: () => {},
  getAllShipments: () => {},
});

const API_URL = 'http://localhost:9876';

const ApiProvider: FC<IContext> = ({children}) => {
  const [shipments, setShipments] = useState<IShipment[]>([]);
  const [isLogin, setLogin] = useState(false);
  const [apiIsConnected, setApiConnection] = useState(false);
  const [locationPermissions, setLocationPermissions] = useState(false);
  const [currentShipment, setCurrentShipment] = useState<
    IShipment | undefined
  >();

  // API Call
  const welcome = async () => {
    try {
      const res = await fetch(API_URL, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await res.json();
      setApiConnection(true);
      console.log(json.msg);
      getAllShipments();
    } catch (e) {
      console.log(Platform.OS, e);
    }
  };

  const getAllShipments = async () => {
    setShipments([]);
    try {
      const res = await fetch(`${API_URL}/api/shipments`);
      const json = await res.json();
      setShipments(json.shipments);
    } catch (e) {
      console.log(Platform.OS, e);
    }
  };

  const auth = async (user: string, pass: string) => {
    const tmpfmt = encode(`${user}:${pass}`);

    try {
      console.log('Here 1');

      const res = await fetch(`${API_URL}/api/fakeauth`, {
        headers: {
          Authorization: `Basic ${tmpfmt}`,
        },
      });

      console.log('Here 2');
      const json = await res.json();
      setLogin(json.auth);
      console.log('Here 3');
    } catch (e) {
      console.log(Platform.OS, e);
      console.log('Not Here');
    }
  };

  const forceAuth = async () => {
    try {
      setLogin(true);
    } catch (e) {
      console.log(Platform.OS, e);
    }
  };

  const requestLocationPermissions = async () => {
    try {
      const granted = await request(
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
          : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      );

      setLocationPermissions(granted === 'granted');
    } catch (e) {
      console.log(Platform.OS, e);
    }
  };

  const addShipment = async (shipment: IShipment) => {
    const copy: IShipment[] = [...shipments];
    copy.push(shipment);
    setShipments(copy);

    if (apiIsConnected) {
      try {
        const res = await fetch(`${API_URL}/api/shipment`, {
          method: 'POST',
          body: JSON.stringify(shipment),
        });

        console.log('RES', res);
      } catch (e) {
        console.log(Platform.OS, e);
      }
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
        currentShipment,
        setCurrentShipment,
        locationPermissions,
        requestLocationPermissions,
        addShipment,
        getAllShipments,
      }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;
