import {useContext} from 'react';
import {ApiContext, IApiContext} from '../contexts/ApiContext';

const useAPI = () => {
  const {shipments, setShipments, welcome, auth, isLogin, forceAuth} =
    useContext<IApiContext>(ApiContext);

  return {shipments, setShipments, welcome, auth, isLogin, forceAuth};
};

export default useAPI;
