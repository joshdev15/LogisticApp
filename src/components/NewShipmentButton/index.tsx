import {FC} from 'react';
import {
  ImageBackground,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AppText from '@components/AppText';
import useAPI from '@hooks/useAPI';
import Ship from '@svg/ship';
import PromoImg from '@images/promo.png';
import styles from './styles';

interface INewShipmentButton {
  onPress: () => void;
}

const NewShipmentButton: FC<INewShipmentButton> = ({onPress}) => {
  const {locationPermissions, requestLocationPermissions} = useAPI();
  const {navigate} = useNavigation();
  const pseudoOnPress = () => {
    if (!locationPermissions) {
      requestLocationPermissions();
      return;
    }

    onPress();
  };

  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={() => navigate('Test')}>
        <ImageBackground
          source={PromoImg}
          style={styles.promo}
          imageStyle={styles.promoInner}>
          <AppText text="Shipping Offers" style={styles.promoTxt} />
        </ImageBackground>
      </TouchableNativeFeedback>

      <TouchableOpacity onPress={pseudoOnPress} style={styles.button}>
        <AppText text="New Shipment" style={styles.text} />
        <Ship width={50} height={50} />
      </TouchableOpacity>
    </View>
  );
};

export default NewShipmentButton;
