import {createContext, useState, FC} from 'react';
import {Platform} from 'react-native';
import {IApiContext, IContext, IShipment} from '../models';
import {shipmentsData} from '../testData';
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
});

const API_URL = 'http://localhost:9876';

const ApiProvider: FC<IContext> = ({children}) => {
  const [shipments, setShipments] = useState(shipmentsData);
  const [isLogin, setLogin] = useState(false);
  const [locationPermissions, setLocationPermissions] = useState(false);
  const [currentShipment, setCurrentShipment] = useState<
    IShipment | undefined
  >();

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

  const requestLocationPermissions = async () => {
    try {
      const granted = await request(
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
          : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      );

      console.log('granted status', granted === 'granted');
      setLocationPermissions(granted === 'granted');
    } catch (err) {
      console.warn(err);
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
      }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;
