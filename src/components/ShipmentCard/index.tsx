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
  ordered: <Ordered width={25} height={25} />,
  packaging: <Packaging width={25} height={25} />,
  way: <Way width={25} height={25} />,
  arrived: <Arrived width={25} height={25} />,
  delivered: <Done width={25} height={25} />,
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
  const {setCurrentShipment, locationPermissions, requestLocationPermissions} =
    useAPI();
  const status = ship.status.toString();
  const {navigate} = useNavigation();

  const goToDetails = () => {
    if (!locationPermissions) {
      requestLocationPermissions();
      return;
    }

    setCurrentShipment(ship);
    navigate(ROUTES.DETAILS);
  };

  return (
    <TouchableOpacity style={styles.ship} onPress={goToDetails}>
      <View style={styles.titleCont}>
        <View style={styles.titleAndAuthorCont}>
          <AppText text={ship.name} style={styles.name} />
          <View style={styles.authorCont}>
            <AppText text={'Author: '} style={styles.authorTxt} />
            <AppText text={ship.author} style={styles.authorTxt} />
          </View>
        </View>

        <View style={styles.statusCont}>
          <AppText text={status} style={styles.statusTxt} />
          {currentIcon[status]}
        </View>
      </View>

      <View style={styles.lineCont}>
        <ShipLine keyValue="Owner" value={ship.owner} />
        <ShipLine keyValue="Cost" value={`${ship.cost}`} />
      </View>
    </TouchableOpacity>
  );
};

export default ShipmentCard;
