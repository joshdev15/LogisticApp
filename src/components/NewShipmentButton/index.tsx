import {FC} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Ship from '../../assets/svg/ship';
import AppText from '../AppText';
import styles from './styles';

interface INewShipmentButton {
  onPress: () => void;
}

const NewShipmentButton: FC<INewShipmentButton> = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <AppText text="New Shipment" style={styles.text} />
        <Ship width={20} height={20} />
      </TouchableOpacity>
    </View>
  );
};

export default NewShipmentButton;
