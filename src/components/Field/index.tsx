import {FC} from 'react';
import {Platform, TextInput, View} from 'react-native';
import AppText from '@components/AppText';
import styles from './styles';

interface IField {
  value: string;
  onChangeText: (e: string) => void;
  placeholder: string;
  label?: string;
}

const Field: FC<IField> = ({value, onChangeText, placeholder, label}) => {
  return (
    <>
      {label && (
        <View style={styles.labelLine}>
          <AppText text={label} style={styles.label} />
        </View>
      )}
      <View
        style={Platform.OS === 'ios' ? styles.fieldIOS : styles.fieldAndroid}>
        <TextInput
          autoCapitalize="none"
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
        />
      </View>
    </>
  );
};

export default Field;
