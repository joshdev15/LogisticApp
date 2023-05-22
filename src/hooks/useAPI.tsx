import {useContext} from 'react';
import {ApiContext} from '../contexts/ApiContext';
import {IApiContext} from '../models';

const useAPI = () => {
  const {
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
  } = useContext<IApiContext>(ApiContext);

  return {
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
  };
};

export default useAPI;
