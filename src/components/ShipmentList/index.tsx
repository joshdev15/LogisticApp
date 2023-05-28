import {View} from 'react-native';
import useAPI from '@hooks/useAPI';
import ShipmentCard from '@components/ShipmentCard';

const ShipmentList = () => {
  const {shipments} = useAPI();
  return (
    <View>
      {shipments.map(ship => (
        <ShipmentCard {...ship} key={(Math.random() * 10000).toFixed(2)} />
      ))}
    </View>
  );
};

export default ShipmentList;
