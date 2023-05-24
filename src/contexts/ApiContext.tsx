import {createContext, useState, FC} from 'react';
import {Platform} from 'react-native';
import {IApiContext, IContext, IShipment} from '../models';
// import {shipmentsData} from '../testData';
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
  const [shipments, setShipments] = useState([]);
  const [isLogin, setLogin] = useState(false);
  const [apiIsConnected, setApiConnection] = useState(false);
  const [locationPermissions, setLocationPermissions] = useState(false);
  const [currentShipment, setCurrentShipment] = useState<
    IShipment | undefined
  >();

  // API Call
  const welcome = async () => {
    try {
      const res = await fetch(API_URL);
      const json = await res.json();
      setApiConnection(true);
      console.log(json.msg);
      getAllShipments();
    } catch (e) {
      console.log(e);
    }
  };

  const getAllShipments = async () => {
    setShipments([]);
    try {
      const res = await fetch(`${API_URL}/api/shipments`);
      const json = await res.json();
      setShipments(json.shipments);
    } catch (e) {
      console.log(e);
    }
  };

  const auth = async (user: string, pass: string) => {
    const tmpfmt = encode(`${user}:${pass}`);

    try {
      const res = await fetch(`${API_URL}/api/fakeauth`, {
        headers: {
          Authorization: `Basic ${tmpfmt}`,
        },
      });
      const json = await res.json();
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

  const requestLocationPermissions = async () => {
    try {
      const granted = await request(
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
          : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      );

      setLocationPermissions(granted === 'granted');
    } catch (err) {
      console.warn(err);
    }
  };

  const addShipment = async (shipment: IShipment) => {
    const copy = [...shipments];
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
        console.log(e);
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
      }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;
