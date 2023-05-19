import {FC} from 'react';
import {Platform, TextInput, View} from 'react-native';
import styles from './styles';

interface IField {
  value: string;
  onChangeText: () => void;
  placeholder: string;
}

const Field: FC<IField> = ({value, onChangeText, placeholder}) => {
  return (
    <View style={Platform.OS === 'ios' ? styles.fieldIOS : styles.fieldAndroid}>
      <TextInput
        autoCapitalize="none"
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  );
};

export default Field;
