import {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import AppText from '../AppText';
import styles from './styles';

interface IButton {
  text: string;
  onPress: () => void;
}

const Button: FC<IButton> = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <AppText text={text} style={styles.txt} />
    </TouchableOpacity>
  );
};

export default Button;
