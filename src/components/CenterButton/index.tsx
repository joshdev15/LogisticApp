import {FC} from 'react';
import {TouchableOpacity, View} from 'react-native';
import AppText from '../AppText';
import styles from './styles';

interface ICenterButton {
  onPress: () => void;
}

const CenterButton: FC<ICenterButton> = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <AppText text={'X'} />
      </TouchableOpacity>
    </View>
  );
};

export default CenterButton;
