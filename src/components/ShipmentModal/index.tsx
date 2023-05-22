import {FC} from 'react';
import {
  Modal,
  ScrollView,
  View,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AppText from '../AppText';

interface IShipmentModal {
  open: boolean;
  setOpen: () => void;
}

const ShipmentModal: FC<IShipmentModal> = ({open, setOpen}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Modal visible={open} animated animationType="slide">
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View>
          <TouchableOpacity onPress={setOpen}>
            <AppText text="Close" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Modal>
  );
};

export default ShipmentModal;
