import {FC} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {IShipment} from '../../models';
import AppText from '../AppText';
import styles from './styles';
import Arrived from '../../assets/svg/arrived';
import Done from '../../assets/svg/done';
import Ordered from '../../assets/svg/ordered';
import Packaging from '../../assets/svg/packaging';
import Way from '../../assets/svg/way';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../constants/routes';
import useAPI from '../../hooks/useAPI';

export const currentIcon: any = {
  ordered: <Ordered width={30} height={30} />,
  packaging: <Packaging width={30} height={30} />,
  way: <Way width={30} height={30} />,
  arrived: <Arrived width={30} height={30} />,
  delivered: <Done width={30} height={30} />,
};

interface IShipLine {
  keyValue: string;
  value: string;
}

export const ShipLine: FC<IShipLine> = ({keyValue, value}) => {
  return (
    <View style={styles.shipline}>
      <AppText text={`${keyValue}: `} style={styles.left} />
      <AppText text={value} style={styles.right} />
    </View>
  );
};

const ShipmentCard: FC<IShipment> = ship => {
  const {setCurrentShipment} = useAPI();
  const status = ship.status.toString();
  const {navigate} = useNavigation();

  const goToDetails = () => {
    setCurrentShipment(ship);
    navigate(ROUTES.DETAILS);
  };

  return (
    <TouchableOpacity style={styles.ship} onPress={goToDetails}>
      <AppText text={ship.name} style={styles.name} />

      <View style={styles.lineCont}>
        <ShipLine keyValue="Author" value={ship.author} />
        <ShipLine keyValue="Owner" value={ship.owner} />
        <ShipLine keyValue="Cost" value={`${ship.cost}`} />
      </View>

      <View style={styles.statusCont}>
        <AppText text={`Status: ${status}`} style={styles.statusTxt} />
        {currentIcon[status]}
      </View>
    </TouchableOpacity>
  );
};

export default ShipmentCard;
