import {FC} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import Button from '../../components/Button';
import AppText from '../../components/AppText';

interface IEmptyState {
  goToHome: any;
  style: StyleProp<ViewStyle>;
}

const EmptyState: FC<IEmptyState> = ({style, goToHome}) => {
  return (
    <View style={style}>
      <AppText text={"We can't find this shipment, sorry..."} />
      <Button text="Back" onPress={goToHome} />
    </View>
  );
};

export default EmptyState;
