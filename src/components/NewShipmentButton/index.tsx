import {FC} from 'react';
import {ImageBackground, TouchableOpacity, View} from 'react-native';
import Ship from '../../assets/svg/ship';
import PromoImg from '../../assets/images/promo.png';
import AppText from '../AppText';
import styles from './styles';
import useAPI from '../../hooks/useAPI';

interface INewShipmentButton {
  onPress: () => void;
}

const NewShipmentButton: FC<INewShipmentButton> = ({onPress}) => {
  const {locationPermissions, requestLocationPermissions} = useAPI();

  const pseudoOnPress = () => {
    if (!locationPermissions) {
      requestLocationPermissions();
      return;
    }

    onPress();
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={PromoImg}
        style={styles.promo}
        imageStyle={styles.promoInner}>
        <AppText text="Shipping Offers" style={styles.promoTxt} />
      </ImageBackground>

      <TouchableOpacity onPress={pseudoOnPress} style={styles.button}>
        <AppText text="New Shipment" style={styles.text} />
        <Ship width={50} height={50} />
      </TouchableOpacity>
    </View>
  );
};

export default NewShipmentButton;
