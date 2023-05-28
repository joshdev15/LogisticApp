import {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import AppText from '@components/AppText';
import styles from './styles';

interface IButton {
  text: string;
  onPress: () => void;
  disabled?: boolean;
}

const Button: FC<IButton> = ({text, onPress, disabled}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={disabled ? styles.btnDisabled : styles.btn}
      disabled={disabled}>
      <AppText text={text} style={disabled ? styles.txtDisabled : styles.txt} />
    </TouchableOpacity>
  );
};

export default Button;
