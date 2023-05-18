import {View} from 'react-native';
import {shipments} from '../../testData';
import ShipmentCard from '../ShipmentCard';

const ShipmentList = () => {
  return (
    <View>
      {shipments.map(ship => (
        <ShipmentCard {...ship} key={(Math.random() * 10000).toFixed(2)} />
      ))}
    </View>
  );
};

export default ShipmentList;
