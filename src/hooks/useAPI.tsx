import {useContext} from 'react';
import {ApiContext, IApiContext} from '../contexts/ApiContext';

const useAPI = () => {
  const {shipments, setShipments, welcome} =
    useContext<IApiContext>(ApiContext);

  return {shipments, setShipments, welcome};
};

export default useAPI;
