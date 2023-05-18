import {FC} from 'react';
import {View} from 'react-native';
import AppText from '../AppText';
import styles from './style';

interface IViewTitle {
  value: string;
}

const ViewTitle: FC<IViewTitle> = ({value}) => {
  return (
    <View style={styles.container}>
      <AppText text={value} style={styles.txt} />
    </View>
  );
};

export default ViewTitle;
