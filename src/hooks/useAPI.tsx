import {useContext} from 'react';
import {ApiContext} from '@contexts/ApiContext';
import {IApiContext} from '@models';

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
    addShipment,
    getAllShipments,
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
    addShipment,
    getAllShipments,
  };
};

export default useAPI;
