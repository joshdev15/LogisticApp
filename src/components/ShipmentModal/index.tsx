import {FC, useState, useEffect} from 'react';
import {
  Modal,
  ScrollView,
  View,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AppText from '../AppText';
import MapView, {MapPressEvent, Marker} from 'react-native-maps';
import styles from './styles';
import {EStatus, ILocation, IShipment} from '../../models';
import Field from '../Field';
import Button from '../Button';
import {encode} from 'base-64';
import useAPI from '../../hooks/useAPI';

interface IShipmentModal {
  open: boolean;
  closeModal: () => void;
}

interface IInitialForm {
  name: string;
  owner: string;
  cost: string;
}

const initialRegion = {
  latitude: 4.702429,
  longitude: -74.0440309,
  latitudeDelta: 0.09,
  longitudeDelta: 0.09,
};

const initialForm = {
  name: '',
  owner: '',
  cost: '',
};

const ShipmentModal: FC<IShipmentModal> = ({open, closeModal}) => {
  const {addShipment} = useAPI();
  const [region, setRegion] = useState(initialRegion);
  const [location, setLocation] = useState<ILocation>();
  const [newShipment, setShipment] = useState<IShipment | undefined>();
  const [formValues, setValues] = useState<IInitialForm>(initialForm);
  const [disabled, setDisabled] = useState<any>(true);
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const selectLocation = (e: MapPressEvent) => {
    const {coordinate} = e.nativeEvent;
    setLocation({
      name: 'destination',
      latitude: coordinate.latitude,
      longitude: coordinate.longitude,
    });

    setRegion({
      ...initialRegion,
      latitude: coordinate.latitude,
      longitude: coordinate.longitude,
    });
  };

  const close = () => {
    setLocation(undefined);
    setShipment(undefined);
    setRegion(initialRegion);
    setValues(initialForm);
    closeModal();
  };

  const setFormValue = (key: string, value: string) => {
    const copy: any = {...formValues};
    copy[key] = value;
    setValues(copy);
  };

  const submitShipment = () => {
    addShipment(newShipment);
    close();
  };

  useEffect(() => {
    const {name, owner, cost} = formValues;
    if (
      name === '' ||
      owner === '' ||
      cost === '' ||
      typeof parseFloat(cost) !== 'number' ||
      location === undefined
    ) {
      setShipment(undefined);
      setDisabled(true);
      return;
    }

    setShipment({
      id: encode(`${name}-${owner}`),
      name,
      owner,
      cost: parseFloat(cost),
      status: EStatus.ordered,
      author: 'me',
      ride: [
        {
          name: 'origin',
          latitude: 4.711863,
          longitude: -74.0739219,
        },
        {
          name: 'location',
          latitude: 4.711863,
          longitude: -74.0739219,
        },
        location,
      ],
    });

    setDisabled(false);
  }, [formValues, location]);

  return (
    <Modal visible={open} animated animationType="slide" style={styles.modal}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View>
          <View style={styles.buttonCont}>
            <TouchableOpacity onPress={close} style={styles.closeButton}>
              <AppText text="Close" style={styles.closeButtonText} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.mapzone}>
          <View style={styles.mapCont}>
            <MapView
              style={{width: '100%', height: '100%'}}
              userInterfaceStyle={isDarkMode ? 'dark' : 'light'}
              zoomControlEnabled
              region={region}
              onPress={e => selectLocation(e)}>
              {location && (
                <Marker
                  coordinate={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                  }}
                />
              )}
            </MapView>
          </View>
        </View>

        <Field
          placeholder="Shipment Name"
          label="Shipment Name"
          value={formValues.name}
          onChangeText={(e: any) => setFormValue('name', e)}
        />
        <Field
          placeholder="Owner Name"
          label="Owner Name"
          value={formValues.owner}
          onChangeText={(e: any) => setFormValue('owner', e)}
        />
        <Field
          placeholder="Cost"
          label="Cost"
          value={formValues.cost}
          onChangeText={(e: any) => setFormValue('cost', e)}
        />

        {!newShipment && (
          <View style={styles.warning}>
            <AppText text={'You need'} />
            {location === undefined && (
              <AppText text={'* Press on the map to set destination'} />
            )}
            {formValues.name === '' && <AppText text={'* Set a name'} />}
            {formValues.owner === '' && <AppText text={'* Set a owner name'} />}
            {(formValues.cost === '' ||
              typeof parseFloat(formValues.cost) !== 'number') && (
              <AppText
                text={'* Set a cost and it must be valid (e.g. 50 or 50.25).'}
              />
            )}
          </View>
        )}

        <Button
          text="Save Shipment"
          onPress={submitShipment}
          disabled={disabled}
        />
      </ScrollView>
    </Modal>
  );
};

export default ShipmentModal;
