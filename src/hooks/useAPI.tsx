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
  };
};

export default useAPI;
